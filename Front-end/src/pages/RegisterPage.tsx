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
        }
    }

	handleChange = (data: any) => {
		this.setState({
			...data,
		});
	};

    render() { 
        return (
            <div>
                <Register {...this.state} handleChange={this.handleChange} />
            </div>
        );
    }
}
 
export default RegisterPage;