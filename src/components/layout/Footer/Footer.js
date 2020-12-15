import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.css';
//MUI
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


function Footer() {
    return (
        
        <div className={classes.Footer}>
            
            <div>
                <p className={classes.About}><strong>About Us:</strong></p>
                <p style={
                    {fontSize: '0.9rem',
                     fontStyle: 'italic',
                      color: '#ccc'}}>
                          Khaystix Hub is an online market store that gives you the luxury of buying absolutely anything out of the comfort of your home
                </p>
            </div>
            <div>
                <p><strong>Contact Us:</strong></p>
                <div className={classes.Contact}>
                  <a href="https://www.instagram.com/khaystix/"><InstagramIcon /></a>
                
                  <PhoneIcon /><span style={
                      {fontSize: '0.7rem',
                       color: '#ccc'}}>+2348160871402</span>
               
                  <a href="https://twitter.com/Khaystix"><TwitterIcon /></a> 
              
                  <a href="mailto:adekunlesolomon15@gmail.com"><MailOutlineIcon /></a>
                </div>
            </div>
            
        </div>
        
    )
}

export default Footer;

