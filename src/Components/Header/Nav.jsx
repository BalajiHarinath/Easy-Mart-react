
import "../../css/main.css";
import "./Nav.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar }  from "./sidebar";
import { SearchBar } from "./SearchBar";
import { useAuth } from "../../Context";

export const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const {authState: { loggedIn, userName, wishlist, cart }, logout } = useAuth();
  const location = useLocation();

  const hamburgerHandler = () => {
    setShowSidebar(!showSidebar);
  }
  
  return (
    <div className="App">
      <nav className="navbar flex pdr-4 pdl-3">

            <div className="flex flex-align-center flex-gap-2">
                <button className="btn-transparent display-small-screen" onClick={hamburgerHandler}>
                  <span className="material-icons text-3xl">menu</span>
                </button>

                <Link className="logo font-bold text-2xl" to="/">Easy Mart</Link>

                <div className="list-style-none flex flex-gap-1">               
                    <div>
                      <Link className="nav-links font-semibold ml-2 nav-home display-desktop" to="/products">Shop Now</Link>
                    </div>                
                </div>   
            </div>

            {["/products", "/search"].includes(location.pathname) ? <SearchBar /> : 
            <div className="searchbar flex flex-justify-center pd-1-5 flex-grow-1">
                 <div className= "input-searchbar"></div>
            </div>}

            <ul className="nav-icons flex flex-justify-center flex-gap-2 list-style-none">
                
                <li className="flex flex-column flex-justify-center flex-align-center">
                    <Link className="flex flex-column" to={`${["/login", "/signup"].includes(location.pathname) ? "/login" : "/profile"}`}>
                        <span className={`${["/login", "/signup"].includes(location.pathname) && "selected"} material-icons text-2xl nav-links nav-profile`}>account_circle</span>
                    </Link>
                    <span className="text-xs text-capitalize">{userName}</span>
                </li>

                <li className="flex flex-column flex-justify-center flex-align-center">
                    <Link className="flex flex-column" to="/wishlist">
                        <span className="container-badge">
                            <span className={`${location.pathname === "/wishlist" && "selected"} material-icons text-2xl nav-links nav-wishlist`}>favorite</span>
                            {wishlist.length>0 && <span className="status-badge status-badge-number">{wishlist.length}</span>}
                        </span>
                    </Link>
                    <span className="text-xs">Wishlist</span> 
                </li>

                <li className="flex flex-column flex-justify-center flex-align-center">
                    <Link className={`${location.pathname === "/cart" && "selected"} flex flex-column`} to="/cart">
                        <span className="container-badge">
                            <span className={`${location.pathname === "/cart" && "selected"} material-icons text-2xl nav-links nav-cart`}>shopping_cart</span>
                            {cart.length>0 && <span className="status-badge status-badge-number">{cart.length}</span>}
                        </span>
                    </Link>    
                    <span className="text-xs">Cart</span>
                </li>

                <li className={`${loggedIn ? "flex flex-column flex-justify-center flex-align-center" : "display-none" }`}>
                    <Link className="flex flex-column" to="/login">
                        <span className="material-icons text-2xl nav-links nav-profile" onClick={()=> logout()}>logout</span>
                    </Link>
                    <span className="text-xs">LogOut</span>
                </li>
           
            </ul>

        </nav>

        {
        ["/products", "/search"].includes(location.pathname) &&
            <div className="searchbar-small-screen">
                <SearchBar isSmallScreen={{isSmallScreen: true}}/>
            </div>
        }

        {showSidebar && <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>}
    
    </div>
  );
}

