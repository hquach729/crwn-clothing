import React from 'react';
import './sign-in-form.styles.scss';

interface SignInProps {}
interface SignInState {
	email?: string;
	password?: string;
}

export class SignInForm extends React.Component<SignInProps, SignInState> {
	constructor(props: SignInProps) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSignIn = () => {
		console.log();
	};
	handleSignUp = () => {};

	render() {
		const { email, password } = this.state;
		return (
			<div className='sign-in-form'>
				<div className='sign-in-form-header'>
					<h2>I already have an account</h2>
					<p>Sign in with your email and password</p>
				</div>
				<input
					className='sign-in-input'
					name='email'
					placeholder='email'
					value={email}
					onChange={(event) => this.setState({ email: event.target.value })}
				/>
				<input
					className='sign-in-input'
					name='password'
					placeholder='password'
					value={password}
					onChange={(event) => this.setState({ password: event.target.value })}
				/>
				<button
					className='sign-in-btn'
					onClick={() => {
						console.log(this.state);
					}}
				>
					SIGN IN
				</button>
				<button className='sign-in-google-btn'>SIGN IN WITH GOOGLE</button>
			</div>
		);
	}
}

export default SignInForm;
