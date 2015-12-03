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
		{name:"wizard's hat", bonus:3, region: 'head'},
		{name: "wizard's robe", bonus:5, region: 'body'},
		{name: "old boots", bonus:2, region: 'feet'}
	],
	weapons: [ {name: "quarterstaff", bonus:2, hand: 'both'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:4, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:2, name: 'c-rations'} ]},
	]
});

db.Character.insert({
	name: 'Grue',
	character: {
		intrinsics: {
			strength: 17,
			dexterity: 10,
			intelligence: 13,
			charisma: 20 },
		'class': 'warrior', 
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
});

db.Character.insert({

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
		{name:"leather helmet", bonus:3, region: 'head'},
		{name: "leather chest", bonus:4, region: 'body'},
		{name: "old boots", bonus:1, region: 'feet'}],
	weapons: [ {name: "sure strike bow", bonus:6, hand: 'both'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:4, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:2, name: 'apple'} ]},
		{qty:20, name: "steel tipped arrows", bonus:2}]

});
db.Character.insert({
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
		{name:"wizard's hat", bonus:3, region: 'head'},
		{name: "steel chest plate", bonus:5, region: 'body'},
		{name: "ass kicking boots", bonus:5, region: 'feet'}],
	weapons: [ {name: "sword of slaughtering dead babies", bonus:5, hand: 'right'},
			   {name: "tome of chaos", bonus:4, hand: 'left'}	],
	inventory: [
		{qty:1,name: 'backpack', inventory: [
		{qty:2,name: 'potion of healing'} ]},
		]
});

db.Character.insert({
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
		{name:"leather helmet", bonus:3, region: 'head'},
		{name: "leather chest", bonus:4, region: 'body'},
		{name: "old boots", bonus:2, region: 'feet'}],
	weapons: [{name: "poison dagger", bonus:5, hand: 'right'},
			  {name: "poison dagger", bonus:5, hand: 'left'}],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:2, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:5, name: 'c-rations'} ]}
	]
});
db.Character.insert({
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
		{name:"leather helmet", bonus:3, region: 'head'},
		{name: "steel chest plate", bonus:5, region: 'body'},
		{name: "ass kicking boots", bonus:5, region: 'feet'}],
	weapons: [ {name: "axe of slaying", bonus:3, hand: 'right'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:3, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'}, ]}
		 ]
});
db.Character.insert({
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
		{name:"leather helmet", bonus:3, region: 'head'},
		{name: "leather chest", bonus:4, region: 'body'},
		{name: "old boots", bonus:2, region: 'feet'}],
	weapons: [ {name: "sure strike bow", bonus:6, hand: 'both'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:6, name: 'potion of healing'},
		{qty:4, name: 'apple'} ,
		{qty:30, name: "steel tipped arrows", bonus:2}	]}]
});

db.Character.insert({
	name: 'Haverfist',
	character: {
		intrinsics: {
			strength: 19,
			dexterity: 14,
			intelligence: 12,
			charisma: 14 },
		''class'': 'Wrecker', 
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
		{name:"iron helmet", bonus:3, region: 'head'},
		{name: "steel chest plate", bonus:5, region: 'body'},
		{name: "old boots", bonus:5,region: 'feet'}],
	weapons: [ {name:'sword of slaughtering dead babies', bonus: 5 ,hand: 'left'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:3, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:2, name: 'c-rations'} ]}
 ]
});

db.Character.insert({
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
		{name:'Mike' }
		],
	},
	gold: 666,
	armor: [
		{name:"iron helmet", bonus:2, region: 'head'},
		{name: "steel chest plate", bonus:5, region: 'body'},
		{name: "ass kicking boots", bonus:5, region: 'feet'}],
	weapons: [ {qty:1, name: "axe of slaying ", bonus:3, hand: 'both'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:4, name: 'potion of healing'},
		{qty:2, name: 'c-rations'} ]},		
		 ]
});

db.Character.insert({
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
		id: 'Eversong Woods', 
		description: 'dark forest',
	exits: {n:'Mulgore', s:'Kezan'},
		players: [
		{ name:'Rocky' },
		{ name:'Brain Smasher' }
		],

	},
	gold: 420,
	armor: [
		{name: "wizard's robe", bonus:5, region: 'head'},
		{name: "wizard's robe", bonus:5, region: 'body'},
		{name: "old boots", bonus:2, region: 'feet'}],
	weapons: [{name: "staff of resurrection", bonus:7, hand: 'left'}, 
			{name: "hallowed wand", bonus:3, hand: 'right'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:4, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:2, name: 'water of replenishment'} ]},
 ]
});

