'use client';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const Welcome = () => {
	interface Session {
		user: {
			name: string;
		};
	}

	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		const fetchSession = async () => {
			const res = await fetch('/api/auth/session');
			const sessionData = await res.json();

			setSession(sessionData);
		};

		fetchSession();
	}, []);

	console.log('.... session: ', session);

	if (!session) {
		return <div>Loading...</div>;
	}

	return (
		<div className={styles.container}>
			<h1>HELLO and WELCOME</h1>
			<h2>{session.user.name}</h2>
		</div>
	);
};

export default Welcome;
