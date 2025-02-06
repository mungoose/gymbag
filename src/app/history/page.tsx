'use client';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';
import AppLayout from 'app/appLayout';
import Button from '@/components/Common/Button/Button';

const History = () => {
	const supabase = createClient();
	const router = useRouter();

	const handleLogout = async () => {
		await supabase.auth.signOut();
		router.push('/');
	};

	return (
		<AppLayout
			title="History - Gymbag"
			headerLabel="History"
			headerLogoLabel="log out"
			activeButton="HISTORY"
			logoLink="/"
		>
			<div className={styles.container}>Here we have a temporary log out button:</div>
			<Button handleClick={handleLogout} buttonLabel="LOG OUT" />
		</AppLayout>
	);
};

export default History;
