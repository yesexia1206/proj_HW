import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Login from "./pages/Login";
//import "./App.css";
import "./assets/css/all.min.css";
import MemberCenter from "./pages/MemberCenter";
import MemberItem from "./component/MemberItem";
import MemberHistory from "./component/MemberHistory";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/memberCenter" element={<MemberCenter />}></Route>
        <Route path="/memberItem" element={<MemberItem />}></Route>
        <Route path="/memberHistory" element={<MemberHistory />}></Route>
        {/* <Route path="/" element={<Home />}></Route> */}
        {/* <Route path="/login" element={<Login />}></Route> */}
      </Routes>
      <Footer />
    </>
  )
}
