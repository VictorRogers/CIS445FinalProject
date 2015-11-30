db.Character.insert({
	name: 'Tim',
	character: {
		intrinsics: {
			strength: 10,
			dexterity: 16,
			intelligence: 17,
			charisma: 8 },
		'class': 'mage', 
		health: 212,
		mana: 152 },
		
	location: {
		id: 'Dun Morogh', 
		description: 'an easy starting area',
		exits: {n:'Scarlet Enclave', s:'Elwynn Forest'},
		players: [
			{name:'grue'},
			{name:'Tim' }
		]
	},
	gold: 523,
	armor: [
		{region: 'head'},
		{region: 'body'},
		{region: 'feet'}
	],
	weapons: [ {hand: 'both'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:4, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:2, name: 'c-rations'} ]},
		{qty:1, name:"wizard's hat", bonus:3},
		{ qty:1, name: "wizard's robe", bonus:5},
		{ qty:1, name: "old boots", bonus:2},
		{ qty:1, name: "quarterstaff", bonus:2} 
	]
});

{
	name: 'Grue',
	character: {
		intrinsics: {
			strength: 17,
			dexterity: 10,
			intelligence: 13,
			charisma: 20 },
		class: 'warrior', 
		health: 434,
		mana: 152 
	},
	location: {
		id: 'Dun Morogh', 
		description: 'an easy starting area',
		exits: {n: 'Scarlet Enclave', s: 'Elwynn Forest'},
		players: [
			{name: 'grue'},
			{name: 'Tim'}
		],
	},
	gold: 1254,
	armor: [
		{name: 'iron helmet', bonus: 2, region: 'head'},
		{name: 'steel chest plate', bonus: 5, region: 'body'},
		{name: 'ass kicking boots', bonus: 5, region: 'feet'}
	],
	weapons: [{name: 'noob masher', bonus: 6, hand: 'both'}],
	inventory: [
		{qty: 1, name: 'backpack', inventory: [
			{qty: 5, name: 'potion of healing'},
			{qty: 3, name: 'c-rations'}
		]}
	]
}

{
	name: 'Bob',
	character: {
		intrinsics: {
			strength: 7,
			dexterity: 25,
			intelligence: 20,
			charisma: 8 },
		'class': 'hunter', 
		health:250,
	mana: 75 ,
	},
	location: {
		id: 'Elwynn Forest', 
		description: 'a dense green forest',
	exits: {n:'Dun Morogh', s:'Teldrassil'},
		players: [
		],
	},
	gold: 700,
	armor: [
		{region: 'head'},
		{region: 'body'},
		{region: 'feet'}],
	weapons: [ {hand: 'both'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:4, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:2, name: 'apple'} ]},
		{qty:1, name:"leather helmet", bonus:3},
		{qty:1, name: "leather chest", bonus:4},
		{qty:1, name: "old boots", bonus:1},
		{qty:1, name: "sure strike bow", bonus:6},
		{qty:20, name: "steel tipped arrows", bonus:2}]
}

{
	name: 'Blake',
	character: {
		intrinsics: {
			strength: 17,
			dexterity: 16,
			intelligence: 16,
			charisma: 10 },
		'class': 'battlemage', 
		health: 300,
	mana: 250 
	},
	location: {
		id: 'Scarlet Enclave', 
		description: 'The dark lords lair.',
	exits: {n:'Wandering Isle', s:'Kezan'},
		players: [
		{name:'Blake' },
		{name:'Dalton' }
		],
	},
	gold: 153,
	armor: [
		{ id:ObjectId('15'), region: 'head'},
		{id:ObjectId('20'), region: 'body'},
		{id:ObjectId('21'), region: 'feet'}],
	weapons: [ {hand: 'right'},
			   {hand: 'left'}	],
	inventory: [
		{qty:1,name: 'backpack', inventory: [
		{qty:2,name: 'potion of healing'} ]},
		{qty:1,name:"wizard's hat", bonus:3},
		{qty:1,name: "steel chest plate", bonus:5},
		{qty:1,name: "ass kicking boots", bonus:5},
		{qty:1,name: "sword of slaughtering dead babies", bonus:5},
		{qty:1,name: "tome of chaos", bonus:4}	]
}

