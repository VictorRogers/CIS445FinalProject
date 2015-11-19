{
	_id: ObjectId('...'),
	name: 'Tim',
	character: {
		intrinsics: {
			strength: 10,
			dexterity: 16,
			intelligence: 17,
			charisma: 8 },
		'class': 'mage', 
		helath: 212,
		mana: 152
	},
	location: {
		id: 'maze-1', 
		description: 'a maze of twisty little passages...',
	exits: {n:'maze-2', s:'maze-1', e:'maze-3'},
		players: [
		{ id:ObjectId('...'), name:'grue' },
		{ id:ObjectId('...'), name:'Tim' }
		],
		inventory: [
		{qty:1, id:ObjectId('...'), name:'scroll of cause fear' }]
	},
	gold: 523,
	armor: [
		{ id:ObjectId('...'), region: 'head'},
	{id:ObjectId('...'), region: 'body'},
	{id:ObjectId('...'), region: 'feet'}],
	weapons: [ {id:ObjectId('...'), hand: 'both'} ],
	inventory: [
		{qty:1, id:ObjectId('...'), name: 'backpack', inventory: [
			{qty:4, id:ObjectId('...'), name: 'potion of healing'},
		{qty:1, id:ObjectId('...'), name: 'scroll of magic mapping'},
			{qty:2, id:ObjectId('...'), name: 'c-rations'} ]},
		{qty:1, id:ObjectId('...'), name:"wizard's hat", bonus:3},
	{ qty:1, id:ObjectId('...'), name: "wizard's robe", bonus:0},
	{ qty:1, id:ObjectId('...'), name: "old boots", bonus:0},
	{ qty:1, id:ObjectId('...'), name: "quarterstaff", bonus:2} ]
}
		