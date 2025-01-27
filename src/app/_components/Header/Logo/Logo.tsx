import Image from 'next/image';
import Link from 'next/link';
import { LogoLabel } from '@/types/labels';
import styles from './Logo.module.css';

interface Props {
	logoLable: LogoLabel;
	logoLink: string;
}

const Logo = ({ logoLable, logoLink }: Props) => {
	return (
		<Link href={logoLink}>
			<div className={styles.container}>
				<Image src="/images/logo.png" alt="logo" width={125} height={125} />
				<p className={styles.text}>{logoLable}</p>
			</div>
		</Link>
	);
};

export default Logo;
