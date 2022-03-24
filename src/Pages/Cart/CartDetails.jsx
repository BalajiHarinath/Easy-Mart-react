import "../../css/main.css";
import "./Cart.css";
import { useAuth } from "../../Context";
import { getTotalMRP, getDiscountAmount, getTotalAmount, getCartQuantity } from ".";

export const CartDetails = () => {
    const { authState: { cart }} = useAuth();
    let deliveryFee = 200

    if(cart.length===0) {
        deliveryFee = 0;
    }

    const totalMRP = getTotalMRP(cart);
    const discount = getDiscountAmount(cart);
    const totalAmount = getTotalAmount(cart, deliveryFee);
    const cartQuantity = getCartQuantity(cart);

    return(
        <div className="cart-price-details m-2 pdl-2">
            <div className="pdb-2">
                <h5 className="font-semibold pdb-1">COUPONS</h5>
                <a className="cart-coupon" href=""><i className="fa fa-tag" aria-hidden="true"></i>Apply Coupon</a>
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