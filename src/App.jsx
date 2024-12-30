import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Login from "./pages/Login";
import MemberCenter from "./pages/MemberCenter";
import MemberItem from "./pages/MemberItem";
import MemberHistory from "./pages/MemberHistory";
//import "./App.css";
import "./assets/css/all.min.css";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/memberCenter" element={<MemberCenter />}></Route>
        <Route path="/memberItem" element={<MemberItem />}></Route>
        <Route path="/memberHistory" element={<MemberHistory />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        {/* <Route path="/" element={<Home />}></Route> */}
      </Routes>
      <Footer />
    </>
  )
}
