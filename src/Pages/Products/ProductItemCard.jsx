import "../../css/main.css";
import "./Products.css";
import { Link } from "react-router-dom";
import { useWishlist, useCart, useAuth } from "../../Context";

export const ProductItemCard = ({item}) => {
    const { _id, cardBadge, image:{ src, alt }, brandName, product, rating, numberOfReviews, price, priceStrike, outOfStock } = item;  
    const { addToWishlist } = useWishlist();
    const { addToCart } = useCart();
    const { authState: { wishlist, cart, loggedIn } } = useAuth();

    return(
        <div className={`${ outOfStock ? "card-product-outofstock" : "card-product"} flex flex-column mb-4 mr-2`}>
            <div className="container-img-product">
                {cardBadge && <div className="card-badge">{cardBadge}</div>}
                <img className="img-product" loading="lazy" src={src} alt={alt}/>
            </div>
            <div className="flex flex-column flex-gap-0-5">
                <h3 className="dod-company pdl-1 mt-0-5">{brandName}</h3>
                <h2 className="dod-product pdl-1">{product}</h2>
                <div className="card-rating flex flex-align-center pdl-1">
                    <div className="card-rating-stars">
                    {
                        Array.apply(null, {length : rating}).map((e,i) => (<span className="material-icons text-lg" key={i}>star</span>))
                    }
                    </div>
                    <div className="card-review">
                        <p className="card-dod-reviews">{numberOfReviews}</p>
                    </div>
                </div>
                <div className="card-price flex-gap-0-5 pdl-1">
                    <p className="card-dod-discount-price">Rs. {price}/-</p>
                    <p className="price-strike">Rs. {priceStrike}/-</p>
                </div>
                <div className={`${ outOfStock ? "btn-product-outofstock" : ""} flex flex-column`}>
                    {
                        !loggedIn ?
                            <>
                                <Link className={`${outOfStock ? "disabled" : ""} btn-product-cart text-base flex flex-justify-center`} to="/login">
                                    <span className="material-icons text-lg pdr-0-5">shopping_cart</span>
                                    Add to Cart
                                </Link>
                                    
                                <Link className={`${outOfStock ? "disabled" : ""} btn-product-wishlist text-base`} to="/login">
                                    Add to Wishlist
                                </Link> 
                            </>
                        :
                            <>
                                {
                                    (cart.length !==0 && cart.some((cartItem) => cartItem._id === _id)) 
                                        ? 
                                            <Link className={`${outOfStock ? "disabled" : ""} btn-product-cart text-base flex flex-justify-center`}
                                            to="/cart">
                                            <span className="material-icons text-lg pdr-0-5">shopping_cart</span>Go to Cart</Link>
                                        :
                                            <button className={`${outOfStock ? "disabled" : ""} btn-product-cart text-base flex flex-justify-center`}
                                                onClick={() => {addToCart(item, "Added to cart")}}>
                                            <span className="material-icons text-lg pdr-0-5">shopping_cart</span>Add to Cart</button>

                                }   
                                {
                                    (wishlist.length !== 0 && wishlist.some((listItem) => listItem._id === _id)) 
                                        ? 
                                            <Link className={`${outOfStock ? "disabled" : ""} btn-product-wishlist text-base`}
                                                to="/wishlist">
                                                Go to Wishlist</Link> 
                                        :
                                            <button className={`${outOfStock ? "disabled" : ""} btn-product-wishlist text-base`}
                                            onClick={()=>addToWishlist(item, "Added to wishlist")}>
                                                Add to Wishlist</button>
                                }                   
                            </>

                    }
                    
                </div>
            </div>
        </div>
    )
}