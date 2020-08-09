import React, { useContext } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import OrderContext from '../../context/orderContext'; // Importing Context API

const ReviewOrder = () => {

    const { checkoutDetails, setCheckoutDetails, setProceedNext } = useContext(OrderContext); // Context API

    // If all the products are removed, 'Next' button will be disabled.
    if (checkoutDetails.productsData.length === 0)
        setProceedNext(false);
    else
        setProceedNext(true);

    const handleDeleteProduct = (productId) => {
        const data = { ...checkoutDetails }
        data["productsData"] = checkoutDetails.productsData.filter(product => product.id !== productId); //Removing selected product
        setCheckoutDetails(data);
    }

    // Destructuring object from Context API
    const { productsData } = checkoutDetails;

    return (
        <>
            <h5>Order Summary</h5> <br />
            <ListGroup>
                {productsData.map((data, index) => {
                    return (
                        <>
                            <ListGroupItem key={index}>
                                {data["productName"]}{" "}

                                <span key={index}>
                                    <i
                                        key={index}
                                        className="fa fa-trash deleteBtn"
                                        aria-hidden="true"
                                        onClick={e => { handleDeleteProduct(data["id"]) }}
                                    />
                                </span>
                            </ListGroupItem>
                        </>
                    )
                })}
            </ListGroup>
            <br />
        </>
    )
}
export default ReviewOrder