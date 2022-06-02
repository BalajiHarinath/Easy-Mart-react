import "../../css/main.css";
import "./Profile.css";
import { useAuth } from "../../Context";
import { useScrollToTop, useDocumentTitle } from "../../utils";

export const Profile = () => {
    useScrollToTop();
    useDocumentTitle("Profile");
    const { authState, logout } = useAuth();
    const { userName, useremail } = authState;
    return(
        <div className="main-profile">
            <div className="card-profile">
                <div className="card-profile-header">
                    <h5>Profile</h5>
                    <button onClick={() => logout()}>Logout</button>
                </div>
                <div className="card-profile-text">
                    <p className="card-profile-text-header font-bold text-underline">UserDetails</p>
                    <p>Name: {userName}</p>
                    <p>Email: {useremail}</p>
                </div>
            </div>
        </div>
    )
}