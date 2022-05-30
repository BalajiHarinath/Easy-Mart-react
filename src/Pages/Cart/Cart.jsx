import "../../css/main.css";
import "./Cart.css";
import emptyCart from "../../Assets/Images/empty-cart.jpg";
import { Link } from "react-router-dom";
import { CartDetails, CartItemCard } from "./index";
import { useAuth } from "../../Context";
import { useScrollToTop, useDocumentTitle } from "../../utils";

export const Cart = () => {
    useScrollToTop();
    useDocumentTitle("Cart");
    const { authState: {cart} } = useAuth();
    return(
        <main className="main-cart grid-2-column">       
            {
                    cart.length === 0 ? 

                    <div className="container-cart-empty flex flex-column">
                        <div className="spacer-1"></div>
                        <p className="text-2xl font-bold">Cart is empty</p>
                        <img className="img-empty-wishlist" src={emptyCart} loading="lazy" alt="empty-wishlist" />
                        <Link className="btn-empty-wishlist btn-solid btn-medium text-base flex flex-align-center flex-justify-center" to="/products">Go to Products</Link>
                    </div>    
                    :
                    <>
                    <div className="flex flex-column flex-align-end pd-1">
                        {cart.map((item) => {
                            return(
                                <CartItemCard key={item._id} item={item} />
                            )
                        })}
                    </div>
                        
                    <div className="flex flex-column pd-1">
                        <CartDetails />
                    </div>
                    </>
                    
                }
            <div className="spacer-1"></div>
         </main>
    )
}