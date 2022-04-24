import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, users } from "../api/requests";
import { TypeUser } from "../types/types";

const USER_LOGIN_EMPTY = {
  id: 0,
  email: "",
  password: "",
  active: true,
  admin: false,
  firstname: "",
  lastname: "",
};

interface AppContextInterface {
  userLoggedIn: TypeUser;
  setUserLoggedIn: React.Dispatch<React.SetStateAction<TypeUser>>;
  logout: () => void;
}

const UserContext = createContext<AppContextInterface>({
  userLoggedIn: USER_LOGIN_EMPTY,
  setUserLoggedIn: () => {},
  logout: () => {},
});

export default UserContext;

type Props = { children: React.ReactNode };
// eslint-disable-next-line react/function-component-definition
const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState<TypeUser>(USER_LOGIN_EMPTY);

  const navigate = useNavigate();

  // eslint-disable-next-line consistent-return
  const getCookie = async () => {
    const cookie = await auth.checkToken();
    if (cookie.status !== 200) {
      return navigate("/");
    }
    const user = await users.getOneUser(cookie.data.id);
    setUserLoggedIn(user);
  };

  //   const removeCookie = useCookies(["data"])[2];
  const logout = async () => {
    setUserLoggedIn(USER_LOGIN_EMPTY);
    const userLogout = await auth.logout();
    navigate("/");
    return userLogout;
  };

  useEffect(() => {
    getCookie();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ userLoggedIn, setUserLoggedIn, logout }}>
      {userLoggedIn && children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
