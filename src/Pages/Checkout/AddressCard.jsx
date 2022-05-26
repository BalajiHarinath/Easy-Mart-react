import "../../css/main.css";
import "./Checkout.css";
import { useState } from "react";
import { useAddress } from "../../Context";
import { EditAddressModal } from "./EditAddressModal";

export const AddressCard = ({address, setIsAddressSelected}) => {
    const { removeAddress } = useAddress();
    const [showEditAddressModal, setShowEditAddressModal] = useState(false);
    const clickHandler = () => {
        setIsAddressSelected(true)
    }

    return(
        <>
            <div className="container-address flex pd-1 flex-gap-1">
                <input type="radio" name="radio" className="input-address-select" onChange={clickHandler}/>                         
                <div className="flex flex-column flex-align-start">
                    <div className="font-bold">{address.name}</div>
                    <div className="address-details flex flex-column flex-align-start pdl-1 pdt-0-5">
                        <div className="text-align-left">
                            {address.street}, {address.city}
                        </div>
                        <div>
                            {address.state}, {address.country} - {address.zipCode}
                        </div>
                        <div className="pdt-0-5">
                            Mobile: <span className="text-base">{address.mobile}</span>
                        </div>
                    </div>
                    <div className="btn-container-checkout flex flex-justify-space-between flex-gap-1 pdt-1">
                        <button className="btn-solid btn-small" onClick={() => setShowEditAddressModal(true)}>Edit</button>
                        <button className="btn-solid btn-small" onClick={() => removeAddress(address._id)}>Remove</button>
                    </div>
                </div>
            </div>
            {showEditAddressModal &&
                <EditAddressModal 
                address={address}
                setShowEditAddressModal={setShowEditAddressModal}
            />}
        </>
        
    )
}