'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SignInButton from '@/components/SignInButton/SignInButton';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

const Start = () => {
	const router = useRouter();

	useEffect(() => {
		const checkSession = async () => {
			const res = await fetch('/api/auth/session');
			const sessionData = await res.json();

			if (sessionData) {
				router.push('/welcome');
			}
		};
		checkSession();
	}, [router]);

	return (
		<div className={styles.container}>
			<Link href="/">
				<div className={styles.label}>
					<Image src="/images/logo.png" alt="Trainingbag logo" width={150} height={150} />
				</div>
			</Link>
			<div className={styles.form}>
				<SignInButton buttonLabel="SIGN IN" buttonSize="wide" />
			</div>
		</div>
	);
};

export default Start;
