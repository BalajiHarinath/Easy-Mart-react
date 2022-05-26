import "../../css/main.css";
import "./Nav.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SearchKeywordData } from "./SearchkeywordData";

export const SearchBar = ({isSmallScreen}) => {
    const[searchTerm, setSearchTerm] = useState("");
    const[activeSearchBar, setActiveSearchBar] = useState(false);
    const[searchKeyword, setSearchKeyword] = useState([]);
    const[displaySearchOptionsList, setDisplaySearchOptionsList] = useState(false)
    const searchBarRef= useRef(null);
    const timerId = useRef(null);

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

    const searchOptionClickHandler = (item) => {
        // console.log(item)
        if(searchTerm!==""){
            navigate(`/search?searchTerm=${encodeURIComponent(item)}`);
            setSearchTerm("");
            setActiveSearchBar(false);
            setDisplaySearchOptionsList(false);
    }}

    const searchSubmit = () => {    
        let items = [];   
        SearchKeywordData.map(item => {
           if(item.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
            items = [...items, item]
           }  
           setDisplaySearchOptionsList(true);
           setSearchKeyword(items);
           if(searchTerm === ""){
            setDisplaySearchOptionsList(false);
           }
        })
    }

    const debounce = function(fn, delay){
        let timer;
        return function() {
            clearTimeout(timerId.current)
            timer = setTimeout(() => {
                setSearchKeyword([])
                fn()
            },delay)
            timerId.current = timer
        }
    }

    const debounceFunction = debounce(searchSubmit, 1000)

    return(
        !isSmallScreen ? 
        <div className="searchbar flex flex-justify-center pd-1 flex-grow-1" ref={searchBarRef}>
            <button className={`${displaySearchOptionsList ? "searchbar-active btn-searchbar cursor-pointer": "display-none" }`} 
                type="submit"
                onClick={() => {setDisplaySearchOptionsList(false);
                        setSearchTerm("");
                        setActiveSearchBar(false);}}
            >
                <span className="material-icons text-lg">close</span>
            </button>
            <input className={`${activeSearchBar ? "searchbar-active": "" } input-searchbar`} type="text"
                onFocus={() => {setActiveSearchBar(true)}}
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)}
                onKeyUp = {() => debounceFunction()}
                placeholder="Type to search"/>
                {
                    displaySearchOptionsList &&
                    <ul className="searchitem-list flex flex-column flex-gap-0-5 pd-1">
                        {searchKeyword.length > 0 && searchKeyword.map((item, index) => (
                            <li className="searchitem text-sm" key={index}
                            onClick={() => {searchOptionClickHandler(item)}}>{item}</li>
                        ))}
                        {
                           searchKeyword.length === 0 && <li>No products found</li>
                        }
                    </ul>
                }
            
        </div> :
        <>
           <button className={`${displaySearchOptionsList ? "searchbar-active btn-searchbar cursor-pointer": "display-none" }`} 
                type="submit"
                onClick={() => {setDisplaySearchOptionsList(false);
                        setSearchTerm("");
                        setActiveSearchBar(false);}}
            >
                <span className="material-icons text-lg">close</span>
            </button>
            <input className={`${activeSearchBar ? "searchbar-active": "" } input-searchbar flex flex-grow-1`} type="text"
                onFocus={() => {setActiveSearchBar(true)}}
                ref={searchBarRef}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onKeyUp = {() => debounceFunction()}
                placeholder="Type to search"/>
            {
                displaySearchOptionsList &&
                <ul className="searchitem-list flex flex-column flex-gap-0-5 pd-1">
                    {searchKeyword.length > 0 && searchKeyword.map((item, index) => (
                        <li className="searchitem text-sm" key={index}
                        onClick={() => {searchOptionClickHandler(item)}}>{item}</li>
                    ))}
                    {
                        searchKeyword.length === 0 && <li>No products found</li>
                    }
                </ul>
            }
        </>
        
    )
}