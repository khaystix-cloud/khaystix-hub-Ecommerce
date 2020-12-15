import React, { useState } from 'react';
import Khlogo from '../images/logo/Khlogo.png';
import Ha5 from '../images/responseImages/ha5.jpg';
import Pc2 from '../images/responseImages/pc2.jpeg';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
    form: {
        textAlign: 'center'
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

function signupPage(props) {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});


const createAccount = event => {
    event.preventDefault();

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
}

const { classes } = props;

    return (
            <Grid container className={classes.form}>
                <Grid item sm={4} xs={12}>
                    <a href="https://www.jumia.com.ng/">
                    <img src={Ha5} alt="" className={classes.grid1} />
                    </a>
                </Grid>    
                <Grid item sm={4} xs={12} className={classes.border}>
                    <Link to="/">
                    <img src={Khlogo} alt="" className={classes.image} />
                    </Link>
                    <Typography variant="body2">
                        Buy everything you need without leaving home!! 
                    </Typography>
                    <Typography variant="h5" className={classes.pageTitle}>
                        Create New Account
                    </Typography>
                    
                    <form noValidate onSubmit={createAccount}>
                        <TextField id="email" name="email" type="email" label="Email"
                        className={classes.textField} value={email} onChange={event => setEmail(event.target.value)}
                         helperText={errors.email}
                        error={errors.email ? true : false} /><br />
                        
                        <TextField id="password" name="password" type="password" 
                        label="Password"
                        className={classes.textField} value={password} 
                        onChange={event => setPassword(event.target.value)}
                         helperText={errors.password}
                        error={errors.password ? true : false} /><br />

                        <TextField id="confirmPassword" name="confirmPassword" type="password" 
                        label="Confirm Password"
                        className={classes.textField} value={confirmPassword} 
                        onChange={event => setConfirmPassword(event.target.value)}
                         helperText={errors.confirmPassword}
                        error={errors.confirmPassword ? true : false} /><br />

                            {errors.general && (
                                <Typography variant="body2" className={classes.inputError}>
                                {errors.general}
                                </Typography>
                            )}

                        <Button type="submit" variant="contained" 
                        color="primary" className={classes.button}>
                            Create
                        </Button> <br /><br />
                        <small>Already have an account? <Link to="/loginPage" className={classes.linkText}>Login</Link></small> 
                    </form>
                </Grid>
                <Grid item sm={4} xs={12}>
                <a href="https://www.jumia.com.ng/">
                    <img src={Pc2} alt="" className={classes.grid2} />
                </a>
                </Grid>    
            </Grid>
        )

}
export default withStyles(styles)(signupPage);