import { Routes, Route } from "react-router-dom";
import Dispatch from "./dispatch/Dispatch";
import Home from "./home/Home";
import Links from "./Links/Links";
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
