import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth } from '../firebase';
import Khlogo from '../images/logo/Khlogo.png';
import Ca from '../images/responseImages/ca.jpeg';
import Pc from '../images/responseImages/pc.jpeg';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
    form: {
        textAlign: 'center',
    },
    border: {
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '5px black'
    },
    image: {
        marginTop: '20px',
        marginBottom: '20px',
        objectFit: 'contain',
        width: '100px',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    pageTitle: {
        margin: '10px auto 10px auto',
        color: '#005f56'
    },
    textField: {
        margin: '5px auto 10px auto',
        width: 200
    },
    button: {
        marginTop: 20,
        postion: 'relative'
    },
    progress: {
        position: 'absolute'
    },
    inputError: {
        color: 'red',
        fontSize: '0.7rem',
        marginTop: 10
    },
    linkText: {
        color: '#005f56',
    },
    grid1: {
        objectFit: 'fill',
        margin: '10px auto 10px auto',
        height: 500,
        width: 400,
        [theme.breakpoints.down('sm')]: {
            width: 200,
            height: 100,
            padding: '5px',
            objectFit: 'cover',
            display: 'flex'
        }

    },
    grid2: {
        objectFit: 'fill',
        margin: '10px auto 10px auto',
        height: 500,
        width: 400,
        [theme.breakpoints.down('sm')]: {
            width: 200,
            height: 100,
            padding: '5px',
            objectFit: 'cover',
            display: 'flex'
        }
    }
});


function loginPage(props) {
    const history = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(err => alert(err.message))
    
    };

    


    const { classes } = props;

 return (
    <Grid container className={classes.form}>
    <Grid item sm={4} xs={12}>
    <a href="https://www.jumia.com.ng/">
    <img src={Ca} alt="" className={classes.grid1} />
    </a>
    </Grid>    
    <Grid item sm={4} xs={12} className={classes.border}>
        <Link to="/">
        <img src={Khlogo} alt="" className={classes.image} />
        </Link>
        <Typography variant="body1">
            Hi, Welcome to Khaystix's Hub
        </Typography>
        <Typography variant="h3" className={classes.pageTitle}>
            login
        </Typography>

        <form noValidate onSubmit={login}>
            <TextField id="email" name="email" type="email" label="Email"
            className={classes.textField} value={email} 
            onChange={event => setEmail(event.target.value)}
             helperText={errors.email}
            error={errors.email ? true : false} /><br />
            
            <TextField id="password" name="password" type="password" 
            label="Password"
            className={classes.textField} value={password} 
            onChange={event => setPassword(event.target.value)}
             helperText={errors.password}
            error={errors.password ? true : false} /><br />

                {errors.general && (
                    <Typography variant="body2" className={classes.inputError}>
                    {errors.general}
                    </Typography>
                )}

            <Button type="submit" variant="contained" 
            color="primary" className={classes.button}>
                login
            </Button> <br /><br />
            <small>Don't have an account? <Link to="/signupPage" className={classes.linkText}>Create a new account</Link></small> 
        </form>
    </Grid>
    <Grid item sm={4} xs={12}>
    <a href="https://www.jumia.com.ng/">
      <img src={Pc} alt="" className={classes.grid2} />
    </a>
    </Grid>
    </Grid>
 )
    
}

export default withStyles(styles)(loginPage);