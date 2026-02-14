// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AddProfile from "./pages/addprofile";
import OtherProfiles from "./pages/OtherProfiles";
import About from "./pages/about";
import NotFound from "./pages/notfound";

function App() {
  return (
    <div>
      {/* Routes for all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-profile" element={<AddProfile />} />
        <Route path="/profiles" element={<OtherProfiles />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
