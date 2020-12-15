import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import classes from './Orders.css';
import { useStateValue } from '../../store/StateProvider';
import Order from './Order';

function Orders() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
        db
        .collection('users')
        .doc(user.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    } else {
        setOrders([])
    }

  }, [user])

    return (
        <div className={classes.Orders}>
            <h1>Your Orders</h1>

            <div className={classes.OrdersOrder}>
                {orders.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders;