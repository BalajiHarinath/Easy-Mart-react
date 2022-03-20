
import "../../css/main.css";
import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar }  from "./sidebar";
import { useAuth } from "../../Context";

export const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const {authState: { loggedIn, userName }, logout } = useAuth();

  const hamburgerHandler = () => {
    setShowSidebar(!showSidebar);
  }

  const navLinks = [
    { text: "Home", link:"/"},
    { text: "Shop Now", link:"/products"}
  ]
  
  return (
    <div className="App">
      <nav className="navbar flex pdr-4 pdl-3">

            <div className="flex flex-align-center flex-gap-2">
                <button className="btn-transparent display-small-screen" onClick={hamburgerHandler}>
                  <span className="material-icons text-3xl">menu</span>
                </button>

                <h4 className="title font-bold m">Easy Mart</h4>

                <ul className="list-style-none flex flex-gap-1">
                  {
                    navLinks.map(({ text, link }) => {
                      return(
                        <li key={text}>
                          <Link className="nav-links font-semibold ml-2 nav-home display-desktop" to={link}>{text}</Link>
                        </li>
                      )
                    })
                  }
                </ul>   
            </div>

            <div className="searchbar flex flex-justify-center pd-1 flex-grow-1">
                <button className="btn-searchbar flex flex-align-center"><span className="material-icons text-lg">search</span></button>
                <input className="input-searchbar" type="text" placeholder="Type to search"/>
            </div>

            <ul className="nav-icons flex flex-justify-center flex-gap-2 list-style-none">
                
                <li className="flex flex-column flex-justify-center flex-align-center">
                    <Link className="flex flex-column" to="/login">
                        <span className="material-icons text-2xl nav-links nav-profile">account_circle</span>
                    </Link>
                    <span className="text-xs text-capitalize">{userName}</span>
                </li>

                <li className="flex flex-column flex-justify-center flex-align-center">
                    <Link className="flex flex-column" to="/wishlist">
                        <span className="container-badge">
                            <span className="material-icons text-2xl nav-links nav-wishlist">favorite</span>
                            <span className="status-badge status-badge-number">2</span>
                        </span>
                    </Link>
                    <span className="text-xs">Wishlist</span> 
                </li>

                <li className="flex flex-column flex-justify-center flex-align-center">
                    <Link className="flex flex-column" to="/cart">
                        <span className="container-badge">
                            <span className="material-icons text-2xl nav-links nav-cart">shopping_cart</span>
                            <span className="status-badge status-badge-number">1</span>
                        </span>
                    </Link>    
                    <span className="text-xs">Cart</span>
                </li>

                <li className="flex flex-column flex-justify-center flex-align-center">
                    <button className="btn-transparent">
                        <span className="material-icons icon-theme text-3xl">dark_mode</span>
                        {/* <span class="material-icons icon-theme text-3xl">{theme ? "dark_mode" : "light_mode"}</span> */}
                    </button>
                </li>

                <li className={`${loggedIn ? "flex flex-column flex-justify-center flex-align-center" : "display-none" }`}>
                    <Link className="flex flex-column" to="/login">
                        <span className="material-icons text-2xl nav-links nav-profile" onClick={()=> logout()}>logout</span>
                    </Link>
                    <span className="text-xs">LogOut</span>
                </li>
           
            </ul>

        </nav>

        <div className="searchbar-small-screen">
            <button className="btn-searchbar"><span className="material-icons text-lg">search</span></button>
            <input className="input-searchbar flex flex-grow-1" type="text" placeholder="Type to search"/>
        </div>

        {showSidebar && <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>}
    
    </div>
  );
}

