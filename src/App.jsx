import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddProfile from "./pages/AddProfile";
import OtherProfiles from "./pages/OtherProfiles";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/add">Add Profile</Link> |{" "}
        <Link to="/profiles">Other Profiles</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProfile />} />
        <Route path="/profiles" element={<OtherProfiles />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
