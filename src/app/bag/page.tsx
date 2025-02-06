import styles from './styles.module.scss';
import AppLayout from 'app/appLayout';
import ListItem from '@/components/Common/ListItem/ListItem';
import { fetchBagItems } from '@/supabase/supabase.api';

const Bag = async () => {
	const fetchedItems = await fetchBagItems('17805293-1193-4548-b101-ddadee114600');

	return (
		<AppLayout
			title="Bag - Gymbag"
			headerLabel="Checklist"
			headerLogoLabel="reset"
			activeButton="THEBAG"
			logoLink=""
		>
			<div className={styles.container}>
				{fetchedItems.map((item) => (
					<ListItem
						key={item.id}
						isDone={item.isDone}
						listItemLabel={item.listItemLabel}
						listItemDelete={false}
						// handleCheckboxClick={() => handleCheckboxClick(item)}
					/>
				))}
			</div>
		</AppLayout>
	);
};

export default Bag;
