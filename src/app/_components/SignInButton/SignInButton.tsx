import styles from './SignInButton.module.css';
import { COLORS } from 'app/_interfaces/colors';
import { signIn } from '@/utils/auth';

interface Props {
	buttonColor?: COLORS.default | COLORS.green | COLORS.red | COLORS.gray;
	buttonSize?: 'narrow' | 'wide';
	buttonLabel: string;
	noMargin?: boolean;
}

const Button = ({ buttonColor = COLORS.default, buttonSize = 'narrow', buttonLabel = 'DEFAULT', noMargin }: Props) => {
	const buttonWidth = buttonSize === 'narrow' ? '30vw' : '100%';
	const buttonMaxWidth = buttonSize === 'narrow' ? '350px' : '1005px';

	return (
		<form
			action={async () => {
				'use server';
				await signIn('google');
			}}
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
			<button type="submit" className={styles.buttonLabel}>
				{buttonLabel}
			</button>
		</form>
	);
};

export default Button;
