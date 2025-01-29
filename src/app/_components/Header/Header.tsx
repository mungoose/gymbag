import styles from './Header.module.scss';
import { COLORS } from '@/interfaces/colors';
import type { LogoLabel } from '@/types/labels';
import Logo from '@/components/Header/Logo/Logo';

interface Props {
	color: COLORS.dark | COLORS.red | COLORS.green;
	label: string;
	logoLabel: LogoLabel;
	logoLink: string;
}

const Header = ({ color, label, logoLabel, logoLink }: Props) => {
	return (
		<div
			className={styles.container}
			// if Header has no background color, don't render shadow:
			style={color ? { backgroundColor: color, boxShadow: '0 10px 35px #000000' } : {}}
		>
			<div className={styles.headerLabel}>{label}</div>
			<Logo logoLable={logoLabel} logoLink={logoLink} />
		</div>
	);
};

export default Header;
