import React, { ButtonHTMLAttributes } from 'react';
import './custom-button.styles.scss';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	content?: string;
	children?: React.ReactNode;
	isGoogleSignIn?: boolean;
	inverted?: boolean;
}

export const CustomButton = ({
	children,
	content,
	isGoogleSignIn,
	inverted,
	...otherButtonProps
}: CustomButtonProps) => (
	<button
		className={`${inverted ? 'inverted ' : ''} ${
			isGoogleSignIn ? 'google-sign-in ' : ''
		}custom-button`}
		// className={`${inverted ? 'inverted ' : ''}custom-button`}
		{...otherButtonProps}
	>
		{children || content}
	</button>
);

export default CustomButton;
