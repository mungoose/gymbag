import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<main className={styles.main}>
			<Link href="./start">
				<div className={styles.wrapper}>
					<Image src="/images/logo.png" alt="Trainingbag logo" width={150} height={150} />
					<p>ENTER YOUR</p>
					<p>TRAININGBAG</p>
					<p>HERE</p>
				</div>
			</Link>
		</main>
	);
}
