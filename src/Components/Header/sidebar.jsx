import { sidebarData } from "./sidebar-data";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({showSidebar, setShowSidebar}) => {
    const sideBarCloseBtn = () => {
        setShowSidebar(!showSidebar);
    }
    return(
        <aside className = "container-sidebar pd-1">
            <button className="btn-sidebar-close btn-transparent text-3xl" onClick={sideBarCloseBtn}><span className="material-icons">close</span></button>
            <ul className="list-style-none flex flex-column flex-gap-1 text-lg pd-2">
                {
                    sidebarData.map((item,index) => {
                        const { name, link } = item
                    return(
                        <Link key={index} className="sidebar-item pd-1" to={link}>{name}</Link>
                    )
                
                    })
                }
            </ul>
        </aside>
    )}

export {Sidebar};