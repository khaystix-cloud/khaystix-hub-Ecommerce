import React from 'react';
import Khlogo from '../../../images/logo/Khlogo.png';
import classes from './Navbar.css';
import DrawerToggle from '../SideDrawer/drawerToggle'; 
import { Link } from 'react-router-dom';
import Checkout from '../../../pages/checkout/Checkout';
//store
import { useStateValue } from '../../../store/StateProvider';
import { auth } from '../../../firebase';
//MUI
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';



function Navbar(props) {

    const [{ cart, user }, dispatch] = useStateValue();
  
    const handleAuthentication = () => {
      if (user) {
        auth.signOut();
      }
    }

    return (
        <div className={classes.Navbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <Link to='/'>
            <img className={classes.Logo} src={Khlogo} alt="k-hub logo" />
            </Link>

            <div className={classes.NavbarSearch}>
              <input className={classes.NavbarSearchInput} type="text" placeholder="Search Items..." />
              <SearchIcon className={classes.NavbarSearchIcon} />
          </div>

          <Link to="/checkout">
          <div className={classes.NavOptionsCart}>
              <ShoppingCartOutlinedIcon />
              <span className={classes.NavCartCount}>
                {cart.length}                     
              </span>
          </div>
          </Link>

          <nav className={classes.DesktopOnly}>
          
          <div className={classes.NavOptions}>
          <Link to={!user && '/loginPage'}>
          <div onClick={handleAuthentication} className={classes.NavOptionsMenu}>
            <span className={classes.MenuA}>{!user ? 'Welcome Guest' : user.email}</span>
            <span className={classes.MenuB}>{user ? 'Logout' : 'Login'}</span>
          </div>
          </Link>

          <Link to='/orders'>
          <div className={classes.NavOptionsMenu}>
              <span className={classes.MenuB}>Orders</span>
          </div>
          </Link>
          
                  
          </div>
          </nav>

        </div>
    );
}

export default Navbar;
