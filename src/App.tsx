import { Routes, Route } from "react-router-dom";
import Dispatch from "./dispatch/Dispatch";
import Home from "./home/Home";
import CreateLink from "./links/CreateLink";
import Links from "./links/Links";
import LandingPage from "./login/LandingPage";
import "./styles/_app.scss";

function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Dispatch />}>
          <Route path="home" element={<Home />} />
          <Route path="links" element={<Links />} />
          <Route path="links/newLink" element={<CreateLink />} />
          {/* <Route path="links/:id" element={<CreateLink />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
