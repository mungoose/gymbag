import Image from 'next/image';
import Link from 'next/link';
import { LogoLabel } from '@/types/labels';
import styles from './Logo.module.scss';

interface Props {
	logoLable: LogoLabel;
	logoLink: string;
}

const Logo = ({ logoLable, logoLink }: Props) => {
	return (
		<Link href={logoLink} className={styles.container}>
			<div className={styles.logoWrapper}>
				<Image
					src="/images/logo.png"
					alt="logo"
					fill
					sizes="(max-width: 768px) 40px, (max-width: 800px) 50px, 75px"
					priority
				/>
			</div>
			<p className={styles.text}>{logoLable}</p>
		</Link>
	);
};

export default Logo;
