import "../../css/main.css";
import "./Checkout.css";
import { useState, useEffect } from "react";
import { CartDetails } from "../Cart";
import { AddressCard } from "./AddressCard";
import { AddAddressModal } from "./AddAddressModal";
import { useAddress, useAuth } from "../../Context";
import { useScrollToTop, useDocumentTitle } from "../../utils";

export const Checkout = () => {
    useScrollToTop();
    useDocumentTitle();
    const [showNewAddressModal, setShowNewAddressModal] = useState(false);
    const [isAddressSelected, setIsAddressSelected] = useState(false);
    const { authState } = useAuth();
    const { addressData } = authState;
    const { getAddress } = useAddress();

    useEffect(() => {
        getAddress()
    },[])
    return(
        <main className="main-checkout grid-2-column">       
            {
                <>
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
                        
                    <div className="flex flex-column pd-1">
                        <CartDetails isAddressSelected={isAddressSelected}/>
                    </div>
                </>
                    
                }
            <div className="spacer-1"></div>
         </main>
    )
    
}