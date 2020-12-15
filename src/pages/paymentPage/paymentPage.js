import React, { useState, useEffect } from 'react';
import classes from './paymentPage.css';
import { useStateValue } from '../../store/StateProvider';
import CheckoutItem from '../checkout/CheckoutItem';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../../store/reducer';
import axios from '../../axios';
import { db } from '../../firebase';

function paymentPage() {
    const [{ cart, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
            getClientSecret();
    }, [cart])

    console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            db
              .collection('users')
              .doc(user.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  cart: cart,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_CART'
            })

            history.replace('/orders')
        })

    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className={classes.Payment}>
            <div className={classes.PaymentContainer}>
                <h2>
                    Checkout (
                        <Link to="/checkout">{cart.length} product(s)</Link>
                        )
                </h2>
            <div className={classes.PaymentSection}>
                <div className={classes.PaymentName}>
                    <h3>Delivery Address</h3>
                </div>
            <div className={classes.PaymentAddress}>
                <p>{user.email}</p>
                <p>8 Adenuga Street</p>
                <p>Lagos, Nigeria</p>
            </div>
            </div>

                
            <div className={classes.PaymentSection}>
            <div className={classes.PaymentName}>
                <h3>Review products and delivery</h3>
            </div>
            <div className={classes.PaymentProducts}>
                {cart.map(product => (
                <CheckoutItem
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                        rating={product.rating}
                        />
                        ))}
            </div>
            </div>
            

           <div className={classes.PaymentSection}>
            <div className={classes.PaymentName}>
                        <h3>Payment Method</h3>
            </div>
            <div className={classes.PaymentDetails}>
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                   <div className={classes.PaymentPriceContainer}>
                    <CurrencyFormat renderText={(value) => (
                        <h3>Order Total: {value}</h3>
                            )}
                            decimalScale={2}
                            value={getCartTotal(cart)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"} />

                                    
                    <button disabled={processing || disabled || succeeded}>
                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                    </button>
                    </div>

                    {error && <div>{error}</div>}
                </form>
            </div>
            </div>
            </div>
        </div>
    )
}

export default paymentPage;