import "../../css/main.css";
import "./Wishlist.css";
import { useWishlist, useCart, useAuth } from "../../Context";
import { Link } from "react-router-dom";

export const WishlistItemCard = ({item}) =>{
    const { _id, image : { src, alt }, brandName, product, price, priceStrike } = item;
    const { removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();
    const { authState: {cart}} = useAuth();

    return(
        <div className="flex flex-justify-center flex-align-center"> {/*<!--Added this div to center the content in each grid-->*/}
            <div className="wishlist-card flex flex-column mr-2 mb-3" >
                <div className="container-img-wishlist">
                    <img className="img-wishlist" loading="lazy" src={src} alt={alt}/>
                </div>
                <div className="flex-grow-1 pd-1">
                    <div className="container-wishlist-text flex flex-column flex-justify-space-between flex-gap-0-5">
                        <p className="text-lg font-semibold">{brandName}</p>
                        <p className="text-lg font-semibold">{product}</p>
                        <div className="flex flex-justify-center flex-gap-0-5">
                            <span className="card-dod-discount-price">Rs. {price}/-</span>
                            <span className="price-strike">Rs. {priceStrike}/-</span>
                        </div>
                        <button className="btn-transparent btn-wishlist-fav" onClick={() => removeFromWishlist(_id, "Removed from wishlist")}><span className="material-icons text-2xl">favorite</span></button>
                    </div>                                  
                </div>

                {
                    (cart.length!==0 && cart.some((cartItem) => cartItem._id === _id))
                     ? 
                        <Link className="btn-wishlist-cart btn-transparent flex flex-justify-center flex-align-center pd-1" to="/cart">
                            <p className="text-wishlist-cart-btn font-medium text-base">Go to Cart</p>
                        </Link>
                    :
                        <button className="btn-wishlist-cart btn-transparent flex flex-justify-center flex-align-center pd-1" 
                            onClick={() => {removeFromWishlist(_id);
                                        addToCart(item, "Moved to cart")}}>
                        <p className="text-wishlist-cart-btn font-medium text-base">Move To Cart</p>
                        </button>
                }
               
            </div>
        </div>
    )
}