'use client';
import Image from 'next/image';
import Link from 'next/link';
import SignInButton from '@/components/SignInButton/SignInButton';
import styles from './styles.module.css';

const Start = () => {
	return (
		<div className={styles.container}>
			<Link href="/">
				<div className={styles.label}>
					<Image src="/images/logo.png" alt="Trainingbag logo" width={150} height={150} />
					<p>PUT YOUR CREDENTIALS IN HERE</p>
				</div>
			</Link>
			<div className={styles.form}>
				<SignInButton buttonLabel="SIGN IN" buttonSize="wide" />
			</div>
		</div>
	);
};

export default Start;
