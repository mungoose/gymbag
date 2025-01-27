import styles from './Navigator.module.css';
import Button from '@/components/Common/Button/Button';
import { COLORS } from '@/interfaces/colors';

interface Props {
	activeButton: 'THEBAG' | 'EXERCISE' | 'HISTORY';
}

const Navigator = ({ activeButton }: Props) => {
	return (
		<footer className={styles.container}>
			<div className={styles.navigatorButtons}>
				<Button
					buttonColor={COLORS.default}
					buttonSize="narrow"
					buttonLabel="THE BAG"
					noMargin={true}
					linkTo="/bag"
					isActive={activeButton === 'THEBAG'}
				/>
				<Button
					buttonColor={COLORS.default}
					buttonSize="narrow"
					buttonLabel="EXERCISE"
					noMargin={true}
					linkTo="/exercise"
					isActive={activeButton === 'EXERCISE'}
				/>
				<Button
					buttonColor={COLORS.default}
					buttonSize="narrow"
					buttonLabel="HISTORY"
					noMargin={true}
					linkTo="/history"
					isActive={activeButton === 'HISTORY'}
				/>
			</div>
		</footer>
	);
};

export default Navigator;
