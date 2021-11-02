import React from 'react';
import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { RootState } from '../../redux/store';
import { connect } from 'react-redux';

import { User } from 'firebase/auth';

interface Props {
	currentUser?: User;
}

export const SignInAndSignUpPage = ({ currentUser }: Props) => {
	// console.log('signInPage', currentUser);

	return (
		<div className='container'>
			<SignIn />
			<SignUp />
		</div>
	);
};

const mapStateToProps = (state: RootState) => ({
	currentUser: state.user.currentUser,
});

// export default SignInAndSignUpPage;

export default connect(mapStateToProps, null)(SignInAndSignUpPage);
