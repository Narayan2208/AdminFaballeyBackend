
import "./App.css";
import Sidebar from "../src/component/Sidebar";
import Navbar from "./component/Navbar";
import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { myContext } from "./context/AuthContext";
import AllAdmins from "./component/AllAdmins.jsx";
import Products from "./component/Products";
function App() {
  let {  isBool, isBool2 } = useContext(myContext);
  return (
    <>
      <Navbar />
      <Sidebar />
      <Box display="flex" justifyContent="space-between">
        <Box w={"15vw"} h={"100vh"}></Box>
        {isBool ? <AllAdmins /> : ""}
        {isBool2 ? <Products /> : ""}
      </Box>
    </>
  );
}

export default App;
