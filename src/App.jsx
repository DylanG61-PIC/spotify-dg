// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AddProfile from "./pages/AddProfile";
import OtherProfiles from "./pages/OtherProfiles";
import About from "./pages/About";
import ProfileDetail from "./pages/ProfileDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* All pages use the Layout with nav */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="add-profile" element={<AddProfile />} />
        <Route path="profiles" element={<OtherProfiles />} />
        <Route path="profiles/:id" element={<ProfileDetail />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
