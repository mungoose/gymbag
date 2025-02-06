export interface ListItemType {
	isDone: boolean;
	listItemLabel: string;
	listItemDelete: boolean;
}

export const sampleTakeoffList: ListItemType[] = [
	{ listItemLabel: 'Shoes', isDone: false, listItemDelete: false },
	{ isDone: false, listItemLabel: 'Socks', listItemDelete: true },
	{ isDone: false, listItemLabel: 'Underpants', listItemDelete: false },
	{ isDone: true, listItemLabel: 'Shorts', listItemDelete: false },
	{ isDone: false, listItemLabel: 'Shirt', listItemDelete: false },
	{ isDone: false, listItemLabel: 'Cap', listItemDelete: false },
	{ isDone: true, listItemLabel: 'Card', listItemDelete: false },
	{ isDone: true, listItemLabel: 'Lock and key', listItemDelete: false },
	{ isDone: false, listItemLabel: 'Gloves', listItemDelete: false },
	{
		isDone: false,
		listItemLabel: 'Something else and someone more text here as well',
		listItemDelete: false,
	},
	{
		isDone: false,
		listItemLabel: 'And some more something else to test the oveflow of extra text',
		listItemDelete: false,
	},
	{ isDone: true, listItemLabel: 'Shoe ties', listItemDelete: false },
	{ isDone: true, listItemLabel: 'Watch', listItemDelete: false },
	{ isDone: true, listItemLabel: 'Phone', listItemDelete: false },
	{ isDone: false, listItemLabel: 'Second Phone', listItemDelete: false },
	{ isDone: false, listItemLabel: 'Second Phone', listItemDelete: false },
	{ isDone: false, listItemLabel: 'Second Phone', listItemDelete: false },
	{ isDone: false, listItemLabel: 'Second Phone', listItemDelete: false },
	{ isDone: false, listItemLabel: 'Second Phone', listItemDelete: false },
	{ isDone: false, listItemLabel: 'Last Phone', listItemDelete: false },
];
