{
	_id: ObjectId('1'),
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
		id: 'Dun Morogh', 
		description: '',
	exits: {n:'Elwynn Forest', s:'Teldrassil'},
		players: [
		{ id:ObjectId('2'), name:'grue' },
		{ id:ObjectId('1'), name:'Tim' }
		],
		inventory: [
		{qty:1, id:ObjectId('...'), name:'scroll of cause fear' }]
	},
	gold: 523,
	armor: [
		{ id:ObjectId('15'), region: 'head'},
	{id:ObjectId('16'), region: 'body'},
	{id:ObjectId('17'), region: 'feet'}],
	weapons: [ {id:ObjectId('18), hand: 'both'} ],
	inventory: [
		{qty:1, id:ObjectId('26'), name: 'backpack', inventory: [
			{qty:4, id:ObjectId('1'), name: 'potion of healing'},
		{qty:1, id:ObjectId('2'), name: 'scroll of magic mapping'},
			{qty:2, id:ObjectId('3'), name: 'c-rations'} ]},
		{qty:1, id:ObjectId('15'), name:"wizard's hat", bonus:3},
	{ qty:1, id:ObjectId('16'), name: "wizard's robe", bonus:5},
	{ qty:1, id:ObjectId('17'), name: "old boots", bonus:2},
	{ qty:1, id:ObjectId('18'), name: "quarterstaff", bonus:2} ]
}

{
	_id: ObjectId('2'),
	name: 'Grue',
	character: {
		intrinsics: {
			strength: 17,
			dexterity: 10,
			intelligence: 13,
			charisma: 20 },
		'class': 'warrior', 
		helath: 434,
		mana: 152
	},
	location: {
		id: 'Dun Morogh', 
		description: '',
	exits: {n:'Elwynn Forest ', s:'Teldrassil'},
		players: [
		{ id:ObjectId('2'), name:'grue' },
		{ id:ObjectId('1'), name:'Tim' }
		],
		inventory: [
		{qty:1, id:ObjectId('...'), name:'scroll of cause fear' }]
	},
	gold: 1254,
	armor: [
		{ id:ObjectId('19'), region: 'head'},
	{id:ObjectId('20'), region: 'body'},
	{id:ObjectId('21'), region: 'feet'}],
	weapons: [ {id:ObjectId('5'), hand: 'both'} ],
	inventory: [
		{qty:1, id:ObjectId('26'), name: 'backpack', inventory: [
			{qty:5, id:ObjectId('1'), name: 'potion of healing'},
			{qty:3, id:ObjectId('3'), name: 'c-rations'} ]},
		{qty:1, id:ObjectId('19'), name:"iron helmet", bonus:2},
	{ qty:1, id:ObjectId('20'), name: "steel chest plate", bonus:5},
	{ qty:1, id:ObjectId('21'), name: "ass kicking boots", bonus:5},
	{ qty:1, id:ObjectId('5'), name: "noob masher", bonus:6} ]
}

{
	_id: ObjectId('3'),
	name: 'Bob',
	character: {
		intrinsics: {
			strength: 7,
			dexterity: 25,
			intelligence: 20,
			charisma: 8 },
		'class': 'hunter', 
		helath:250,
		mana: 75
	},
	location: {
		id: 'Elwynn Forest', 
		description: '',
	exits: {s:'Dun Morogh', e:'Azuremyst Ilse'},
		players: [
		],
		inventory: [
		{qty:1, id:ObjectId('2'), name:'scroll of magic mapping' }]
	},
	gold: 700,
	armor: [
		{ id:ObjectId('22'), region: 'head'},
	{id:ObjectId('23'), region: 'body'},
	{id:ObjectId('17'), region: 'feet'}],
	weapons: [ {id:ObjectId('24'), hand: 'both'} ],
	inventory: [
		{qty:1, id:ObjectId('26'), name: 'backpack', inventory: [
			{qty:4, id:ObjectId('1'), name: 'potion of healing'},
		{qty:1, id:ObjectId('2'), name: 'scroll of magic mapping'},
			{qty:2, id:ObjectId('9'), name: 'apple'} ]},
		{qty:1, id:ObjectId('22'), name:"leather helmet", bonus:3},
	{ qty:1, id:ObjectId('23'), name: "leather chest", bonus:4},
	{ qty:1, id:ObjectId('17'), name: "old boots", bonus:1},
	{ qty:1, id:ObjectId('24'), name: "sure strike bow", bonus:6},
	{ qty:20, id:ObjectId('25'), name: "steel tipped arrows", bonus:2}]
}

{
	_id: ObjectId('4'),
	name: 'Blake',
	character: {
		intrinsics: {
			strength: 17,
			dexterity: 16,
			intelligence: 16,
			charisma: 10 },
		'class': 'battlemage', 
		helath: 300,
		mana: 250
	},
	location: {
		id: 'Scarlet Enclave', 
		description: '',
	exits: {n:'Wandering Isle', s:'Kezan'},
		players: [
		{ id:ObjectId('4'), name:'Blake' },
		{ id:ObjectId('5'), name:'Dalton' }
		],
		inventory: [
		{qty:1, id:ObjectId('3'), name:'c-rations' }]
	},
	gold: 153,
	armor: [
		{ id:ObjectId('15'), region: 'head'},
	{id:ObjectId('20'), region: 'body'},
	{id:ObjectId('21'), region: 'feet'}],
	weapons: [ {id:ObjectId('6'), hand: 'right'},
				{id:ObjectId('11'), hand: 'left'}	],
	inventory: [
		{qty:1, id:ObjectId('26'), name: 'backpack', inventory: [
			{qty:2, id:ObjectId('1'), name: 'potion of healing'} ]},
		{qty:1, id:ObjectId('15'), name:"wizard's hat", bonus:3},
	{ qty:1, id:ObjectId('20'), name: "steel chest plate", bonus:5},
	{ qty:1, id:ObjectId('21'), name: "ass kicking boots", bonus:5},
	{ qty:1, id:ObjectId('6'), name: "sword of slaughtering dead babies", bonus:5},
	{ qty:1, id:ObjectId('11'), name: "tome of chaos", bonus:4}	]
}

{
	_id: ObjectId('5'),
	name: 'Dalton',
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
		id: 'Scarlet Enclave', 
		description: '',
	exits: {n:'Wandering Isle', s:'Kezan'},
		players: [
		{ id:ObjectId('5'), name:'Dalton' },
		{ id:ObjectId('4'), name:'Blake' }
		],
		inventory: []
	},
	gold: 1700,
	armor: [
		{ id:ObjectId('22'), region: 'head'},
	{id:ObjectId('23'), region: 'body'},
	{id:ObjectId('17'), region: 'feet'}],
	weapons: [ {id:ObjectId('13'), hand: 'right'},
			   {id:ObjectId('13'), hand: 'left'}],
	inventory: [
		{qty:1, id:ObjectId('26'), name: 'backpack', inventory: [
			{qty:2, id:ObjectId('1'), name: 'potion of healing'},
		{qty:1, id:ObjectId('2'), name: 'scroll of magic mapping'},
			{qty:5, id:ObjectId('3'), name: 'c-rations'} ]},
		{qty:1, id:ObjectId('22'), name:"leather helmet", bonus:3},
	{ qty:1, id:ObjectId('23'), name: "leather chest", bonus:4},
	{ qty:1, id:ObjectId('17'), name: "old boots", bonus:2},
	{ qty:2, id:ObjectId('13'), name: "poison dagger", bonus:5} ]
}

{
	_id: ObjectId('6'),
	name: 'Jack',
	character: {
		intrinsics: {
			strength: 22,
			dexterity: 14,
			intelligence: 12,
			charisma: 12 },
		'class': 'Death Knight', 
		helath: 185,
		mana: 100
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
	gold: 722,
	armor: [
		{ id:ObjectId('22'), region: 'head'},
	{id:ObjectId('20'), region: 'body'},
	{id:ObjectId('21'), region: 'feet'}],
	weapons: [ {id:ObjectId('4'), hand: 'right'} ],
	inventory: [
		{qty:1, id:ObjectId('...'), name: 'backpack', inventory: [
			{qty:3, id:ObjectId('1'), name: 'potion of healing'},
		{qty:1, id:ObjectId('2'), name: 'scroll of magic mapping'}, ]},
		{qty:1, id:ObjectId('22'), name:"leather helmet", bonus:3},
	{ qty:1, id:ObjectId('20'), name: "steel chest plate", bonus:5},
	{ qty:1, id:ObjectId('21'), name: "ass kicking boots", bonus:5},
	{ qty:1, id:ObjectId('4'), name: "axe of slaying", bonus:3} ]
}

{
	_id: ObjectId('7'),
	name: 'Grim',
	character: {
		intrinsics: {
			strength: 15,
			dexterity: 22,
			intelligence: 25,
			charisma: 8 },
		'class': 'Archer', 
		helath: 190,
		mana: 152,
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
	gold: 1100,
	armor: [
		{ id:ObjectId('22'), region: 'head'},
	{id:ObjectId('23'), region: 'body'},
	{id:ObjectId('17'), region: 'feet'}],
	weapons: [ {id:ObjectId('24'), hand: 'both'} ],
	inventory: [
		{qty:1, id:ObjectId('26'), name: 'backpack', inventory: [
			{qty:6, id:ObjectId('10'), name: 'potion of healing'},
			{qty:4, id:ObjectId('9'), name: 'apple'} ]},
		{qty:1, id:ObjectId('22'), name:"leather helmet", bonus:3},
	{ qty:1, id:ObjectId('23'), name: "leather chest", bonus:4},
	{ qty:1, id:ObjectId('17'), name: "old boots", bonus:2},
	{ qty:1, id:ObjectId('24'), name: "sure strike bow", bonus:6}'
	{ qty:30, id:ObjectId('25'), name: "steel tipped arrows", bonus:2}	]
}

{
	_id: ObjectId('8'),
	name: 'Haverfist',
	character: {
		intrinsics: {
			strength: 19,
			dexterity: 14,
			intelligence: 12,
			charisma: 14 },
		'class': 'Wrecker', 
		helath: 248,
		mana: 108
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
	gold: 400,
	armor: [
		{ id:ObjectId('19'), region: 'head'},
	{id:ObjectId('20'), region: 'body'},
	{id:ObjectId('21'), region: 'feet'}],
	weapons: [ {id:ObjectId('6'), hand: 'left'} ],
	inventory: [
		{qty:1, id:ObjectId('26'), name: 'backpack', inventory: [
			{qty:3, id:ObjectId('1'), name: 'potion of healing'},
		{qty:1, id:ObjectId('2'), name: 'scroll of magic mapping'},
			{qty:2, id:ObjectId('3'), name: 'c-rations'} ]},
		{qty:1, id:ObjectId('19'), name:"iron helmet", bonus:3},
	{ qty:1, id:ObjectId('20'), name: "steel chest plate", bonus:5},
	{ qty:1, id:ObjectId('21'), name: "old boots", bonus:5},
	{ qty:1, id:ObjectId('6'), name: "sword of slaughtering dead babies", bonus:5} ]
}

{
	_id: ObjectId('9'),
	name: 'Mike',
	character: {
		intrinsics: {
			strength: 11,
			dexterity: 17,
			intelligence: 14,
			charisma: 10 },
		'class': 'Warrior', 
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
	gold: 666,
	armor: [
		{ id:ObjectId('19'), region: 'head'},
	{id:ObjectId('20'), region: 'body'},
	{id:ObjectId('21'), region: 'feet'}],
	weapons: [ {id:ObjectId('4'), hand: 'both'} ],
	inventory: [
		{qty:1, id:ObjectId('1'), name: 'backpack', inventory: [
			{qty:4, id:ObjectId('1'), name: 'potion of healing'},
			{qty:2, id:ObjectId('3'), name: 'c-rations'} ]},
		{qty:1, id:ObjectId('19'), name:"iron helmet", bonus:2},
	{ qty:1, id:ObjectId('20'), name: "steel chest plate", bonus:5},
	{ qty:1, id:ObjectId('21'), name: "ass kicking boots", bonus:5},
	{ qty:1, id:ObjectId('4'), name: "axe of slaying ", bonus:3} ]
}

{
	_id: ObjectId('10'),
	name: 'Rocky',
	character: {
		intrinsics: {
			strength: 12,
			dexterity: 16,
			intelligence: 18,
			charisma: 8 },
		'class': 'mage', 
		helath: 241,
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
	gold: 420,
	armor: [
		{ id:ObjectId('15'), region: 'head'},
	{id:ObjectId('16'), region: 'body'},
	{id:ObjectId('17'), region: 'feet'}],
	weapons: [ {id:ObjectId('8'), hand: 'left'}, 
		{id:ObjectId('7'), hand: 'right'} ],
	inventory: [
		{qty:1, id:ObjectId('26'), name: 'backpack', inventory: [
			{qty:4, id:ObjectId('1'), name: 'potion of healing'},
		{qty:1, id:ObjectId('3'), name: 'scroll of magic mapping'},
			{qty:2, id:ObjectId('10'), name: 'water of replenishment'} ]},
		{qty:1, id:ObjectId('15'), name:"wizard's hat", bonus:3},
	{ qty:1, id:ObjectId('16'), name: "wizard's robe", bonus:5},
	{ qty:1, id:ObjectId('17'), name: "old boots", bonus:2},
	{ qty:1, id:ObjectId('8'), name: "staff of resurrection", bonus:7},
	 qty:1, id:ObjectId('7'), name: "hallowed wand", bonus:3} ]
}

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