db.Character.insert({
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
		description: 'the lost island',
	exits: {n:'Kezan', s:'Scarlet Enclave'},
		players: [
		{name:'Billy Badass' },
		],
	},
	gold: 523,
	armor: [
		{name:"wizard's hat", bonus:3, region: 'head'},
		{name: "wizard's robe", bonus:5, region: 'body'},
		{name: "old boots", bonus:2, region: 'feet'}],
	weapons: [ {name: "quarterstaff", bonus:2, hand: 'both'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:4, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:2, name: 'c-rations'} ]} ]
});

db.Character.insert({
	name: 'Goku',
	character: {
		intrinsics: {
			strength: 9001,
			dexterity: 25,
			intelligence: 7,
			charisma: 20 },
		'class': 'Sayian', 
		health: 500,
		mana: 152 
	},
	location: {
		id: 'Teldrassil', 
		description: 'the battlesgrounds',
		exits: {n: 'Elwynn Forest', s: 'Azuremyst Ilse'},
		players: [
			{name: 'Goku'},
			{name: 'Skull Crusher'}
		],
	},
	gold: 10,
	armor: [
		{name: 'leather chest', bonus: 4, region: 'body'},
		{name: 'old boots', bonus: 2, region: 'feet'}
	],
	weapons: [{name: 'staff of resurrection', bonus: 7, hand: 'both'}],
	inventory: [
			{qty: 1, name: 'backpack', inventory: [
			{qty: 5, name: 'potion of healing'},
			{qty: 3, name: 'apple'}
		]}
	]
});

db.Character.insert({
	name: 'Pansyass',
	character: {
		intrinsics: {
			strength: 2,
			dexterity: 1,
			intelligence: 3,
			charisma: 2 },
		'class': 'wannabe', 
		health: 99,
		mana: 78
	},
	location: {
		id: 'Azuremyst Isle', 
		description: 'brighty shiney island',
		exits: {n: 'Teldrassil', s: 'Gilneas'},
		players: [
			{name: 'Pansyass'},
		],
	},
	gold: 10000,
	armor: [
		{name: 'wizards hat', bonus: 3 , region: 'head'},
		{name: 'wizards robe', bonus: 5, region: 'body'},
		{name: 'ass kicking boots', bonus: 5, region: 'feet'}
	],
	weapons: [{name: 'sword of slaughtering dead babies', bonus: 5, hand: 'both'}],
	inventory: [
		{qty: 1, name: 'backpack', inventory: [
			{qty: 5, name: 'potion of healing'},
			{qty: 3, name: 'water of replenishment'}
		]}
	]
});
db.Character.insert({
	name: 'That Guy',
	character: {
		intrinsics: {
			strength: 20,
			dexterity: 5,
			intelligence: 15,
			charisma: 20 },
		'class': 'Fighter', 
		health: 485,
		mana: 320 
	},
	location: {
		id: 'Eversong Woods', 
		description: 'dark forest',
		exits: {n: 'Mulgore', s: 'Kezan'},
		players: [
			{name: 'That Guy'},
			{name: 'Rocky'},
			{name: 'Brain Smasher'}
		],
	},
	gold: 1952,
	armor: [
		{name: 'iron helmet', bonus: 2, region: 'head'},
		{name: 'leather chest', bonus: 4, region: 'body'},
		{name: 'old boots', bonus: 2, region: 'feet'}
	],
	weapons: [{qty: 1, name: 'axe of slaying', bonus: 3, hand: 'both'}],
	inventory: [
		{qty: 1, name: 'backpack', inventory: [
			{qty: 1, name: 'scroll of magic mapping'},
			{qty: 5, name: 'c-rations'}
		]}
	]
});

db.Character.insert({
	name: 'Last Man Standing',
	character: {
		intrinsics: {
			strength: 5,
			dexterity: 18,
			intelligence: 16,
			charisma: 21 },
		'class': 'Warlock', 
		health: 365,
		mana: 400
	},
	location: {
		id: 'Gilneas', 
		description: 'mountain range',
		exits: {n: 'Azuremyst Ilse', s: 'Tirisfal Glades'},
		players: [
			{name: 'Last Man Standing'},
			{name: 'Firefox'}
		],
	},
	gold: 125,
	armor: [
		{name: 'wizards hat', bonus: 3, region: 'head'},
		{name: 'wizards robe', bonus: 5, region: 'body'},
		{name: 'ass kicking boots', bonus: 5, region: 'feet'}
	],
	weapons: [{qty: 1, name: 'tome of chaos', bonus: 4, hand: 'right'}],
	inventory: [
		{qty: 1, name: 'backpack', inventory: [
			{qty: 5, name: 'potion of healing'},
			{qty: 6, name: 'water of replenishment'}
		]}
	]
});


