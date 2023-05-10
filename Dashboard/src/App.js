
import "./App.css";

import Allcomp from "./component/Allcomp";

import Login from "./component/LoginAndSignup/Login";
import {Routes, Route} from "react-router-dom"

function App() {
  
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
