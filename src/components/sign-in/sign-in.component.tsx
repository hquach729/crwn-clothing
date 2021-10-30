import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.util';
import { withRouter } from 'react-router-dom';
import type { RouteComponentProps } from 'react-router-dom';

interface SignInProps extends RouteComponentProps {}
interface SignInState {
	email?: string;
	password?: string;
}
class SignIn extends React.Component<SignInProps, SignInState> {
	// constructor(props: SignInProps) {
	constructor(props: SignInProps) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// console.log(this.state);

		// Clear out field
		this.setState({ email: '', password: '' }, () => console.log(this.state));
	};

	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		console.log({ name, value });
		this.setState({ [name]: value });

		// this.setState(
		// 	(prevState, prevProps) => {
		// 		console.log({ prevState, prevProps });
		// 		return { ...prevState, [name]: value };
		// 	},
		// 	() => {
		// 		console.log(this.state);
		// 	}
		// );
	};

	handleGoogleSignIn = async () => {
		const { user } = await signInWithGoogle();
		if (user) {
			this.props.history.push('/');
		}
	};

	render() {
		const { email, password } = this.state;
		const { handleGoogleSignIn } = this;

		return (
			<div className='sign-in'>
				<h2 className='title'>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						value={email}
						required
						handleChange={this.handleChange}
						label='Email'
						autoComplete='false'
					/>
					<FormInput
						name='password'
						type='password'
						value={password}
						required
						handleChange={this.handleChange}
						label='Password'
						autoComplete='false'
					/>
					<div className='button-group'>
						<CustomButton type='submit' content='Sign In' />
						<CustomButton
							type='button'
							isGoogleSignIn
							content='Sign In With Google'
							onClick={handleGoogleSignIn}
						/>
					</div>
					{/* <input type='submit' value='Sign In' /> */}
				</form>
			</div>
		);
	}
}

export default withRouter(SignIn);
