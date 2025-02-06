'use client';
import { useState } from 'react';
import { updateIsDoneStatus } from '@/supabase/supabase.api';
import type { ListItemType } from '@/types/list-items';
import ListItem from '@/components/Common/ListItem/ListItem';

const List = ({ items }: { items: ListItemType[] }) => {
	const [listItems, setListItems] = useState(items);

	async function handleCheckboxClick(itemId: string) {
		// Find the item and toggle its `isDone` status
		setListItems((prevItems) =>
			prevItems.map((item) => (item.itemId === itemId ? { ...item, isDone: !item.isDone } : item)),
		);

		const upDatedIsDoneStatus = !items.find((item) => item.itemId === itemId)?.isDone;

		// Update the database
		await updateIsDoneStatus('17805293-1193-4548-b101-ddadee114600', itemId, upDatedIsDoneStatus);
	}

	return (
		<div>
			{listItems.map((item) => (
				<ListItem key={item.itemId} item={item} onClick={() => handleCheckboxClick(item.itemId)} />
			))}
		</div>
	);
};

export default List;
