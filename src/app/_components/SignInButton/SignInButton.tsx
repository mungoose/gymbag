'use client';

import styles from './SignInButton.module.css';
import { COLORS } from 'app/_interfaces/colors';
import { signIn } from 'next-auth/react';

interface Props {
	buttonLabel: string;
	buttonColor?: COLORS.default | COLORS.green | COLORS.red | COLORS.gray;
	buttonSize?: 'narrow' | 'wide';
	noMargin?: boolean;
}

const handleSignin = async () => {
	await signIn('google', { callbackUrl: '/bag' });
};

const Button = ({ buttonLabel = 'DEFAULT', buttonColor = COLORS.default, buttonSize = 'narrow', noMargin }: Props) => {
	const buttonWidth = buttonSize === 'narrow' ? '30vw' : '100%';
	const buttonMaxWidth = buttonSize === 'narrow' ? '350px' : '1005px';

	return (
		<button
			onClick={handleSignin}
			className={styles.container}
			style={
				noMargin
					? { backgroundColor: buttonColor, width: buttonWidth, maxWidth: buttonMaxWidth }
					: {
							backgroundColor: buttonColor,
							width: buttonWidth,
							maxWidth: buttonMaxWidth,
							marginTop: '20px',
						}
			}
		>
			{buttonLabel}
		</button>
	);
};

export default Button;
