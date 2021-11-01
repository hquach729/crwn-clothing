import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.util';
import { signInWithEmailAndPassword } from 'firebase/auth';
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

	// Sign in with username and email using google firebase service
	handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			if (email && password) {
				const userCredential = await signInWithEmailAndPassword(
					auth,
					email,
					password
				);
				console.log({ userCredential });
				this.setState({ email: '', password: '' });
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.log(error.message);
			} else {
				console.log(error);
			}
		}
	};

	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		console.log({ name, value });
		this.setState({ [name]: value });
	};

	// This sign require user to select their existing google account to login
	handleGoogleSignIn = async () => {
		const { user } = await signInWithGoogle();
		if (user) {
			this.props.history.push('/');
		} else {
			console.log('sign in fail');
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
