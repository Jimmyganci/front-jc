import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { users } from "../api/requests";
import { TypeUser } from "../types/types";
import User from "./User";

function Users() {
  const [usersList, setUsersList] = useState<TypeUser[]>([]);

  const getAllUsers = async () => {
    const themesData = await users.getAllUsers();
    setUsersList(themesData);
  };

  const updateUser = async (id: number, data: TypeUser) => {
    const userUpdated = await users.updateUser(id, {
      ...data,
    });
    return (
      userUpdated.status === 200 &&
      setUsersList(
        usersList.map((user) => {
          let newUser = user;
          if (user.id === id) {
            newUser = data;
          }
          return newUser;
        })
      )
    );
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className="themes">
      <div className="themes__header">
        <h1>My Users</h1>
        <NavLink
          className="themes__newTheme neumOutset"
          to="/admin/users/newUser"
        >
          Add new user
        </NavLink>
      </div>
      {usersList.map((user) => (
        <User key={user.id} {...user} onUpdate={updateUser} />
      ))}
    </div>
  );
}

export default Users;
