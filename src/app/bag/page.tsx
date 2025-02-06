'use client';
import styles from './styles.module.scss';
import AppLayout from 'app/appLayout';
import ListItem from '@/components/Common/ListItem/ListItem';
import { sampleTakeoffList, ListItemType } from 'app/_lib/checklist-data';

const Bag = () => {
	const handleCheckboxClick = (item: ListItemType) => {
		console.log('.... clicked on: ', item);
		const itemIndex = sampleTakeoffList.findIndex((listItem) => listItem.listItemLabel === item.listItemLabel);

		console.log('.... item index: ', itemIndex);

		sampleTakeoffList[itemIndex].isDone = !sampleTakeoffList[itemIndex].isDone;
	};

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
						handleCheckboxClick={() => handleCheckboxClick(item)}
					/>
				))}
			</div>
		</AppLayout>
	);
};

export default Bag;
