import React from 'react';
import classes from './Order.css';
import moment from 'moment';
import CheckoutItem from '../checkout/CheckoutItem';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
    return (
        <div className={classes.Order}>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mm:ss a')}</p>
            <p className={classes.OrderId}>
                <small>{order.id}</small>
            </p>
            {order.data.cart.map((product) => (
                <CheckoutItem
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    rating={product.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat renderText={(value) => (
                    <h3 className={classes.OrderTotal}>
                        Order Total: {value}</h3>
               )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₦"} />   
        </div>
    )
}

export default Order;