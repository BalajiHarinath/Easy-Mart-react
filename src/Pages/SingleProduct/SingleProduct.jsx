import "../../css/main.css";
import "./SingleProduct.css";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useWishlist, useProducts, useCart, useAuth } from "../../Context";
import { useScrollToTop, useDocumentTitle } from "../../utils";

export const SingleProduct = () => {
    useScrollToTop();
    useDocumentTitle();

    const { products, getSingleProduct } = useProducts();
    const { productStatus, singleProductData } = products;
    const { productId } = useParams();
    const { addToWishlist } = useWishlist();
    const { addToCart } = useCart();
    const { authState: { wishlist, cart, loggedIn } } = useAuth();

    useEffect(() => {
        getSingleProduct(productId);
    },[])

    return(
        <main className="main-singleproduct flex flex-justify-center"> 
            { productStatus==="loading" && <div className="loading font-semibold text-2xl">Loading...</div> }  
            { productStatus==="success" &&
                <section className="container-single-product-page">
                    <img
                    className="cart-img"
                    loading="lazy"
                    src={singleProductData?.image?.src}
                    alt={singleProductData?.image?.alt}
                    />
                    <div className="product-details">
                        <span className="text-xl">{singleProductData?.brandName} {singleProductData?.product}</span>
                        <div>
                            <span className="font-semibold">Rs.{singleProductData?.price}</span>
                            <span className="text-sm text-line-through pdl-0-5">
                                Rs.{singleProductData?.priceStrike}
                            </span>
                        </div>
                        <span className="cart-article-discount text-sm font-semibold">
                            10% off
                        </span>
                        <div className="card-rating-stars flex align-items-center">
                            {Array.apply(null, {length: singleProductData?.rating}).map((e,i) => (<span className="material-icons text-lg" key={i}>star</span>)) }
                            <span className="text-sm">({singleProductData?.numberOfReviews})</span>
                        </div>

                        <p className="text-align-left pdb-1 text-base">
                            {singleProductData?.description}
                        </p>
                        <div className="product-status">
                            <div className="flex flex-gap-1">
                                <i className="fa fa-truck" aria-hidden="true"></i>Fast delivery
                                available
                            </div>
                            <div className="flex flex-gap-1">
                                <i className="fa fa-calendar-check-o" aria-hidden="true"></i>Currently
                                in stock
                            </div>
                            <div className="flex flex-gap-1">
                                <i className="fa fa-check-square" aria-hidden="true"></i>Price
                                displayed is inclusive of all taxes
                            </div>
                        </div>
                        <div className="btn-container-single-product-page">
                            {
                                !loggedIn ? 
                                    <>
                                        <Link className="cart-article-btn-remove-from-cart btn-solid btn-small" to="/login">
                                            Remove From Cart
                                        </Link>
                                        
                                        <Link className="cart-article-btn-move-to-wishlist btn-outline btn-small" to="/login">
                                            Move to Wishlist
                                        </Link>
                                    </>
                                :
                                    <>                              
                                        {
                                            (cart.length !==0 && cart.some((cartItem) => cartItem._id === productId)) 
                                                ? 
                                                    <Link className="cart-article-btn-remove-from-cart btn-solid btn-small"
                                                    to="/cart">
                                                    <span className="material-icons text-lg pdr-0-5">shopping_cart</span>Go to Cart</Link>
                                                :
                                                    <button className="cart-article-btn-remove-from-cart btn-solid btn-small"
                                                        onClick={() => {addToCart(singleProductData, "Added to cart")}}>
                                                    <span className="material-icons text-lg pdr-0-5">shopping_cart</span>Add to Cart</button>
                                        } 
                                        {
                                            (wishlist.length !== 0 && wishlist.some((listItem) => listItem._id === productId)) 
                                                ? 
                                                    <Link className="cart-article-btn-move-to-wishlist btn-outline btn-small"
                                                        to="/wishlist">
                                                        Go to Wishlist</Link> 
                                                :
                                                    <button className="cart-article-btn-move-to-wishlist btn-outline btn-small"
                                                    onClick={()=>addToWishlist(singleProductData, "Added to wishlist")}>
                                                        Add to Wishlist</button>
                                        }    
                                    </>
                            }
                        </div>
                    </div>
                </section>
            }
            { productStatus==="error" && <div>{singleProductData}</div> }
        </main>
    )
}
