import React from 'react';
import classes from './homePage.css';
import ImageA from '../../images/responseImages/ha5.jpg';
import Samsung from '../../images/phones&Computerss/samsungA20.jpg';
import Shirts from '../../images/clothes&Accessories/1.jpg';
import Shoes from '../../images/clothes&Accessories/3.jpg';
import WashingMachine from '../../images/homeAppliances/1 (1).jpg';
import KitchenBundle from '../../images/homeAppliances/1.jpg';
import Computer from '../../images/phones&Computerss/1 (2).jpg';
import Item from '../../components/items/Item';
//MUI
import Grid from '@material-ui/core/Grid';


function homePage() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={12}>
        <div className={classes.Home}>
        <div className={classes.HomeContainer}>
        <img
          className={classes.HomeImage}
          src={ImageA}
          alt=""
        />

        <div className={classes.HomeRow}>
            <Item 
            id="12321341" 
            name="Samsung Galaxy A20s 6.5-Inch (3GB,32GB ROM)" 
            price={62000}
            rating={4} image={Samsung} />

            <Item 
            id="10000030" 
            name="Khaystix special exotic 4-In-1 Quality Men's Polo T-Shirts" 
            price={4890}
            rating={4} image={Shirts} />

            <Item 
            id="10000001" 
            name="Men's Breathable Sports Shoes / Sneakers - Black" 
            price={2200}
            rating={5} image={Shoes} />
        </div>
        
        <div className={classes.HomeRow}>
            <Item 
            id="10000002" 
            name="GOJAC Gojac Perfect Washing & Spinning Machine- 6kg" 
            price={38500}
            rating={4} image={WashingMachine} />

            <Item 
            id="10000003" 
            name='The Renew Economy Kitchen Bundle (+ 6kg Gas Cylinder)' 
            price={14490}
            rating={5} image={KitchenBundle} />

            <Item 
            id="12000000" 
            name='Hp Pavilion 15 Intel Core I7 16GB,1TB 4GB Nvidia Graphics (warranty)' 
            price={455000}
            rating={5} image={Computer} />
        </div>
        </div>
        </div>
        </Grid>
      </Grid>
              
    );
}

export default homePage;
