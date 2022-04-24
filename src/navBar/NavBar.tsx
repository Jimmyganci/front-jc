import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Button from "../layouts/button/Button";

function NavBar() {
  const { logout } = useContext(UserContext);
  return (
    <nav className="navBar">
      <div>
        <ul>
          <li>
            <Link to="/admin/home">Home</Link>
          </li>
          <li>
            <Link to="/admin/links">Links</Link>
          </li>
          <li>
            <Link to="/admin/themes">Themes</Link>
          </li>
          <li>
            <Link to="/admin/users">Users</Link>
          </li>
        </ul>
      </div>
      <Button
        name="Logout"
        className="navBar__btn"
        type="button"
        onClick={() => logout()}
      />
    </nav>
  );
}

export default NavBar;
