import styles from './styles.module.scss';
import AppLayout from 'app/appLayout';
import { fetchBagItems } from '@/supabase/supabase.api';
import List from '@/components/List/List';

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
				<List items={fetchedItems} />
			</div>
		</AppLayout>
	);
};

export default Bag;
