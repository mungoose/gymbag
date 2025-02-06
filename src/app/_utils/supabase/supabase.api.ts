import { createClient } from '@/supabase/client';
import type { ListItemType, DBListItem } from '@/types/list-items';

function transformDatabaseValues(data: DBListItem[]): ListItemType[] {
	return data.map((item) => {
		return {
			itemId: item.id,
			userId: item.user_id,
			listItemLabel: item.list_item_label,
			isDone: item.is_done,
			createdAt: item.created_at,
		};
	});
}

export async function fetchBagItems(userId: string): Promise<ListItemType[]> {
	const supabase = createClient();

	const { data, error } = await supabase.from('takeoff_list').select('*').eq('user_id', userId);
	if (error) {
		throw new Error(error.message);
	}

	return transformDatabaseValues(data) || [];
}

export async function addBagItem(userId: string, itemName: string) {
	const supabase = createClient();

	const { error } = await supabase.from('takeoff_list').insert([{ user_id: userId, item_name: itemName }]);
	if (error) {
		throw new Error(error.message);
	}
}

export async function updateIsDoneStatus(userId: string, itemId: string, isDone: boolean) {
	const supabase = createClient();

	console.log('.... user id: ', userId, ' | item id: ', itemId, ' | is done: ', isDone);

	const { error } = await supabase
		.from('takeoff_list')
		.update({ is_done: isDone })
		.eq('id', itemId)
		.eq('user_id', userId);
	if (error) {
		throw new Error(error.message);
	}
}
