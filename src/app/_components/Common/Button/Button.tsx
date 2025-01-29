import { MouseEventHandler } from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';
import { COLORS } from 'app/_interfaces/colors';

interface Props {
	buttonColor?: COLORS.default | COLORS.green | COLORS.red | COLORS.gray;
	buttonSize?: 'narrow' | 'wide';
	buttonLabel: string;
	noMargin?: boolean;
	linkTo?: string;
	isActive?: boolean;
	handleClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
	type?: string;
}

const Button = ({
	buttonColor = COLORS.default,
	buttonSize = 'narrow',
	buttonLabel = 'DEFAULT',
	noMargin,
	linkTo = '',
	isActive = true,
	handleClick,
	type,
}: Props) => {
	const buttonWidth = buttonSize === 'narrow' ? '30%' : '100%';
	const buttonMaxWidth = buttonSize === 'narrow' ? '350px' : '1005px';

	return (
		<Link
			href={linkTo}
			type={type}
			onClick={handleClick}
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
			<div style={isActive ? {} : { opacity: '25%' }} className={styles.labelWrapper}>
				<div className={styles.buttonLabel}>{buttonLabel}</div>
			</div>
		</Link>
	);
};

export default Button;
