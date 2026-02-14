import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddProfile from "./pages/addprofile";
import ProfileDetails from "./pages/ProfileDetails";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<AddProfile />} />
          <Route path="profile/:id" element={<ProfileDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