{
	name: 'Dalton',
	character: {
		intrinsics: {
			strength: 10,
			dexterity: 16,
			intelligence: 17,
			charisma: 8 },
		'class': 'mage', 
		health: 212,
	mana: 152 
	},
	location: {
		id: 'Scarlet Enclave', 
		description: 'The dark lords lair.',
	exits: {n:'Wandering Isle', s:'Kezan'},
		players: [
		{name:'Dalton' },
		{name:'Blake' }
		],
	},
	gold: 1700,
	armor: [
		{region: 'head'},
		{region: 'body'},
		{region: 'feet'}],
	weapons: [hand: 'right'},
			  {hand: 'left'}],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:2, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:5, name: 'c-rations'} ]},
		{qty:1, name:"leather helmet", bonus:3},
		{qty:1, name: "leather chest", bonus:4},
		{qty:1, name: "old boots", bonus:2},
		{qty:2, name: "poison dagger", bonus:5} ]
}

{
	name: 'Jack',
	character: {
		intrinsics: {
			strength: 22,
			dexterity: 14,
			intelligence: 12,
			charisma: 12 },
		'class': 'Death Knight', 
		health: 185,
	mana: 100 
	},
	location: {
		id: 'Kezan', 
		description: 'desert wasteland',
	exits: {n:'Scarlet Enclave', e:'Mulgore'},
		players: [
		{ name:'Jack' },
		],
	},
	gold: 722,
	armor: [
		{region: 'head'},
		{region: 'body'},
		{region: 'feet'}],
	weapons: [ {id:ObjectId('4'), hand: 'right'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:3, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'}, ]},
		{qty:1, name:"leather helmet", bonus:3},
		{qty:1, name: "steel chest plate", bonus:5},
		{qty:1, name: "ass kicking boots", bonus:5},
		{qty:1, name: "axe of slaying", bonus:3} ]
}

{
	name: 'Grim',
	character: {
		intrinsics: {
			strength: 15,
			dexterity: 22,
			intelligence: 25,
			charisma: 8 },
		'class': 'Archer', 
		health: 190,
	mana: 152 
	},
	location: {
		id: 'Durotar', 
		description: 'grassy plains',
	exits: {w:'Gilneas'},
		players: [
		{ name:'Grim' },
		],
	},
	gold: 1100,
	armor: [
		{region: 'head'},
		{region: 'body'},
		{region: 'feet'}],
	weapons: [ {hand: 'both'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:6, name: 'potion of healing'},
		{qty:4, name: 'apple'} ]},
		{qty:1, name:"leather helmet", bonus:3},
		{qty:1, name: "leather chest", bonus:4},
		{qty:1, name: "old boots", bonus:2},
		{qty:1, name: "sure strike bow", bonus:6}'
		{qty:30, name: "steel tipped arrows", bonus:2}	]
}

{
	name: 'Haverfist',
	character: {
		intrinsics: {
			strength: 19,
			dexterity: 14,
			intelligence: 12,
			charisma: 14 },
		'class': 'Wrecker', 
		health: 248,
		mana: 108 
	},
	location: {
		id: 'Mulgore', 
		description: 'where the taurens roam',
	exits: {n:'Durotar', s:'Eversong Woods'},
		players: [
		{name:'Mike' },
		{name:'Haverfist' }
		],
	},
	gold: 400,
	armor: [
		{ region: 'head'},
		{ region: 'body'},
		{ region: 'feet'}],
	weapons: [ {hand: 'left'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:3, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:2, name: 'c-rations'} ]},
		{qty:1, name:"iron helmet", bonus:3},
		{qty:1, name: "steel chest plate", bonus:5},
		{qty:1, name: "old boots", bonus:5},
		{qty:1, name: "sword of slaughtering dead babies", bonus:5} ]
}

