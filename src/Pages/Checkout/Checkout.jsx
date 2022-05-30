import "../../css/main.css";
import "./Checkout.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartDetails } from "../Cart";
import { AddressCard } from "./AddressCard";
import { AddAddressModal } from "./AddAddressModal";
import { useAddress, useAuth, useCart } from "../../Context";
import { useScrollToTop, useDocumentTitle } from "../../utils";
import { Loader } from "../../Components";

export const Checkout = () => {
    useScrollToTop();
    useDocumentTitle("Checkout");
    const [showNewAddressModal, setShowNewAddressModal] = useState(false);
    const [isAddressSelected, setIsAddressSelected] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState({})
    const { cartPriceDetails, setOrderDetails, clearCart } = useCart();
    const { authState } = useAuth();
    const { userName, useremail, addressData, cart } = authState;
    const { getAddress, isAddressLoading } = useAddress();

    useEffect(() => {
        getAddress()
    },[])

	const paymentFailure = () => {
		console.log("Failure")
	};

    const navigate = useNavigate();

	const loadExternalScript = (src) => {
		return new Promise((resolve) => {
			const script = document.createElement('script');
			script.src = src;
			document.body.appendChild(script);
			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};
		});
	};

	const showRazorpay = async () => {
		const res = await loadExternalScript(
			'https://checkout.razorpay.com/v1/checkout.js',
		);

		if (!res) {
			console.log('Something went wrong! Payment options are not loaded.');
			return;
		}

		var options = {
			key: "rzp_test_un9iYwOtXgvVSU",
			amount: cartPriceDetails.finalAmount * 100,
			currency: "INR",
			name: "Easy Mart",
			description: "Test Transaction",
			handler: function (response) {
                const orderData = {
                    orderedProducts: [...cart],
                    totalAmount: cartPriceDetails.finalAmount,
                    paymentId: response.razorpay_payment_id,
                    deliveryAddress: selectedAddress,
                    cartTotal: cartPriceDetails.mrp,
                    discount: cartPriceDetails.finalDiscount,
                    deliveryCharge: cartPriceDetails.deliveryCharge,
                }
                setOrderDetails(orderData);
                clearCart(cart);
                navigate("/summary")
			},
			prefill: {
				name: userName,
				email: useremail,
				contact: `91${selectedAddress.mobile}`,
				method: 'netbanking',
			},
            theme: {
                color: "#973a99",
            },
			notes: {
				address: `${selectedAddress?.name}, ${selectedAddress?.street}, ${selectedAddress?.city}, ${selectedAddress?.zipCode}`,
			},
		};
		var paymentObject = new window.Razorpay(options);
		paymentObject.on('payment.failed', function (response) {
			console.log(response.error);
			paymentFailure();
		});
		paymentObject.open();
	};
    return(
        <main className="main-checkout grid-2-column">       
            {
                <>
                    {isAddressLoading && <Loader />}
                    {!isAddressLoading &&
                        <div className="flex flex-column flex-align-end pd-1 pd-2 flex-gap-2">
                            <div className="flex flex-gap-2">
                                <div className="font-bold pdr-3">DELIVERY ADDRESS</div>
                                <button className="btn-add-new-address pdl-2 btn-transparent" onClick={() => setShowNewAddressModal(true)}>
                                    <i className="fa fa-plus pdr-1" aria-hidden="true"></i> 
                                    Add New Address</button>
                            </div>
                            
                            {
                                addressData?.length > 0 ?
                                    addressData.map(address => 
                                        <AddressCard 
                                            address={address} 
                                            setIsAddressSelected={setIsAddressSelected}
                                            setSelectedAddress={setSelectedAddress}
                                            key={address._id}
                                        />)
                                        :
                                        <div className="text-empty-address text-large">Add a delivery address!!!</div>
                            }
                            {showNewAddressModal &&
                            <AddAddressModal 
                                setShowNewAddressModal={setShowNewAddressModal} 
                            />}
                            
                        </div>
                    }
                        
                    <div className="flex flex-column pd-1">
                        <CartDetails 
                            isAddressSelected={isAddressSelected} 
                            addressData={addressData}
                            showRazorpay={showRazorpay}
                        />
                    </div>
                </>
                    
                }
            <div className="spacer-1"></div>
         </main>
    )
    
}