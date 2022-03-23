import "../../css/main.css";
import "./Cart.css";
import { CartDetails, CartItemCard } from "./index";
import { useAuth } from "../../Context";
import { useScrollToTop } from "../../utils";

export const Cart = () => {
    useScrollToTop();
    const { authState: {cart} } = useAuth();
    return(
        <main className="main-cart grid-2-column">
            <div className="flex flex-column flex-align-end pd-1">
                {
                    cart.length === 0 ? 
                        <p className="title-cart text-2xl"><span className="font-semibold">My Cart</span> Items 0</p>
                    :
                         cart.map((item) => {
                            return(
                                <CartItemCard key={item._id} item={item} />
                            )
                        })
                }
            </div>
                
            <div className="flex flex-column pd-1">
                <CartDetails />
            </div>

            <div className="spacer-1"></div>
        </main>
    )
}