{
	name: 'Mike',
	character: {
		intrinsics: {
			strength: 11,
			dexterity: 17,
			intelligence: 14,
			charisma: 10 },
		'class': 'Warrior', 
		health: 212,
		mana: 152
	},
	location: {
		id: 'Mulgore', 
		description: 'where the taurens roam',
	exits: {n:'Durotar', s:'Eversong Woods'},
		players: [
		{name:'grue' },
		{name:'Tim' }
		],
	},
	gold: 666,
	armor: [
		{region: 'head'},
		{region: 'body'},
		{region: 'feet'}],
	weapons: [ {hand: 'both'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:4, name: 'potion of healing'},
		{qty:2, name: 'c-rations'} ]},
		{qty:1, name:"iron helmet", bonus:2},
		{qty:1, name: "steel chest plate", bonus:5},
		{qty:1, name: "ass kicking boots", bonus:5},
		{qty:1, name: "axe of slaying ", bonus:3} ]
}

{
	name: 'Rocky',
	character: {
		intrinsics: {
			strength: 12,
			dexterity: 16,
			intelligence: 18,
			charisma: 8 },
		'class': 'mage', 
		health: 241,
	mana: 152
	},
	location: {
		id: 'maze-1', 
		description: '',
	exits: {n:'maze-2', s:'maze-1', e:'maze-3'},
		players: [
		{ name:'grue' },
		{ name:'Tim' }
		],

	},
	gold: 420,
	armor: [
		{region: 'head'},
		{region: 'body'},
		{region: 'feet'}],
	weapons: [hand: 'left'}, 
			{hand: 'right'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:4, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:2, name: 'water of replenishment'} ]},
		{qty:1, name:"wizard's hat", bonus:3},
		{qty:1, name: "wizard's robe", bonus:5},
		{qty:1, name: "old boots", bonus:2},
		{qty:1, name: "staff of resurrection", bonus:7},
		{qty:1, name: "hallowed wand", bonus:3} ]
}

{
	name: 'Billy Badass',
	character: {
		intrinsics: {
			strength: 20,
			dexterity: 23,
			intelligence: 2,
			charisma: 1 },
		'class': 'Skull Thumper', 
		health: 500,
	mana: 20
	},
	location: {
		id: 'Wandering Isle', 
		description: 'a maze of twisty little passages...',
	exits: {n:'maze-2', s:'maze-1', e:'maze-3'},
		players: [
		{name:'grue' },
		{name:'Tim' }
		],
	},
	gold: 523,
	armor: [
		{region: 'head'},
		{region: 'body'},
		{region: 'feet'}],
	weapons: [ { hand: 'both'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:4, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:2, name: 'c-rations'} ]},
		{qty:1, name:"wizard's hat", bonus:3},
		{qty:1, name: "wizard's robe", bonus:0},
		{qty:1, name: "old boots", bonus:0},
		{qty:1, name: "quarterstaff", bonus:2} ]
}

{
	name: 'Grue',
	character: {
		intrinsics: {
			strength: 17,
			dexterity: 10,
			intelligence: 13,
			charisma: 20 },
		class: 'warrior', 
		health: 434,
		mana: 152 
	},
	location: {
		id: 'Dun Morogh', 
		description: 'an easy starting area',
		exits: {n: 'Scarlet Enclave', s: 'Elwynn Forest'},
		players: [
			{name: 'grue'},
			{name: 'Tim'}
		],
	},
	gold: 1254,
	armor: [
		{name: 'iron helmet', bonus: 2, region: 'head'},
		{name: 'steel chest plate', bonus: 5, region: 'body'},
		{name: 'ass kicking boots', bonus: 5, region: 'feet'}
	],
	weapons: [{qty: 1, name: 'noob masher', bonus: 6, hand: 'both'}],
	inventory: [
		{qty: 1, name: 'backpack', inventory: [
			{qty: 5, name: 'potion of healing'},
			{qty: 3, name: 'c-rations'}
		]}
	]
}

