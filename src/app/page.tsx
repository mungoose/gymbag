import Image from 'next/image';
import styles from '@/styles/page.module.scss';
import Link from 'next/link';

export default function Home() {
	return (
		<main className={styles.main}>
			<Link href="./start">
				<div className={styles.wrapper}>
					<Image src="/images/logo.png" alt="Trainingbag logo" width={150} height={150} priority={true} />
					<p>ENTER YOUR</p>
					<p>GYMBAG</p>
					<p>HERE</p>
				</div>
			</Link>
		</main>
	);
}
