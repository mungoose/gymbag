import type { ReactNode } from 'react';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Navigator from '@/components/Navigator/Navigator';
import type { LogoLabel } from '@/types/labels';
import { COLORS } from '@/interfaces/colors';
import styles from '@/styles/appLayout.module.scss';

type Props = {
	children: ReactNode;
	title: string;
	headerLabel: string;
	headerLogoLabel: LogoLabel;
	activeButton: 'THEBAG' | 'EXERCISE' | 'HISTORY';
	logoLink: string;
};

export default function AppLayout({ children, title, headerLabel, headerLogoLabel, activeButton, logoLink }: Props) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className={styles.container}>
				<Header color={COLORS.dark} label={headerLabel} logoLabel={headerLogoLabel} logoLink={logoLink} />
				{children}
				<Navigator activeButton={activeButton} />
			</div>
		</>
	);
}
