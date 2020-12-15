import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//pages
import HomePage from './pages/homePage/homePage';
import LoginPage from './pages/loginPage';
import Checkout from './pages/checkout/Checkout';
import PaymentPage from './pages/paymentPage/paymentPage';
import Orders from './pages/orders/Orders';
import SignupPage from './pages/signupPage';
import Navbar from './components/layout/Navbar/Navbar';
import SideDrawer from './components/layout/SideDrawer/sideDrawer';
import Footer from './components/layout/Footer/Footer';
import themeFile from './utility/theme';
import { auth } from './firebase';
import { useStateValue } from './store/StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
//MUI
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';




const theme = createMuiTheme(themeFile);

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);


function App() {
  const [{}, dispatch] = useStateValue();

  const [sideDrawerClosed, setSideDrawerClosed] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

const sideDrawerToggleHandler = () => {
  setSideDrawerClosed(!sideDrawerClosed);
}
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/orders">
              <Navbar />
              <Orders />
            </Route>

            <Route path="/loginPage">
              <LoginPage />
            </Route>

            <Route path="/signupPage">
              <SignupPage />
            </Route>
            
            <Route path="/checkout">
              <Navbar />
              <Checkout />
            </Route>

            <Route path="/payment">
              <Navbar />
              <Elements stripe={promise}>
                <PaymentPage />
              </Elements>
            </Route>
            
            <Route path="/">
               <Navbar
               drawerToggleClicked={sideDrawerToggleHandler} />
               <SideDrawer 
               open={sideDrawerClosed}
               closed={() => setSideDrawerClosed(false)} />
               <HomePage />
               <Footer />
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
      );
};

export default App;