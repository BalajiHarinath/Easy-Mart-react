import "../../css/main.css";
import "./Cart.css";
import { useState, useEffect } from "react";
import { useAuth, useCart } from "../../Context";
import { getTotalMRP, getDiscountAmount, getTotalAmount, getCartQuantity } from ".";

export const CartDetails = () => {
    const { authState: { cart }} = useAuth();
    const { removeFromCart, updateItemQuantity } = useCart();
    let deliveryFee = 200

    if(cart.length===0) {
        deliveryFee = 0;
    }

    const [displayCoupon, setDisplayCoupon] = useState({status: false, value: null});
    const [totalAmount, setTotalAmount] = useState(0);
    const [isEligibleForCoupon, setIsEligibleForCoupon] = useState(true);
    const [isOfferEncashed, setIsOfferEncashed] = useState(false)

    useEffect(() => {     
        setTotalAmount(getTotalAmount(cart, deliveryFee));      
    },[removeFromCart, updateItemQuantity])

    useEffect(() => {
        if(Number(totalAmount) < Number(1500) || totalAmount === 0) {
            setIsEligibleForCoupon(false)
        }else{
            setIsEligibleForCoupon(true)
        }
    },[displayCoupon, removeFromCart, updateItemQuantity])
    
    const totalMRP = getTotalMRP(cart);
    const discount = getDiscountAmount(cart);
    const cartQuantity = getCartQuantity(cart);

    const couponApplyHandler = () => {
        if(isEligibleForCoupon){
            setTotalAmount(prev => prev - displayCoupon.value)
            setIsOfferEncashed(true);
        }
            
        setDisplayCoupon({...displayCoupon, status:!displayCoupon.status})
    }

    return(
        <div className="cart-price-details m-2 pdl-2">
            <div className="pdb-2">
                <h5 className="font-semibold pdb-1">COUPONS</h5>
                <button className="cart-coupon btn-transparent" onClick={() => setDisplayCoupon({...displayCoupon, status:!displayCoupon.status})}>
                    <i className="fa fa-tag" aria-hidden="true"></i>
                    Apply Coupon
                    </button>
            </div>

            <div className={`${displayCoupon.status ? "modal-container-offer" : "display-none"}`}>
                <div className="modal">
                    <h4 className="modal-heading">Apply Coupon</h4>
                    <div className={`${isEligibleForCoupon ? "modal-text" : "modal-text poniter-events-none"}`}>
                        <div className="offer-details" >
                            <label >
                                <input type="radio" id="new-user" className="input-offer" name="coupon-input" value="500" onChange={(e) => setDisplayCoupon({...displayCoupon, value:e.target.value})}/>  
                                NEW YEAR OFFER 
                            </label>
                            <div>
                                Save Rs.500 on minimum purchase of 1500
                            </div>
                        </div>
                        <div className="offer-details">
                            <label>
                                <input type="radio" id="diwali-offer" className="input-offer" name="coupon-input" value="300" onChange={(e) => setDisplayCoupon({...displayCoupon, value:e.target.value})}/>  
                                DIWALI OFFER
                            </label>
                            <div>
                                Save Rs.300 on minimum purchase of 1500
                            </div>
                        </div>                     
                    </div>

                    <div className="modal-btn-container">
                        <button className={`${isOfferEncashed ? "btn-solid btn-small modal-btn poniter-events-none" : "btn-solid btn-small modal-btn"}`} onClick={couponApplyHandler}>{`${isEligibleForCoupon ?  isOfferEncashed ? "Offer Encashed" : "Apply" : "Not Eligible"}`}</button>
                    </div>
                    <button className="modal-close-btn" onClick={() => setDisplayCoupon({...displayCoupon, status:!displayCoupon.status})}><i className="fa fa-times" aria-hidden="true"></i></button>
                </div>
            </div>

            <div>
                <h5 className="font-semibold pdb-1">PRICE DETAILS : ({cartQuantity} items)</h5>
                <div className="flex pdb-1">
                    <p className="flex-grow-1 text-base">Total MRP</p>
                    <span>Rs. {totalMRP}/-</span>
                </div>
                <div className="flex pdb-1">
                    <p className="flex-grow-1 text-base">Total Discount</p>
                    <span>Rs. {discount}/-</span>
                </div>
                <div className="flex pdb-1">
                    <p className="flex-grow-1 text-base">Delivery Charge</p>
                    <span>Rs. {deliveryFee}/-</span>
                </div>
                <div className="flex pdb-1">
                    <p className="flex-grow-1 text-base font-semibold">Total Amount</p>
                    <span className="font-semibold">Rs. {totalAmount}/-</span>
                </div>
                <button className="cart-article-place-order btn-solid btn-small font-semibold">Place Order</button>
            </div>
        </div>
    )
}