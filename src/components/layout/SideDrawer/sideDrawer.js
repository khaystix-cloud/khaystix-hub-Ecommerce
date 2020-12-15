import React from 'react';
import Khlogo from '../../../images/logo/Khlogo.png';
import Navbar from '../Navbar/Navbar';
import classes from './sideDrawer.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi/Aux';
import { Link } from 'react-router-dom';
//MUI
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import { useStateValue } from '../../../store/StateProvider';
import { auth } from '../../../firebase';


const sideDrawer = (props) => {

    const [{ cart, user }, dispatch] = useStateValue();
  
    const handleAuthentication = () => {
      if (user) {
        auth.signOut();
      }
    }
    let attachedClasses = [classes.SideDrawer, classes.Close];
     if (props.open) {
      attachedClasses= [classes.SideDrawer, classes.Open];
      }
    return (
      <Aux>
        <Backdrop show={props.open} clicked={props.closed} />
         <div className={attachedClasses.join(' ')}>
          <Link to='/'>
          <img className={classes.Logo} src={Khlogo} alt="k-hub logo" />
          </Link>

          <nav>
          <div className={classes.NavOptions}>      
          <Link to={!user && '/loginPage'}>
          <div onClick={handleAuthentication} className={classes.NavOptionsMenu}>
            <p style={
              {fontSize: '0.9rem',
               color: 'black',
               textDecoration: 'none'}}>{!user ? 'Welcome Guest' : user.email}</p>
            <p style={
              {fontSize: '1.0rem', 
               color: 'black', 
               textDecoration: 'none'}}><strong>{user ? 'Logout' : 'Login'}</strong></p>
          </div>
          </Link>

 <br />       
          <Link to='/orders'>
          <div className={classes.NavOptionsMenu}>
              <p style={
                {fontSize: '1.0rem', 
                 color: 'black', 
                 textDecoration: 'none'}}><strong>Orders</strong></p>
          </div>
          </Link>
          
  <br />      
          <Link to="/checkout">
          <div className={classes.NavOptionsCart}>
           <span style={
             {fontSize: '1.0rem', 
              color: 'black', 
              textDecoration: 'none'}}><strong>
              Cart<ShoppingCartOutlinedIcon />
              {cart.length}</strong></span>
          </div>
          </Link>
        </div>
<br />
        <div className={classes.Contact}>
           <p style={
             {fontSize: '1.0rem', 
              textDecoration: 'none'}}><strong>
               Contact Us:</strong></p><br />
          <div className={classes.Number}>
            <a href="https://www.instagram.com/khaystix/"><InstagramIcon /><span style={
              {color: '#ccc', 
               fontStyle: 'italic'}}>@khaystix</span></a>
          </div>
          <div className={classes.Number}> 
            <PhoneIcon /><span style={
              {fontSize: '0.8rem', 
               color: '#ccc', 
               fontStyle: 'italic'}}>+2348160871402</span>
          </div>
              
          <div className={classes.Number}>
            <a href="https://twitter.com/Khaystix"><TwitterIcon /><span style={
              {color: '#ccc', 
               fontStyle: 'italic'}}>@khaystix</span></a> 
          </div>
          <div className={classes.Number}>
            <a href="mailto:adekunlesolomon15@gmail.com"><MailOutlineIcon /></a>
          </div>
        </div>

        </nav>
        </div>
      </Aux>
    );
};

export default sideDrawer;