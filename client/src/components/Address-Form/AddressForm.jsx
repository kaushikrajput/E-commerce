import React, { useState } from "react";
import "./address.scss";
import { useSelector } from "react-redux";
import FormInput from "../Form-Input/FormInput";

const AddressForm = () => {
  const { cartItem } = useSelector((state) => state.cartReducer);

  const getTotal = cartItem.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  const defaultFormFields = {
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, address, phone } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  
  return (
    <div className="address">
      <div className="checkout-summary">
        <h5>Summary</h5>
        <ul className="list-group">
          <li className="list-group-item">
            Products
            <span> ₹{getTotal}</span>
          </li>
          <li className="list-group-item">
            Shipping
            <span> ₹{getTotal ? 150 : 0}</span>
          </li>
          <li className="list-group-item">
            <div>
              <strong> Total amount</strong>
              <p>(including GST)</p>
            </div>
            <span>
              <strong>₹{getTotal + (getTotal ? 150 : 0)}</strong>
            </span>
          </li>
        </ul>
      </div>
      <div className="shipping-address">
        <h5>Shipping Address</h5>
        <div className="mb-4">
          <form>
            <FormInput
              label="First Name"
              type="text"
              name="firstName"
              value={firstName}
              required
              onChange={handleChange}
            />
            <FormInput
              label="Last Name"
              type="text"
              name="lastName"
              value={lastName}
              required
            />
            <FormInput
              label="Address"
              type="text"
              name="address"
              value={address}
              required
            />
            <FormInput
              label="Mobile Number"
              type="text"
              name="phone"
              value={phone}
              required
            />
            <button className="address-btn">Add Address</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
