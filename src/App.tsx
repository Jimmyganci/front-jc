import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dispatch from "./dispatch/Dispatch";
import Home from "./home/Home";
import CreateLink from "./links/createLink/CreateLink";
import EditLink from "./links/editLink/EditLink";
import Links from "./links/Links";
import LandingPage from "./login/LandingPage";
import "./styles/_app.scss";
import CreateTheme from "./themes/CreateTheme";
import EditTheme from "./themes/EditTheme";
import Themes from "./themes/Themes";
import "react-toastify/dist/ReactToastify.css";
import Users from "./users/Users";
import EditUser from "./users/editUser/EditUser";
import CreateUser from "./users/createUser/CreateUser";

function App() {
  return (
    <div className="relative">
      <ToastContainer position="top-center" autoClose={500} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Dispatch />}>
          <Route path="home" element={<Home />} />
          <Route path="links" element={<Links />} />
          <Route path="links/newLink" element={<CreateLink />} />
          <Route path="links/editLink/:id" element={<EditLink />} />
          <Route path="themes" element={<Themes />} />
          <Route path="themes/newTheme" element={<CreateTheme />} />
          <Route path="themes/editTheme/:id" element={<EditTheme />} />
          <Route path="users" element={<Users />} />
          <Route path="users/editUser/:id" element={<EditUser />} />
          <Route path="users/newUser" element={<CreateUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