{
	name: 'Grue',
	character: {
		intrinsics: {
			strength: 17,
			dexterity: 10,
			intelligence: 13,
			charisma: 20 },
		class: 'warrior', 
		health: 434,
		mana: 152 
	},
	location: {
		id: 'Dun Morogh', 
		description: 'an easy starting area',
		exits: {n: 'Scarlet Enclave', s: 'Elwynn Forest'},
		players: [
			{name: 'grue'},
			{name: 'Tim'}
		],
	},
	gold: 1254,
	armor: [
		{name: 'iron helmet', bonus: 2, region: 'head'},
		{name: 'steel chest plate', bonus: 5, region: 'body'},
		{name: 'ass kicking boots', bonus: 5, region: 'feet'}
	],
	weapons: [{qty: 1, name: 'noob masher', bonus: 6, hand: 'both'}],
	inventory: [
		{qty: 1, name: 'backpack', inventory: [
			{qty: 5, name: 'potion of healing'},
			{qty: 3, name: 'c-rations'}
		]}
	]
}
{
	name: 'Grue',
	character: {
		intrinsics: {
			strength: 17,
			dexterity: 10,
			intelligence: 13,
			charisma: 20 },
		class: 'warrior', 
		health: 434,
		mana: 152 
	},
	location: {
		id: 'Dun Morogh', 
		description: 'an easy starting area',
		exits: {n: 'Scarlet Enclave', s: 'Elwynn Forest'},
		players: [
			{name: 'grue'},
			{name: 'Tim'}
		],
	},
	gold: 1254,
	armor: [
		{name: 'iron helmet', bonus: 2, region: 'head'},
		{name: 'steel chest plate', bonus: 5, region: 'body'},
		{name: 'ass kicking boots', bonus: 5, region: 'feet'}
	],
	weapons: [{qty: 1, name: 'noob masher', bonus: 6, hand: 'both'}],
	inventory: [
		{qty: 1, name: 'backpack', inventory: [
			{qty: 5, name: 'potion of healing'},
			{qty: 3, name: 'c-rations'}
		]}
	]
}

{
	name: 'Grue',
	character: {
		intrinsics: {
			strength: 17,
			dexterity: 10,
			intelligence: 13,
			charisma: 20 },
		class: 'warrior', 
		health: 434,
		mana: 152 
	},
	location: {
		id: 'Dun Morogh', 
		description: 'an easy starting area',
		exits: {n: 'Scarlet Enclave', s: 'Elwynn Forest'},
		players: [
			{name: 'grue'},
			{name: 'Tim'}
		],
	},
	gold: 1254,
	armor: [
		{name: 'iron helmet', bonus: 2, region: 'head'},
		{name: 'steel chest plate', bonus: 5, region: 'body'},
		{name: 'ass kicking boots', bonus: 5, region: 'feet'}
	],
	weapons: [{qty: 1, name: 'noob masher', bonus: 6, hand: 'both'}],
	inventory: [
		{qty: 1, name: 'backpack', inventory: [
			{qty: 5, name: 'potion of healing'},
			{qty: 3, name: 'c-rations'}
		]}
	]
}

{
	name: 'Grue',
	character: {
		intrinsics: {
			strength: 17,
			dexterity: 10,
			intelligence: 13,
			charisma: 20 },
		class: 'warrior', 
		health: 434,
		mana: 152 
	},
	location: {
		id: 'Dun Morogh', 
		description: 'an easy starting area',
		exits: {n: 'Scarlet Enclave', s: 'Elwynn Forest'},
		players: [
			{name: 'grue'},
			{name: 'Tim'}
		],
	},
	gold: 1254,
	armor: [
		{name: 'iron helmet', bonus: 2, region: 'head'},
		{name: 'steel chest plate', bonus: 5, region: 'body'},
		{name: 'ass kicking boots', bonus: 5, region: 'feet'}
	],
	weapons: [{qty: 1, name: 'noob masher', bonus: 6, hand: 'both'}],
	inventory: [
		{qty: 1, name: 'backpack', inventory: [
			{qty: 5, name: 'potion of healing'},
			{qty: 3, name: 'c-rations'}
		]}
	]
}

