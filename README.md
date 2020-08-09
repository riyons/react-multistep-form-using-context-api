# React Reusable Multistep Form Using Context API + Hooks
React Multi-Step form boilerplate is a very simple implementation of how to use *__Context API + Hooks__* in your real world project. Context API is an amazing feature introduced with React version 16.3.0 that lets you avoid prop-drilling. And React-hooks let you use the React without classes.

In this example, I created a simple multi-step form component with navigation buttons to *__switch the components__* inside the Multi-Step form. 
This is a reusable Multi-Step form component, you can call the Multi-Step form component from anywhere in your React component and dynamically add your components to switch between screens. The Multi-Step form component has a dynamic progress bar that can be turned on or off based on your needs.

#### Features
* Reusable multistep form component you can call from anywhere in your React project.
* Shows how to use React Context API in real world project with simple example.
* Shows how to manage state in functional components with React Hooks.
* Shows how to create and reuse a component in React. (Multstep form)
* Shows how to pass state values to child components using React Context API.
* Shows how to update state through a React Consumer.


#### Example
```javascript
// ---------- src/context/OrderContext.js
import React from "react";

const OrderContext = React.createContext();
OrderContext.displayName = "OrderContext"

export default OrderContext;
//-----------------------------------------

// ----------------------------- src/App.js

import React, { useState } from 'react';
import { ShippingAddress, PaymentDetails, ReviewOrder, OrderConfirmation } from "./components/billing/index"; // Components to switch between screens.
import MultiStepForm from "./components/common/MultiStepForm/MultiStepForm"; // Reusable react multi-form component
import OrderContext from './context/orderContext'; // Context API

// Create an array to include the list of elements you want to include inside the multi-step form, and add the array to the reusable multi-step form component.
// Please note that the 'headerText' and 'headerIcon' properties in the array below are optional. This is to display the title and icon in the progress bar.
const componentsList = [
  { headerText: 'Shipping Address', headerIcon: 'fa fa-address-card', component: <ShippingAddress /> },
  { headerText: 'Payment Details', headerIcon: 'fa fa-credit-card', component: <PaymentDetails /> },
  { headerText: 'Review Order', headerIcon: 'fa fa-clock-o', component: <ReviewOrder /> },
  { headerText: 'Order Confirmation', headerIcon: 'fa fa-check', component: <OrderConfirmation /> },
];

function App() {

  // Initializing state to store the checkout details.
  // This is used to prevent losing unsaved changes when you switch the component.
  const [checkoutDetails, setCheckoutDetails] = useState({});

  return (
    <div className="App">

      <OrderContext.Provider value={{ checkoutDetails, setCheckoutDetails }}>
        <MultiStepForm
          list={componentsList}
          displayProgressBar={true}
        />
      </OrderContext.Provider>

    </div>
  );
}

export default App;

```


#### Online Demo
