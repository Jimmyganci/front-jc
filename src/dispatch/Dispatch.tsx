import { Outlet } from "react-router-dom";
import NavBar from "../navBar/NavBar";

function Dispatch() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Dispatch;
