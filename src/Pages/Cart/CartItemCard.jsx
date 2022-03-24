import "../../css/main.css";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useCart, useWishlist, useAuth } from "../../Context";

export const CartItemCard = ({item}) => {
    const { _id, image : { src, alt }, brandName, product, price, priceStrike, qty } = item;
    const { removeFromCart, updateItemQuantity } = useCart();
    const { addToWishlist } = useWishlist();
    const { authState: {wishlist}} = useAuth();

    return(
        <div className="cart-card m-2">
            <img className="img-cart" loading="lazy" src={src} alt={alt}/>
            <div className="flex flex-column flex-gap-0-5 pd-1">
                <span className="text-lg">{brandName}</span>
                <span className="text-lg">{product}</span>
                <div className="flex flex-gap-0-5 flex-justify-center flex-align-center">
                    <span className="font-semibold">Rs. {price}/-</span>
                    <span className="text-sm text-line-through">Rs. {priceStrike}/-</span>
                </div>
                <div className="flex flex-gap-0-5 flex-justify-center flex-align-center">
                    <span className="text-sm">Quantity : </span>
                    <button className="btn-transparent" onClick={() => {updateItemQuantity(_id, "decrement", "Cart updated")}} disabled={qty===1}><span className="material-icons">remove_circle</span></button>
                    <span>{qty}</span>
                    <button className="btn-transparent" onClick={() => {updateItemQuantity(_id, "increment", "Cart updated")}}><span className="material-icons">add_circle</span></button>
                </div>
                <div className="flex flex-column flex-gap-0-5">
                    <button className="btn-remove-from-cart btn-solid btn-small" onClick={() => {removeFromCart(_id, "Removed from cart")}}>Remove From Cart</button>
                    
                    {
                        (wishlist.length !==0 && wishlist.some((listItem) => listItem._id === _id))
                        ?
                            <Link className="btn-move-to-wishlist btn-outline btn-small flex flex-align-center flex-justify-center" 
                                to="/wishlist">
                                Go to Wishlist</Link>
                        :
                            <button className="btn-move-to-wishlist btn-outline btn-small" 
                            onClick={() => {removeFromCart(_id);
                                            addToWishlist(item, "Moved to wishlist")}}>
                                Move to Wishlist</button>
                    }
                </div>
            </div>
        </div>
        )
}