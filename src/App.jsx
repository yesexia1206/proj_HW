import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
//import "./App.css";
import "./assets/css/all.min.css";

export default function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Login />}></Route>
        {/* <Route path="/" element={<Home />}></Route> */}
        {/* <Route path="/login" element={<Login />}></Route> */}
      </Routes>
    </>
  )
}
