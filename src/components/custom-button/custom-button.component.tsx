import React, { ButtonHTMLAttributes } from 'react';
import './custom-button.styles.scss';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	content?: string;
	children?: React.ReactNode;
	isGoogleSignIn?: boolean;
}

export const CustomButton = ({
	children,
	content,
	isGoogleSignIn,
	...otherButtonProps
}: CustomButtonProps) => (
	// <button className='custom-button' {...otherButtonProps}>
	<button
		className={`${isGoogleSignIn ? 'google-sign-in ' : ''}custom-button`}
		// className={`${
		// 	isGoogleSignIn ? 'google-sign-in custom-button' : 'custom-button'
		// } `}
		{...otherButtonProps}
	>
		{children || content}
	</button>
);

export default CustomButton;
