import "../../css/main.css";
import "./Wishlist.css";
import { Link } from "react-router-dom";
import emptyWishlist from "../../Assets/Images/empty-wishlist.jpg";
import {  WishlistItemCard } from "./index";
import { useAuth } from "../../Context";
import { useScrollToTop, useDocumentTitle } from "../../utils";

export const Wishlist = () => {
    useScrollToTop();
    useDocumentTitle("Wishlist");
    const { authState: {wishlist} } = useAuth();
    return(  
        <main className="main-wishlist">
            <div className="spacer-2"></div>
            {
                wishlist.length === 0 ? 
                <div className="container-wishlist-empty flex flex-column">
                    <p className="title-wishlist text-2xl font-bold">Wishlist is Empty</p>
                    <img className="img-empty-wishlist" src={emptyWishlist} loading="lazy" alt="empty-wishlist" />
                    <Link className="btn-empty-wishlist btn-solid btn-medium text-base flex flex-align-center flex-justify-center" to="/products">Go to Products</Link>
                </div> 
                : 
                <>
                    <p className="title-wishlist text-2xl"><span className="font-semibold">My Wishlist</span> Items {wishlist.length}</p>
                    <div className="spacer-2"></div>
                    <div className="container-wishlist-card flex flex-justify-start flex-wrap mt-2 ml-5 mr-5 mb-2">
                    {
                        wishlist.map((item) => {
                            return(
                                <WishlistItemCard key={item._id} item={item} />
                            )   
                        })
                    }
                    </div>
                    
                    <div className="spacer-1"></div>
                </>
            }
            
        </main>
    )
}