import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { withRouter } from 'react-router-dom';
import type { RouteComponentProps } from 'react-router-dom';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';

interface SignUpProps extends RouteComponentProps {}
interface SignUpState {
	displayName?: string;
	email?: string;
	password?: string;
	confirmPassword?: string;
}

class SignUp extends React.Component<SignUpProps, SignUpState> {
	constructor(props: SignUpProps) {
		super(props);

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	clearForm = () => {
		this.setState(
			{ displayName: '', email: '', password: '', confirmPassword: '' },
			() => console.log(this.state)
		);
	};

	handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const { password, confirmPassword, email, displayName } = this.state;
		const { clearForm } = this;

		if (password !== confirmPassword) {
			console.log('Password and Confirm Password do not match');
			return;
		}

		try {
			if (email && password) {
				// create a new users in the firebase auth collection, make sure to enable this on firebase site, to email
				// and password signint
				const { user } = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);

				// console.log({ user });
				if (password && email && displayName) {
					const userProfile = await createUserProfileDocument(user, {
						displayName,
					});

					userProfile
						? (async () => {
								// console.log(userProfile.docSnap.data()));
								const user = await getDoc(userProfile.docRef);
								console.log('UserProfile Save:', user.data());
								this.props.history.push('/');
						  })()
						: clearForm();
				}
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.log(error.message);
			}
		}
	};
	handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-up'>
				<h2 className='title'>I don't have an account</h2>
				<span>Sign up with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='displayName'
						type='text'
						label='Display Name'
						value={this.state.displayName}
						handleChange={this.handleOnChange}
						autoComplete='false'
						required
					/>
					<FormInput
						name='email'
						type='email'
						label='Email'
						value={this.state.email}
						handleChange={this.handleOnChange}
						autoComplete='false'
						required
					/>
					<FormInput
						name='password'
						type='password'
						label='Password'
						value={this.state.password}
						handleChange={this.handleOnChange}
						autoComplete='false'
						required
					/>
					<FormInput
						name='confirmPassword'
						type='password'
						label='Confirm Password'
						value={this.state.confirmPassword}
						handleChange={this.handleOnChange}
						autoComplete='false'
						required
					/>
					<div className='button-group'>
						<CustomButton content='Sign Up' type='button' />
						<CustomButton
							content='Sign Up With Google'
							isGoogleSignIn
							type='submit'
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(SignUp);