db.Character.insert({
name: 'Bloody Face',
	character: {
		intrinsics: {
		strength: 288,
		dexterity: 90,
		intelligence: 99,
		charisma: 22 },
		'class': 'Bzerker', 
		helath: 265,
	mana: 150
	},
	location: {
		id: 'Mulgore', 
		description: 'where the taurens roam',
	exits: {n:'maze-2', s:'maze-1', e:'maze-3'},
		players: [
		{ name:'Blody Face' },
		{ name:'Mike' }
		],
		
	},
	gold: 785,
	armor: [
		{name: "leather helmet", bonus: 3, region: 'head'},
		{name: 'steel chest plate', bonus: 5, region: 'body'},
		{name: "old boots", bonus: 0, region: 'feet'}
	],
	weapons: [{name: "sword of slaughtering dead babies", bonus: 5, hand: 'both'}],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:4, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:5, name: 'apple'} ]},
		 ]
});
db.Character.insert({
name: 'Dead Shot',
	character: {
		intrinsics: {
		strength: 26,
		dexterity: 90,
		intelligence: 85,
		charisma: 22 },
		'class': 'Marksman', 
		helath: 210,
	mana: 150
	},
	location: {
		id: 'Tirisfal Glades', 
		description: 'Icy Wasteland',
	exits: {n:'maze-2', s:'maze-1', e:'maze-3'},
		players: [
		{ name:'Dead Shot' },
		],
	},
	gold: 785,
	armor: [
		{name: "leather helmet", bonus: 3, region: 'head'},
		{name: 'leather chest', bonus: 4, region: 'body'},
		{name: "old boots", bonus: 2, region: 'feet'}
	],
		weapons: [{name: "sure strike bow", bonus:6, hand: 'left'},
			 {name: "poison dagger", bonus:5, hand: 'right'} ],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:4, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:1, name: 'steel tipped arrows', bonus: 2},
		{qty:5, name: 'apple'} ]},
		 ]
});
db.Character.insert({
	
	name: 'Brain Smasher',
	character: {
		intrinsics: {
		strength: 99,
		dexterity: 11,
		intelligence: 1,
		charisma: 8 },
		''class'': 'warrior', 
		helath: 315,
	mana: 90
	},
	location: {
		id: 'Eversong Woods', 
		description: 'Dark Forest',
	exits: {n:'maze-2', s:'maze-1', e:'maze-3'},
		players: [
		{name:'Brain Smasher' },
		{name:'That Guy' }
		],
		
	},
	gold: 895,
	armor: [
		{name: "wizard's hat", bonus: 2, region: 'head'},
		{name: "steel chest plate", bonus: 5, region: 'body'},
		{name: "ass kicking boots", bonus: 5, region: 'feet'}
	],
	weapons: [{name: 'noob masher', bonus: 6, hand: 'both'}],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:3, name: 'potion of healing'},
		{qty:5, name: 'c-rations'} ]}, ]
});	




db.Character.insert({
name: 'Fire Fox',
	character: {
		intrinsics: {
		strength: 190,
		dexterity: 105,
		intelligence: 84,
		charisma: 29 },
		'class': 'Bow Man', 
		helath: 195,
	mana: 189
	},
	location: {
		id: 'Gilneas', 
		description: 'Moutian range',
	exits: {n:'maze-2', s:'maze-1', e:'maze-3'},
		players: [
		{ name:'Fire Fox' },
		{ name:'Last Man Standing' }
		],
		
	},
	gold: 785,
	armor: [
		{name: "leather helmet", bonus: 3, region: 'head'},
		{name: "leather chest", bonus: 5, region: 'body'},
		{name: "old boots", bonus: 0, region: 'feet'}
	],
	weapons: [{name: "sure strike bow", bonus: 6, hand: 'both'}],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:4, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:30, name: 'sure strike bow'},
		{qty:5, name: 'apple'} ]},
		
		 ]
});


db.Character.insert({
name: 'Skull Crusher',
	character: {
		intrinsics: {
		strength: 850,
		dexterity: 88,
		intelligence: 62,
		charisma: 29 },
		'class': 'Warrior', 
		helath: 450,
	mana: 48
	},
	location: {
		id: 'Teldrassil', 
		description: 'The Battlegrounds',
	exits: {n:'maze-2', s:'maze-1', e:'maze-3'},
		players: [
		{ name:'Skull Crusher' },
		{ name:'Goku' }
		],
		
	},
	gold: 895,
	armor: [
		{name: 'iron helmet', bonus: 2, region: 'head'},
		{name: 'steel chest plate', bonus: 5, region: 'body'},
		{name: 'ass kicking boots', bonus: 5, region: 'feet'}
	],
	weapons: [{qty: 1, name: 'noob masher', bonus: 6, hand: 'both'}],
	inventory: [
		{qty:1, name: 'backpack', inventory: [
		{qty:4, name: 'potion of healing'},
		{qty:1, name: 'scroll of magic mapping'},
		{qty:30, name: 'sure strike bow'},
		{qty:5, name: 'apple'} ]}
		]
});


Billy Badass, Goku, That Guy, Dead Shot