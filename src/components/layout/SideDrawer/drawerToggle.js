import React from 'react';
import classes from './drawerToggle.css';

const drawerToggle = (props) => {

    return (
        <div onClick={props.clicked} className={classes.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default drawerToggle;