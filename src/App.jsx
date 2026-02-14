import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OtherProfiles from "./pages/OtherProfiles";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter basename="/spotify-dg/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<OtherProfiles />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
