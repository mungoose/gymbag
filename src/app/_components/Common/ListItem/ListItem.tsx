import Link from 'next/link';
import { MouseEventHandler } from 'react';
import styles from './ListItem.module.scss';
import { COLORS } from '@/interfaces/colors';

interface Props {
	isDone: boolean;
	listItemLabel: string;
	listItemDelete: boolean;
	handleCheckboxClick: MouseEventHandler<HTMLDivElement> | undefined;
	listItemLink?: string;
	listItemColor?: COLORS.white | COLORS.green;
}

const ListItem = ({
	isDone = false,
	listItemLabel = 'default',
	listItemDelete = true,
	handleCheckboxClick,
	listItemLink = '',
	listItemColor = COLORS.white,
}: Props) => {
	if (isDone) {
		listItemColor = COLORS.green;
	}

	return (
		<div className={styles.container}>
			<div className={!listItemDelete ? styles.listItemNormal : styles.listItemSelected}>
				<div
					className={styles.checkBox}
					style={{ backgroundColor: listItemColor }}
					onClick={handleCheckboxClick}
				></div>
				<Link className={styles.listItemLabel} style={{ color: listItemColor }} href={listItemLink}>
					{listItemLabel}
				</Link>
			</div>
			{listItemDelete && <div className={styles.delete}>DELETE</div>}
		</div>
	);
};

export default ListItem;
