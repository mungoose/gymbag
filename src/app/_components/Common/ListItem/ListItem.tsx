'use client';
import Link from 'next/link';
import type { ListItemType } from '@/types/list-items';
import styles from './ListItem.module.scss';
import { COLORS } from '@/interfaces/colors';

interface Props {
	item: Partial<ListItemType>;
	onClick: () => void;
	itemLink?: string;
}

const ListItem = ({ item, onClick, itemLink }: Props) => {
	let listItemColor = COLORS.white;

	if (item.isDone) {
		listItemColor = COLORS.green;
	}

	// temp hack until I implement it correclty
	const listItemDelete = false;

	return (
		<div className={styles.container}>
			<div className={!listItemDelete ? styles.listItemNormal : styles.listItemSelected}>
				<div className={styles.checkBox} style={{ backgroundColor: listItemColor }} onClick={onClick}></div>
				<Link className={styles.listItemLabel} style={{ color: listItemColor }} href={itemLink || ''}>
					{item.listItemLabel}
				</Link>
			</div>
			{listItemDelete && <div className={styles.delete}>DELETE</div>}
		</div>
	);
};

export default ListItem;
