import React, { useContext } from 'react'
import { Form, FormGroup, Row, Col } from 'reactstrap';
import TextInput from '../common/TextInput';
import OrderContext from '../../context/orderContext'; // Importing Context API

const PaymentDetails = () => {

    const { checkoutDetails, setCheckoutDetails } = useContext(OrderContext); // Context API

    const handleInputChange = ({ target: { name, value } }) => {
        const data = { ...checkoutDetails }
        data["PaymentsData"][name] = value;
        setCheckoutDetails(data);
    }

    // Destructuring object from Context API
    const { PaymentsData } = checkoutDetails;

    return (
        <>
            <h5>Payment Method</h5> <br />

            <Form>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <TextInput name="cardName" value={PaymentsData.cardName} placeholder="Name on card *" onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <TextInput name="cardNumber" value={PaymentsData.cardNumber} placeholder="Card Number *" onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <TextInput name="expiryDate" value={PaymentsData.expiryDate} placeholder="Expiry Date *" onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <TextInput name="cvvNumber" value={PaymentsData.cvvNumber} placeholder="CVV *" onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                </Row>

                {/*<FormGroup tag="fieldset">
                    <FormGroup check>
                        <Label check>
                            <input type="radio" name="radio1" />{' '}
                            Remember credit card details for next time
                        </Label>
                    </FormGroup>
                </FormGroup>*/}
            </Form>
        </>
    )
}
export default PaymentDetails