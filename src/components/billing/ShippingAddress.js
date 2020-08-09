import React, { useContext } from 'react'
import { Form, FormGroup, Row, Col } from 'reactstrap';
import TextInput from '../common/TextInput';
import OrderContext from '../../context/orderContext'; // Importing Context API


const ShippingAddress = () => {

    const { checkoutDetails, setCheckoutDetails } = useContext(OrderContext); // Context API

    const handleInputChange = ({ target: { name, value } }) => {
        const data = { ...checkoutDetails }
        data["shippingData"][name] = value;
        setCheckoutDetails(data);
    }

    // Destructuring object from Context API
    const { shippingData } = checkoutDetails;

    return (
        <>
            <h5>Shipping Address</h5> <br />

            <Form>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <TextInput name="firstName" value={shippingData.firstName} placeholder="First Name" onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <input type="text" name="lastName" value={shippingData.lastName} className="form-control" placeholder="Last Name" onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup>
                    <input type="email" name="address1" value={shippingData.address1} className="form-control" placeholder="Address 1" onChange={handleInputChange} />
                </FormGroup>

                <FormGroup>
                    <input type="email" name="address2" value={shippingData.address2} className="form-control" placeholder="Address 2" onChange={handleInputChange} />
                </FormGroup>

                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <input type="text" name="city" value={shippingData.city} className="form-control" placeholder="City" onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <input type="text" name="state" value={shippingData.state} className="form-control" placeholder="State/Region" onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <input type="text" name="postalcode" value={shippingData.postalcode} className="form-control" placeholder="Postal Code" onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <input type="text" name="country" value={shippingData.country} className="form-control" placeholder="Country" onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default ShippingAddress