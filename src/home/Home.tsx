import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";

function Home() {
  const { userLoggedIn } = useContext(UserContext);

  return (
    <div className="home neumInset">
      <h1>Welcome {userLoggedIn.firstname}</h1>
      <div className="home__container">
        <div className="home__user neumInset">
          <h2>Users</h2>
          <Link className="neumOutset" to="/admin/users/newUser">
            Create new user account
          </Link>
          <Link className="neumOutset" to="/admin/users">
            See all users
          </Link>
        </div>
        <div className="home__link neumInset">
          <h2>Links</h2>
          <Link className="neumOutset" to="/admin/links/newLink">
            Create new link
          </Link>
          <Link className="neumOutset" to="/admin/links">
            See all links
          </Link>
        </div>
        <div className="home__theme neumInset">
          <h2>Themes</h2>
          <Link className="neumOutset" to="/admin/themes/newTheme">
            Create new theme
          </Link>
          <Link className="neumOutset" to="/admin/themes">
            See all themes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
