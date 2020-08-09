import React from 'react'
import SuccessIcon from "../../img/success.png";

const OrderConfirmation = () => {

    return (
        <>
            <center>
                <img alt="" className="img-circle" src={SuccessIcon} width="50px" height="50px" />
                <br /><br />
                <h4>Your order has been successfully placed!</h4>
                <br /><br />
            </center>
        </>
    )
}
export default OrderConfirmation