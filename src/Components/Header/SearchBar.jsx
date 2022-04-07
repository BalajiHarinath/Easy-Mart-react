import "../../css/main.css";
import "./Nav.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = ({isSmallScreen}) => {
    const[searchTerm, setSearchTerm] = useState("");
    const[activeSearchBar, setActiveSearchBar] = useState(false);
    const searchBarRef= useRef(null);

    const navigate = useNavigate();

    const closeActiveSearchBar = (e) => {
        if(!searchBarRef.current.contains(e.target)) {
            setActiveSearchBar(false)
        }
    }

    useEffect(() => {
        document.addEventListener("click", closeActiveSearchBar)
        return () => {document.removeEventListener("click", closeActiveSearchBar )}
    },[])

    
    const searchSubmit = () => {
        if(searchTerm!==""){
            navigate(`/search?searchTerm=${encodeURIComponent(searchTerm)}`);
            setSearchTerm("");
            setActiveSearchBar(false);
        }
    }

    return(
        !isSmallScreen ? 
        <div className="searchbar flex flex-justify-center pd-1 flex-grow-1" ref={searchBarRef}>
            <button className={`${activeSearchBar ? "searchbar-active": "" } btn-searchbar cursor-pointer`} 
                type="submit"
                onClick={searchSubmit}
            >
                <span className="material-icons text-lg">search</span>
            </button>
            <input className={`${activeSearchBar ? "searchbar-active": "" } input-searchbar`} type="text"
                onFocus={() => {setActiveSearchBar(true)}}
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)}
                onKeyUp={e => { if(e.key === "Enter") {
                    searchSubmit();
                }}}
                placeholder="Type to search"/>
        </div> :
        <>
            <button className={`${activeSearchBar ? "searchbar-active": "" } btn-searchbar cursor-pointer`} 
                type="submit"
                onClick={searchSubmit}>
                <span className="material-icons text-lg">search</span>
            </button>
            <input className={`${activeSearchBar ? "searchbar-active": "" } input-searchbar flex flex-grow-1`} type="text"
                onFocus={() => {setActiveSearchBar(true)}}
                ref={searchBarRef}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onKeyUp={e => { if(e.key === "Enter") {
                    searchSubmit();
                }}}
                placeholder="Type to search"/>
        </>
        
    )
}