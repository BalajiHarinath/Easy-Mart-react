import "../../css/main.css";
import "./OrderSummary.css";
import { Link } from "react-router-dom";
import { useAuth, useCart } from "../../Context";
import { useScrollToTop, useDocumentTitle } from "../../utils";

export const  OrderSummary = () => {
    useScrollToTop();
    useDocumentTitle("Order Summary");
    const { orderDetails } = useCart();
    const { authState } = useAuth();
    const { userName } = authState;
    const { orderedProducts, totalAmount, paymentId, deliveryAddress, cartTotal, discount, deliveryCharge } = orderDetails;
    return(
        <main className="main-order-summary grid-2-column">       
            <>
                <div className="flex flex-column pd-1 flex-gap-1">
                    <div className="flex flex-column flex-gap-1">
                        <span>Order : 48843574</span>
                        <div className="font-bold pd-0">Thank You! {userName} for shopping with <span className="title-app">Easy Mart</span></div>
                        <Link to="/products">
                            <button className="btn-shop-again">Shop Again</button>
                        </Link>
                    </div>
                    <div className="container-order-products flex flex-wrap flex-gap-1">
                        {orderedProducts.map((item) => {
                            return(
                                <div className="cart-card-order-summary" key={item._id}>                            
                                    <img className="img-cart-order-summary" loading="lazy" src={item?.image?.src} alt={item?.image?.alt}/>
                                    <div className="flex flex-column flex-gap-0-5 pd-1">
                                        <span className="text-base">{item?.brandName}</span>
                                        <span className="text-base">{item?.product}</span>
                                        <div className="flex flex-gap-0-5 flex-justify-center flex-align-center">
                                            <span className="font-semibold">Rs. {item?.price}/-</span>
                                        </div>
                                        <div className="flex flex-gap-0-5 flex-justify-center flex-align-center">
                                            <span className="text-sm">Quantity : </span>  
                                            <span>{item.qty}</span>   
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                    
                <div className="summary-details flex flex-column pd-1">
                    <div className="container-text-order-summary pdt-2">
                        <h5 className="font-semibold pdb-1">ORDER SUMMARY : ({orderedProducts?.length} {`${orderedProducts?.length === 1 ? "item" : "items"}`})</h5>
                        <div className="flex pdb-1">
                            <p className="flex-grow-1 text-base">Total MRP</p>
                            <span>Rs. {cartTotal}/-</span>
                        </div>
                        <div className="flex pdb-1">
                            <p className="flex-grow-1 text-base">Total Discount</p>
                            <span>Rs. {discount}/-</span>
                        </div>
                        <div className="flex pdb-1">
                            <p className="flex-grow-1 text-base">Delivery Charge</p>
                            <span>Rs. {deliveryCharge}/-</span>
                        </div>
                        <div className="flex">
                            <p className="flex-grow-1 text-base font-semibold">Total Amount</p>
                            <span className="font-semibold">Rs. {totalAmount}/-</span>
                        </div>
                    </div>

                    <div className="spacer-1"></div>

                    <div className="container-text-order-summary flex flex-column flex-gap-1">
                        <div className="font-bold">Your Order is confirmed</div>
                        <p className="text-base">We have accepted your order and it is will be delivered soon.</p>
                    </div>

                    <div className="spacer-1"></div>
                    
                    <div className="container-text-order-summary flex flex-column flex-gap-1">
                        <div className="customer-information font-bold">Customer Information</div>
                        <div className="flex flex-column flex-gap-0-5">
                            <div className="font-bold">Contact</div>
                            <div>{deliveryAddress?.mobile}</div>
                        </div>
                        <div className="flex flex-column flex-gap-0-5">
                            <div className="font-bold">Shipping Address</div>
                            <div>{deliveryAddress?.name}</div>
                            <div>{deliveryAddress?.street}, {deliveryAddress?.city}</div>
                            <div>{deliveryAddress?.state}, {deliveryAddress?.country} - {deliveryAddress.zipCode}</div>
                        </div>
                    </div>
                </div>
            </>        
            <div className="spacer-1"></div>
         </main>
    )
}