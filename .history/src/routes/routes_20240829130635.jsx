import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Home from "../pages/Home";
import NotFound from "../pages/Notfound/Notfound";
import Footer from "../components/Footer/Footer";
import Blogs from "../pages/Blogs/Blogs";
import Contacts from "../pages/Contacts/Contacts";
import Navbar from "../components/Navbar/Navbar";
import VoiceControl from "../VoiControl";
const Admin = lazy(() => import("../pages/Admin/Layout/Admin"));
const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/register"));

export default function routes() {
  var isAdminRoute = location.pathname.includes("admin");
  var isLoginRoute = location.pathname === "/sign-in";
  var isRegisterRoute = location.pathname === "/register";
  return (
    <BrowserRouter>
      {!isAdminRoute && !isLoginRoute && !isRegisterRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
      <VoiceControl></VoiceControl>
      {!isAdminRoute && !isLoginRoute && !isRegisterRoute && <Footer />}
    </BrowserRouter>
  );
}
