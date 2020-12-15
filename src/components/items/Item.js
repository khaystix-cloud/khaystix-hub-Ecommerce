import React from 'react';
import classes from './Item.css';
import CurrencyFormat from 'react-currency-format';
//store
import { useStateValue } from '../../store/StateProvider';
//MUI
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Item({ id, name, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            product:{
                id: id,
                name: name,
                image: image,
                price: price,
                rating: rating,
            },
        });
    }
    return (
        <div className={classes.Item}>
         <div className={classes.ItemInfo}>
                <p style={
                    {fontSize: '0.9em', 
                    padding: '9px'}
                    }>{name}</p>
      <p className={classes.ItemPrice}>
      <CurrencyFormat renderText={(value) => (
            <div>
        <p><strong>{value}</strong></p>
            </div>
        )}
        decimalScale={2}
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₦"} />
         </p>
           <div className={classes.ItemRating}>
                  {Array(rating)
                  .fill()
                  .map((_, i) => (
                   <span>🌟</span>
                    ))}
            </div>
           </div>
            <img src={image} alt="" />

      <button onClick={addToCart}>
          <ShoppingCartOutlinedIcon />
          <span>Add to Cart</span>
      </button>
         </div>
    )
}

export default Item;