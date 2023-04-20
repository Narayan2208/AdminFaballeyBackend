
import "./App.css";

import Allcomp from "./component/Allcomp";
import { useContext } from "react";
import { myContext } from "./context/AuthContext";
import Login from "./component/LoginAndSignup/Login";
function App() {
  let {  isSuccess } = useContext(myContext);
  return (
    <>
   
    {isSuccess ?  <Allcomp/> : <Login/>}
    </>
  );
}

export default App;
