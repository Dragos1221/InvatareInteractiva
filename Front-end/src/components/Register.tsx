import classes from '*.module.css';
import { Avatar, Button, Container, CssBaseline, Grid, Link, TextField, Typography, withStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import { isError } from 'node:util';
import * as React from 'react';
import { Component } from 'react';
import AssignmentIcon from '@material-ui/icons/Assignment';

export interface RegisterProps {
    classes: any;
    handleChange: any;
    username: string;
    nume: string;
    password: string;
    confirmPassword: string;
    isErrorNume: boolean;
    isErrorUsername: boolean;
    isErrorPassword: boolean;
    isErrorConfirmPassword: boolean;
}
 
export interface RegisterState {
    
}

const styles = createStyles({
	paper: {
		display: 'flex',
		marginTop: '130px',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
	},
	message: {
		display: 'none',
	},
	errMessage: {
		display: 'block',
		color: 'red',
		margin: '0px',
	},
	button: {
		marginBottom: '10px',
	},
});

class Register extends React.Component<RegisterProps, RegisterState> {
    handleData = (type: any) => (event: any) => {
        this.props.handleChange({
            [type]: event.target.value,
        });
    };


    render() { 
        const { classes, username, nume, password, isErrorNume, isErrorUsername, isErrorPassword, isErrorConfirmPassword, confirmPassword } = this.props;
        return ( 
            <Container component="main" maxWidth="xs">
  			<CssBaseline />
  			<div className={classes.paper}>
  				<Avatar>
  					<AssignmentIcon/>
  				</Avatar>
  				<Typography component="h1" variant="h5">
            Register
  				</Typography>
  				<form className={classes.form} noValidate>
  					<TextField
  						variant="outlined"
  						margin="normal"
  						required
  						fullWidth
  						id="nume"
  						label="Nume"
  						name="nume"
  						autoComplete="Nume"
  						autoFocus
  						value={nume}
  						onChange={this.handleData('nume')}
  						error={isErrorNume}
  					/>
                    <TextField
  						variant="outlined"
  						margin="normal"
  						required
  						fullWidth
  						id="username"
  						label="Username"
  						name="username"
  						autoComplete="Username"
  						autoFocus
  						value={username}
  						onChange={this.handleData('username')}
  						error={isErrorUsername}
  					/>
  					<TextField
  						variant="outlined"
  						margin="normal"
  						required
  						fullWidth
  						name="password"
  						label="Password"
  						type="password"
  						id="password"
  						autoComplete="current-password"
  						onChange={this.handleData('password')}
  						value={password}
  						error={isErrorPassword}
  					/>
                    <TextField
  						variant="outlined"
  						margin="normal"
  						required
  						fullWidth
  						name="Confirm password"
  						label="Confirm Password"
  						type="password"
  						id="confirmPassword"
  						autoComplete="current-password"
  						onChange={this.handleData('confirmPassword')}
  						value={confirmPassword}
  						error={isErrorConfirmPassword}
  					/>
                    
  					<Button
  						className={classes.button}
  						fullWidth
  						variant="contained"
  						color="primary"
  					>
              Register
  					</Button>
  				</form>
  			</div>
  		</Container>
        );
    }
}
 
export default withStyles(styles)(Register);