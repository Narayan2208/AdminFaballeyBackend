
import "./App.css";

import Allcomp from "./component/Allcomp";
import { useContext } from "react";
import { myContext } from "./context/AuthContext";
import Login from "./component/LoginAndSignup/Login";
import {Routes, Route} from "react-router-dom"

function App() {
  let {  isSuccess } = useContext(myContext);
  return (
    <>
    {/* {isSuccess ?  <Allcomp/> : <Login/>} */}
  <Routes>
    <Route path="/faballey" element={<Allcomp/>} />
    <Route path="/" element={<Login/>} />
  </Routes>
    </>
  );
}

export default App;
