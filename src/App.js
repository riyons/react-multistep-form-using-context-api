import React, { useState } from 'react';
import MultiStepForm from "./components/common/MultiStepForm/MultiStepForm";
import { ShippingAddress, PaymentDetails, ReviewOrder, OrderConfirmation } from "./components/billing/index";
import OrderContext from './context/orderContext'; // Context API

import "./App.css"; // Importing StyleSheet

// List of components to switch inside the multi-form container
const componentsList = [
  { headerText: 'Shipping Address', headerIcon: 'fa fa-address-card', component: <ShippingAddress /> },
  { headerText: 'Payment Details', headerIcon: 'fa fa-credit-card', component: <PaymentDetails /> },
  { headerText: 'Review Order', headerIcon: 'fa fa-clock-o', component: <ReviewOrder /> },
  { headerText: 'Order Confirmation', headerIcon: 'fa fa-check', component: <OrderConfirmation /> },
];

// Supplying initial state values to use with different components.
const InitialValues = {
  shippingData: { firstName: "", lastName: "", address1: "", address2: "", city: "", state: "", postalcode: "", country: "" },
  PaymentsData: { cardName: "", cardNumber: "", expiryDate: "", cvvNumber: "" },
  productsData: [
    { id: "pr1", productName: "Product 1" },
    { id: "pr2", productName: "Product 2" },
    { id: "pr3", productName: "Product 3" },
    { id: "pr4", productName: "Product 4" }
  ]
}

function App() {

  // State to store checkout details
  // This is used to prevent losing unsaved changes when you switch the component.
  const [checkoutDetails, setCheckoutDetails] = useState(InitialValues);
  const [proceedNext, setProceedNext] = useState(true); // Enable or Disable 'Next' button within each component

  return (
    <div className="App">

      <OrderContext.Provider value={{ checkoutDetails, setCheckoutDetails, setProceedNext }}>
        <MultiStepForm
          list={componentsList}
          displayProgressBar={true} // Set this to false if you don't want to display the progress bar.
          proceedNext={proceedNext} // Optional props. To Enable/Disable 'Next' button from child component.
        />
      </OrderContext.Provider>

    </div>
  );
}

export default App;