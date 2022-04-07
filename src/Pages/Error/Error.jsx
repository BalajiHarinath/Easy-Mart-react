import "../../css/main.css";
import "./Error.css";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../utils";
import pagenotfound from "../../Assets/Images/page-not-found.jpg";

export const Error = () => {
    useDocumentTitle();
    return(
        <div>
            <img className="image-error-page" src={pagenotfound} loading="lazy" alt="page-not-found"/>
            <div className="container-text flex flex-column flex-align-center flex-gap-1">
                <p className="font-bold text-2xl">Page Not Found</p>
                <Link className="btn-solid btn-medium text-base flex flex-align-center flex-justify-center" to="/">Home</Link>
            </div>         
        </div>
    )
}