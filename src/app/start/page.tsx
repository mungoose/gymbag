'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import SignInButton from '@/components/SignInButton/SignInButton';
import styles from './styles.module.scss';

const Start = () => {
	const router = useRouter();
	const supabase = createClient();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkAuth = async () => {
			const {
				data: { session },
			} = await supabase.auth.getSession();
			if (session) {
				router.replace('/bag');
			} else {
				setLoading(false);
			}
		};

		checkAuth();
	}, [router, supabase.auth]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className={styles.container}>
			<Link href="/">
				<div className={styles.label}>
					<Image src="/images/logo.png" alt="Trainingbag logo" width={150} height={150} />
				</div>
			</Link>
			<SignInButton />
		</div>
	);
};

export default Start;
