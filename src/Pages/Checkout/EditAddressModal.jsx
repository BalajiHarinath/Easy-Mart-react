import "../../css/main.css";
import "./Checkout.css";
import { useState } from "react";
import { useAddress } from "../../Context";

export const EditAddressModal = ({address, setShowEditAddressModal}) => {
const [addressForm, setAddressForm] = useState({
    name: address.name,
    street: address.street,
    city: address.city,
    state: address.state,
    country: address.country,
    zipCode: address.zipCode,
    mobile: address.mobile,
})

const { editAddress } = useAddress();

  const fillFormValue = (event, fieldName) => {
    const { value } = event.target;
    setAddressForm((prev) => ({ ...prev, [fieldName]: value }));
  };

  const saveAddressHandler = () => {
    setShowEditAddressModal(false);
    editAddress(address._id, addressForm)
  };

    return(
        <div className="form-modal-address">
            <div className="modal border-2 mx-auto m-1p5 p-2">
            <form
                className="address-form flex flex-column flex-gap-1"
                onSubmit={(e) => {
                e.preventDefault();
                saveAddressHandler();
                }}
            >
                <h6 className="text-center">ADDRESS</h6>

                <div className="flex flex-column">
                    <label htmlFor="name">Enter Name</label>
                    <input
                        className="input-address-form"
                        type="text"
                        id="name"
                        value={addressForm.name}
                        onChange={(e) => fillFormValue(e, "name")}
                        required
                    />
                </div>

                <div className="flex flex-column">
                    <label htmlFor="street">Street</label>
                    <input
                        className="input-address-form"
                        type="text"
                        id="street"
                        value={addressForm.street}
                        onChange={(e) => fillFormValue(e, "street")}
                        required
                    />
                </div>

                <div className="flex flex-column">
                    <label htmlFor="city">City</label>
                    <input
                        className="input-address-form"
                        type="text"
                        id="city"
                        value={addressForm.city}
                        onChange={(e) => fillFormValue(e, "city")}
                        required
                    />
                </div>

                <div className="flex flex-row flex-gap-1">
                    <div className="flex flex-column">
                        <label htmlFor="state">State</label>
                        <input
                        className="input-address-form"
                        type="text"
                        id="state"
                        value={addressForm.state}
                        onChange={(e) => fillFormValue(e, "state")}
                        required
                        />
                        
                    </div>

                    <div className="flex flex-column">
                        <label htmlFor="country">Country</label>
                        <input
                        className="input-address-form"
                        type="text"
                        id="country"
                        value={addressForm.country}
                        onChange={(e) => fillFormValue(e, "country")}
                        required
                        />
                    </div>
                </div>

                <div className="flex flex-row flex-gap-1">
                    <div className="flex flex-column">
                        <label htmlFor="zipcode">Zipcode</label>
                        <input
                        className="input-address-form"
                        type="number"
                        id="zipcode"
                        value={addressForm.zipCode}
                        onChange={(e) => fillFormValue(e, "zipCode")}
                        required
                        />
                        
                    </div>

                    <div className="flex flex-column">
                        <label htmlFor="mobile-number">Mobile</label>
                        <input
                        className="input-address-form"
                        type="number"
                        id="mobile-number"
                        value={addressForm.mobile}
                        onChange={(e) => fillFormValue(e, "mobile")}
                        required
                        />
                    </div>
                </div>
                <div className="text-center flex flex-justify-space-between">
                    <button type="submit" className="btn-solid btn-small">
                        Save
                    </button>
                    <button
                        className="btn-solid btn-small"
                        onClick={() => setShowEditAddressModal(false)}
                    >
                        Cancel
                    </button>
                </div>
            </form>
            </div>
        </div>
    )
}