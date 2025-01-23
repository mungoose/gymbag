import Image from 'next/image';
import Link from 'next/link';
import Button from 'app/_components/Button/Button';
import Input from 'app/_components/Input/Input';
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
				<Input inputPlaceholder="USERNAME IN HERE.." />
				<Input inputPlaceholder="PASSWORD HERE.." inputType="password" />
				<Button buttonLabel="SIGN IN" buttonSize="wide" linkTo="/takeoff" />
			</div>
		</div>
	);
};

export default Start;