{
	name: 'Grue',
	character: {
		intrinsics: {
			strength: 17,
			dexterity: 10,
			intelligence: 13,
			charisma: 20 },
		class: 'warrior', 
		health: 434,
		mana: 152 
	},
	location: {
		id: 'Dun Morogh', 
		description: 'an easy starting area',
		exits: {n: 'Scarlet Enclave', s: 'Elwynn Forest'},
		players: [
			{name: 'grue'},
			{name: 'Tim'}
		],
	},
	gold: 1254,
	armor: [
		{name: 'iron helmet', bonus: 2, region: 'head'},
		{name: 'steel chest plate', bonus: 5, region: 'body'},
		{name: 'ass kicking boots', bonus: 5, region: 'feet'}
	],
	weapons: [{qty: 1, name: 'noob masher', bonus: 6, hand: 'both'}],
	inventory: [
		{qty: 1, name: 'backpack', inventory: [
			{qty: 5, name: 'potion of healing'},
			{qty: 3, name: 'c-rations'}
		]}
	]
}

{
	name: 'Tim',
	character: {
		intrinsics: {
			strength: 10,
			dexterity: 16,
			intelligence: 17,
			charisma: 8 },
		'class': 'mage', 
		health: 212,
		mana: 152 },
		
	location: {
		id: 'Dun Morogh', 
		description: 'an easy starting area',
		exits: {n:'Scarlet Enclave', s:'Elwynn Forest'},
		players: [
			{name:'grue'},
			{name:'Tim' }
		]
	},
	gold: 523,
	armor: [
		{region: 'head'},
		{region: 'body'},
		{region: 'feet'}
	],
	weapons: [ {hand: 'both'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:4, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:2, name: 'c-rations'} ]},
		{qty:1, name:"wizard's hat", bonus:3},
		{ qty:1, name: "wizard's robe", bonus:5},
		{ qty:1, name: "old boots", bonus:2},
		{ qty:1, name: "quarterstaff", bonus:2} 
	]
});

{
	name: 'Tim',
	character: {
		intrinsics: {
			strength: 10,
			dexterity: 16,
			intelligence: 17,
			charisma: 8 },
		'class': 'mage', 
		health: 212,
		mana: 152 },
		
	location: {
		id: 'Dun Morogh', 
		description: 'an easy starting area',
		exits: {n:'Scarlet Enclave', s:'Elwynn Forest'},
		players: [
			{name:'grue'},
			{name:'Tim' }
		]
	},
	gold: 523,
	armor: [
		{region: 'head'},
		{region: 'body'},
		{region: 'feet'}
	],
	weapons: [ {hand: 'both'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:4, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:2, name: 'c-rations'} ]},
		{qty:1, name:"wizard's hat", bonus:3},
		{ qty:1, name: "wizard's robe", bonus:5},
		{ qty:1, name: "old boots", bonus:2},
		{ qty:1, name: "quarterstaff", bonus:2} 
	]
});

{
	name: 'Tim',
	character: {
		intrinsics: {
			strength: 10,
			dexterity: 16,
			intelligence: 17,
			charisma: 8 },
		'class': 'mage', 
		health: 212,
		mana: 152 },
		
	location: {
		id: 'Dun Morogh', 
		description: 'an easy starting area',
		exits: {n:'Scarlet Enclave', s:'Elwynn Forest'},
		players: [
			{name:'grue'},
			{name:'Tim' }
		]
	},
	gold: 523,
	armor: [
		{region: 'head'},
		{region: 'body'},
		{region: 'feet'}
	],
	weapons: [ {hand: 'both'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:4, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:2, name: 'c-rations'} ]},
		{qty:1, name:"wizard's hat", bonus:3},
		{ qty:1, name: "wizard's robe", bonus:5},
		{ qty:1, name: "old boots", bonus:2},
		{ qty:1, name: "quarterstaff", bonus:2} 
	]
});