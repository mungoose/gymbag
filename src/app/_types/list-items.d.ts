export interface ListItemType {
	itemId: string;
	userId: string;
	isDone: boolean;
	listItemLabel: string;
	listItemDelete?: boolean;
}

export type DBListItem = {
	id: string;
	user_id: string;
	list_item_label: string;
	is_done: boolean;
	created_at: string;
};
