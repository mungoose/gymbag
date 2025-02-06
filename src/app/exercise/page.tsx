'use client';
import styles from './styles.module.scss';
import AppLayout from 'app/appLayout';

const Exercise = () => {
	return (
		<AppLayout
			title="Exercise - Gymbag"
			headerLabel="Exercise"
			headerLogoLabel="reset"
			activeButton="EXERCISE"
			logoLink=""
		>
			<div className={styles.container}>Nothing here yet</div>
		</AppLayout>
	);
};

export default Exercise;
