import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link to="/admin/home">Home</Link>
        </li>
        <li>
          <Link to="/admin/links">Links</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
