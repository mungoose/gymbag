'use client';
import { useEffect, useState } from 'react';
import { Session } from 'next-auth';
import styles from './styles.module.css';
import AppLayout from 'app/appLayout';
import ListItem from '@/components/Common/ListItem/ListItem';
import { sampleTakeoffList } from 'app/_lib/checklist-data';

const Bag = () => {
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		const fetchSession = async () => {
			const res = await fetch('/api/auth/session');
			const sessionData = await res.json();

			setSession(sessionData);
		};

		fetchSession();
	}, []);

	if (!session) {
		return <div>Loading...</div>;
	}

	return (
		<AppLayout
			title="Bag - Gymbag"
			headerLabel="Checklist"
			headerLogoLabel="reset"
			activeButton="THEBAG"
			logoLink=""
		>
			<div className={styles.container}>
				{sampleTakeoffList.map((item, index) => (
					<ListItem
						key={index}
						isDone={item.isDone}
						listItemLabel={item.listItemLabel}
						listItemDelete={item.listItemDelete}
						handleCheckboxClick={() => {}}
					/>
				))}
			</div>
		</AppLayout>
	);
};

export default Bag;
