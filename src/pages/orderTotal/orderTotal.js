import React from 'react';
import classes from './orderTotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../store/StateProvider';
import { getCartTotal } from '../../store/reducer';
import { useHistory } from 'react-router-dom';

function orderTotal() {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className={classes.OrderTotal}>
      <CurrencyFormat
        renderText={(value) => (
            <div className={classes.OrderTotalItems}>
        <p style={{textDecoration: 'underline'}}><strong>OrderTotal</strong></p>
        <p>Amount of items: {cart.length}</p> 
        <p>Total Price: <strong>{value}</strong></p>
            </div>
          
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₦"}
      />

      <button onClick={event => history.push("/payment")}>Checkout</button>
    </div>
  );
}

export default orderTotal;