import { Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NavBar from "../components/navbar/NavBar";



function PublicRoutes(sLogin, setLogin) {

  

  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </>

  )
}

export default PublicRoutes