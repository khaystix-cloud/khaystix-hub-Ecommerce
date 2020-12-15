import React from 'react';
import classes from './CheckoutItem.css';
import { useStateValue } from '../../store/StateProvider';


function CheckoutItem({ id, image, name, price, rating, hideButton }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }
 
    return (
        <div className={classes.CheckoutItem}>
            <img className={classes.CheckoutItemImage} src={image} />

            <div className={classes.CheckoutItemInfo}>
                <p className={classes.CkeckoutItemName}>{name}</p>
                <p className={classes.CheckoutItemPrice}>
                    <small>&#8358;</small>
                    <strong>{price}</strong>
                </p>
                <div className={classes.CheckoutItemRating}>
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromCart}>
                        Remove from Cart
                    </button>
                )}
            </div>
        </div>
    )
}

export default CheckoutItem;