import "../../css/main.css";
import "./Wishlist.css";
import {  WishlistItemCard } from "./index";
import { useAuth } from "../../Context";
import { useScrollToTop } from "../../utils";

export const Wishlist = () => {
    useScrollToTop();
    const { authState: {wishlist} } = useAuth();
    return(  
        <main className="main-wishlist grid-3-column m-2">
            <div className="spacer-2"></div>
            {
                wishlist.length === 0 ? 
                <>
                     <p className="title-wishlist text-2xl"><span className="font-semibold">My Wishlist</span> Items 0</p>
                </> 
                : 
                <>
                    <p className="title-wishlist text-2xl"><span className="font-semibold">My Wishlist</span> Items {wishlist.length}</p>
                    {
                        wishlist.map((item) => {
                            return(
                                <WishlistItemCard key={item._id} item={item} />
                            )   
                        })
                    }
                </>
            }
            
        </main>
    )
}