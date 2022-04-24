import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../contexts/UserContext";
import NavBar from "../navBar/NavBar";

function Dispatch() {
  return (
    <div>
      <UserContextProvider>
        <NavBar />
        <Outlet />
      </UserContextProvider>
    </div>
  );
}

export default Dispatch;
