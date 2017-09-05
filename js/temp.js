		var newSummary=
		[
		{
			Year:year,
			Expense:0,
			Income:0,
			Transfer:0,
			Month:[
			{Expense:[{total:0}], Income:[{total:0}], Transfer:[{total:0}]},
			{Expense:[{total:0}], Income:[{total:0}], Transfer:[{total:0}]},
			{Expense:[{total:0}], Income:[{total:0}], Transfer:[{total:0}]},
			{Expense:[{total:0}], Income:[{total:0}], Transfer:[{total:0}]},
			{Expense:[{total:0}], Income:[{total:0}], Transfer:[{total:0}]},
			{Expense:[{total:0}], Income:[{total:0}], Transfer:[{total:0}]},
			{Expense:[{total:0}], Income:[{total:0}], Transfer:[{total:0}]},
			{Expense:[{total:0}], Income:[{total:0}], Transfer:[{total:0}]},
			{Expense:[{total:0}], Income:[{total:0}], Transfer:[{total:0}]},
			{Expense:[{total:0}], Income:[{total:0}], Transfer:[{total:0}]},
			{Expense:[{total:0}], Income:[{total:0}], Transfer:[{total:0}]},
			{Expense:[{total:0}], Income:[{total:0}], Transfer:[{total:0}]}
			]
		}
		];
		var newRecord=[
		{
			Year:year,
			Month:month,
			Day:day
		
		}
		];
	$scope.items=
	[
		{
			name:'Spender',
			grounp:1,
			desc:['Me','Partner']
		},
		{
			name:'Category',
			grounp:2,
			desc:[
			{name:'Income',type:'Income'},
			{name:'Transfer',type:'Transfer'},
			{name:'Home',type:'Expense'},
			{name:'Auto',type:'Expense'},
			{name:'Utilities',type:'Expense'},
			{name:'Personal',type:'Expense'},
			{name:'Activities',type:'Expense'},
			{name:'Food',type:'Expense'},
			{name:'Kids',type:'Expense'}
			]
		},
		{
			name:'Description',
			grounp:3,
			desc:
			[
				{id:1,detail:'Salary',type:'Income'},
				{id:2,detail:'Wage',type:'Income'},
				{id:3,detail:'Bonus',type:'Income'},
				{id:4,detail:'Expense Reimbursemments',type:'Income'},
				{id:5,detail:'Rental',type:'Income'},
				{id:6,detail:'Interest earned',type:'Income'},
				{id:7,detail:'Dividends/Capital Gains',type:'Income'},
				{id:8,detail:'Lottery',type:'Income'},
				{id:9,detail:'Tax return',type:'Income'},
				{id:10,detail:'Refund',type:'Income'},
				{id:11,detail:'Rental',type:'Income'},
				{id:12,detail:'Others',type:'Income'},
				{id:13,detail:'Transfer',type:'Transfer'},
				{id:14,detail:'Rent/Mortgage',type:'Home'},
				{id:15,detail:'Insurance',type:'Home'},
				{id:16,detail:'Maintenance',type:'Home'},
				{id:17,detail:'Furniture',type:'Home'},
				{id:18,detail:'Property taxes',type:'Home'},
				{id:19,detail:'Car Payment',type:'Auto'},
				{id:20,detail:'Fuel',type:'Auto'},
				{id:21,detail:'Insurance',type:'Auto'},
				{id:22,detail:'Maintenance',type:'Auto'},
				{id:23,detail:'Registration',type:'Auto'},
				{id:24,detail:'Parking',type:'Auto'},
				{id:25,detail:'Toll Fee',type:'Auto'},
				{id:26,detail:'Bus/Taxi',type:'Auto'},
				{id:27,detail:'Others',type:'Auto'},
				{id:28,detail:'Gas',type:'Utilities'},
				{id:29,detail:'Phone',type:'Utilities'},
				{id:30,detail:'Internet',type:'Utilities'},
				{id:31,detail:'TV',type:'Utilities'},
				{id:32,detail:'Electric/Water',type:'Utilities'},
				{id:33,detail:'Others',type:'Utilities'},
				{id:34,detail:'Hair care',type:'Personal'},
				{id:35,detail:'Skin care',type:'Personal'},
				{id:36,detail:'Entertainment product',type:'Personal'},
				{id:37,detail:'Clothings',type:'Personal'},
				{id:38,detail:'Others',type:'Personal'},
				{id:39,detail:'Membership',type:'Activities'},
				{id:40,detail:'Vacation',type:'Activities'},
				{id:41,detail:'Charitable',type:'Activities'},
				{id:42,detail:'Entertainment',type:'Activities'},
				{id:43,detail:'Gifts',type:'Activities'},
				{id:44,detail:'Others',type:'Activities'},
				{id:45,detail:'Grocery',type:'Food'},
				{id:46,detail:'Dinning',type:'Food'},
				{id:47,detail:'Others',type:'Food'},
				{id:48,detail:'Tuition',type:'Kids'},
				{id:49,detail:'Books',type:'Kids'},
				{id:50,detail:'Child care',type:'Kids'},
				{id:51,detail:'School Expense',type:'Kids'},
				{id:52,detail:'Others',type:'Kids'},
			]
		},
		{
			name:'Pay By',
			grounp:1,
			desc:['Cash','VISA','MarsterCard','AMX','Cheque','Capital One','Chase','Citi','Discover','First PREMIER','Others']
		},
		{
			name:'Account',
			grounp:1,
			desc:['Cash on hand','Cash on hand(O)','Royal Bank','Others']
		},
		{
			name:'To Account',
			grounp:5,
			desc:['Cash on hand','Cash on hand(O)','Royal Bank','Others']
		},
		{
			name: 'Status',
			grounp: 4,
			desc: 
			[
				{name:'Pay now',val:0},
				{name:'Daily',val:1},
				{name:'Weekly',val:7},
				{name:'Bi-Weekly',val:14},
				{name:'Monthly',val:30},
				{name:'Quartery',val:91},
				{name:'Semi-anually',val:182},
				{name:'Yearly',val:365}
			]
		}
	],