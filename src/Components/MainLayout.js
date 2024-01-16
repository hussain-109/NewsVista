import NavBar from "./Navbar";
import SideNav from "./sideNav";
import { Outlet } from "react-router-dom";
export default function MainLayout(){
    return(
        <>
        <NavBar/>
          <SideNav/>
          <Outlet/>
        </>
    )
}