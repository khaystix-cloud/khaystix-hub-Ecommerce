import React from 'react';
import classes from './Checkout.css';
import OrderTotal from '../orderTotal/orderTotal';
import CheckoutItem from './CheckoutItem';
import CheckoutLogo from '../../images/responseImages/pc2.jpeg';

//STORE
import { useStateValue } from '../../store/StateProvider';


function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className={classes.Checkout}>
      <div className={classes.CheckoutLeft}>
        <img
          className={classes.CheckoutAds}
          src={CheckoutLogo}
          alt=""
        /> 

        <div>
          <h3 className={classes.CheckoutTitle}>Your Cart</h3>
            {cart.map( (product) => (
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

      <div>
        <OrderTotal />
      </div>
    </div>
  );
}

export default Checkout;