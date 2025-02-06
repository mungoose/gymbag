import { createClient } from '@/supabase/client';
import type { ListItem, DBListItem } from '@/types/list-items';

function transformDatabaseValues(data: DBListItem[]): ListItem[] {
	return data.map((item) => {
		return {
			id: item.id,
			userId: item.user_id,
			listItemLabel: item.list_item_label,
			isDone: item.is_done,
			createdAt: item.created_at,
		};
	});
}

export async function fetchBagItems(userId: string): Promise<ListItem[]> {
	const supabase = createClient();

	const { data, error } = await supabase.from('takeoff_list').select('*').eq('user_id', userId);
	if (error) {
		throw new Error(error.message);
	}

	return transformDatabaseValues(data) || [];
}

export async function addBagItem(userId: string, itemName: string) {
	const supabase = createClient();

	const { error } = await supabase.from('bag_items').insert([{ user_id: userId, item_name: itemName }]);
	if (error) {
		throw new Error(error.message);
	}
}
