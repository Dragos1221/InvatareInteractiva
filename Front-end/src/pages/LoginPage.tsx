import * as React from 'react';
import Login from '../components/Login';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ServiceApi from '../remote/ServiceApi'

interface LoginPageProps extends RouteComponentProps {}

interface LoginPageState {
	password: string;
	email: string;
	isError: boolean;
	errorMessage: string;
}

class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
	private service: ServiceApi;
	constructor(props: LoginPageProps) {
		super(props);
		this.state = {
			password: '',
			email: '',
			isError: false,
			errorMessage: 'Parola nu este corecta.',
		};
		this.service = new ServiceApi();
	}

	handleChange = (data: any) => {
		this.setState({
			...data,
			isError: false,
		});
	};
	clearUserData() {
		this.setState({
			password: '',
			isError: true,
		});
	}

	submit = async() => {
		try {
			const result = await this.service.loginRequest(this.state);
			if(result.data.loginStatus === "ok")
			{
				localStorage.setItem("id", result.data.id);
				this.props.history.push('/main');
			}
			else
				throw 'Parameter is not a number!';
		} catch (error) {
			this.setState({
				isError: true,
			});
			this.clearUserData();
		}
	 };

	render() {
		return (
			<div>
				<Login
					{...this.state}
					handleChange={this.handleChange}
					submit={this.submit}
				></Login>
			</div>
		);
	}
}

export default withRouter(LoginPage);
