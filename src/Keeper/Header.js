import React from "react"
import Logout from "../Auth/Logout";


function Header(){
    return  <header className="header-container"> 
                <h1 className="app-title">Keeper App</h1> 
                <Logout />
            </header>
}

export default Header;