import * as React from 'react';
import { Component } from 'react';
import Register from '../components/Register';

export interface RegisterPageProps {
    
}
 
export interface RegisterPageState {
    username: string;
    nume: string;
    password: string;
    confirmPassword: string;
    isErrorNume: boolean;
    isErrorUsername: boolean;
    isErrorPassword: boolean;
    isErrorConfirmPassword: boolean;
    errorMNume: string;
    errorMUsername: string;
    errorMPassword: string;
    errorMConfirmPassword: string;
}
 
class RegisterPage extends React.Component<RegisterPageProps, RegisterPageState> {
    
    constructor(props: RegisterPageProps) {
        super(props);
        this.state = {
            username: '',
            nume: '',
            password: '',
            confirmPassword: '',
            isErrorNume: false,
            isErrorConfirmPassword: false,
            isErrorUsername: false,
            isErrorPassword: false,
            errorMNume: '',
            errorMUsername: '',
            errorMPassword: '',
            errorMConfirmPassword: '',
        }
    }

	handleChange = (data: any) => {
		this.setState({
			...data,
		});
	};

    validate = () => {
        const { username, nume, password, confirmPassword } = this.state;

        let val = true;

        if(/^[a-zA-Z ]+$/.test(nume) === false || /^[ ]+$/.test(nume) === true) {
            this.setState({
                isErrorNume: true,
                errorMNume:'Numele poate contine doar litere si spatii'
            });
            val = false;
        }
        else {
            this.setState({isErrorNume: false});
        }

        if(/^[a-zA-Z1-9]+$/.test(username) === false || username.length === 0) {
            this.setState({
                isErrorUsername: true,
                errorMUsername: 'Username-ul poate contine doar litere si cifre',
            });
            val = false;
        }
        else {
            this.setState({isErrorUsername: false});
        }

        if(password.length < 5) {
            this.setState({
                isErrorPassword: true,
                errorMPassword:'Parola prea scurta (minim 5 caractere)'
            });
            val = false;
        }
        else {
            this.setState({isErrorPassword: false});
        }

        if(confirmPassword !== password || confirmPassword.length === 0) {
            this.setState({
                isErrorPassword: true,
                isErrorConfirmPassword: true,
                errorMPassword:'Parolele nu se potrivesc',
                errorMConfirmPassword:'Parolele nu se potrivesc',
            });
            val = false;
        }
        else {
            this.setState({isErrorConfirmPassword: false});
        }

        return val;
    }

    register = () => {
        this.validate()
    }

    render() { 
        return (
            <div>
                <Register {...this.state} handleChange={this.handleChange} register={this.register} />
            </div>
        );
    }
}
 
export default RegisterPage;