import React from 'react';
import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { RootState } from '../../redux/store';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';

import { User } from 'firebase/auth';

interface Props extends RouteComponentProps {
	currentUser?: User;
}

const SignInAndSignUpPage = ({ currentUser, history }: Props) => {
	React.useEffect(() => {
		if (currentUser) {
			history.push('/');
		}
	});

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

export default connect(mapStateToProps, null)(withRouter(SignInAndSignUpPage));
