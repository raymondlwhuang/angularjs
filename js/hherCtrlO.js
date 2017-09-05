app.directive('ngIf', function() {
    return {
        link: function(scope, element, attrs) {
            if(scope.$eval(attrs.ngIf)) {
                // remove '<div ng-if...></div>'
                element.replaceWith(element.children())
            } else {
                element.replaceWith(' ')
            }
        }
    }
});
app.filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
});
app.controller("hherCtrl", function($scope) 
{
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
			name:'Pay With',
			grounp:1,
			desc:['Cash','VISA','MarsterCard','AMX','Cheque','Capital One','Chase','Citi','Discover','First PREMIER','Others']
		},
		{
			name:'From Acct',
			grounp:1,
			desc:['Cash on hand','Cash on hand(O)','Royal Bank','Others']
		},
		{
			name:'To Acct',
			grounp:5,
			desc:['Cash on hand','Cash on hand(O)','Royal Bank','Others']
		},
		{
			name: 'Pay Status',
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
	$scope.title=[],
	$scope.summary=[],
	$scope.digits=[0,1,2,3,4,5,6,7,8,9],
	$scope.dayRange=[100,10,1],
	$scope.range=[10000,1000,100,10,1],
	$scope.cents=[0.1,0.01]
	$scope.type = 'Income',
	$scope.add=function(itemName){
		$scope.newItem='',
		$scope.itemName=itemName,
		$scope.isDialog=true,		
		$scope.isPayStatusSelected = false,
		$scope.isPayStatusSelected=false;
		$scope.isDescriptionSelected=false;
		$scope.isPayStatusSelected=false;

		if(itemName=='Category' || itemName=='Description')	$scope.isDescriptionSelected=true;
		if(itemName=='Pay Status') $scope.isPayStatusSelected=true;
	},
	$scope.save=function(){
		if($scope.newItem=='') {
			document.getElementById('msg').innerHTML='Please input an item!';
			return;
		}
		for(x in $scope.items){
			if($scope.items[x].name==$scope.itemName) {
				$scope.isDialog=false;
				switch($scope.itemName) {
					case "Category":
						$scope.items[x].desc.push({name:$scope.newItem,type:$scope.expenseType});
						break;
					case "Description":
						$scope.items[x].desc.push({id:$scope.items[x].desc.length,detail:$scope.newItem,type:$scope.expenseType});
						break;
					case "Pay Status":
						$scope.items[x].desc.push({name:$scope.newItem,val:$scope.days});
						break;
					default:
						$scope.items[x].desc.push($scope.newItem);
				}
				localStorage.setItem("items",JSON.stringify($scope.items));
			}
		}

	},
	$scope.remove=function(itemName,$event) {
		var e=document.getElementById(itemName);
		var id = parseInt(e.options[e.selectedIndex].id.trim('desc').substring(4));
		//delete $scope.items.myObj.test.key1;
		for(x in $scope.items){
			if($scope.items[x].name==itemName) {
				var answer = confirm("Are you sure?");
				if(answer) {
					if('Description'==itemName) {
						$scope.items[x].desc.splice(id, 1);
					}
					else {
						$scope.items[x].desc.splice(e.selectedIndex, 1);
					}
						//delete $scope.items[x].desc[e.selectedIndex];
					localStorage.setItem("items",JSON.stringify($scope.items));
				}
			}
		}

	},
	$scope.change=function(){
		var e = document.getElementById("Category");
		$scope.type = e.options[e.selectedIndex].value;
		if($scope.type=='Transfer')
			document.getElementById('containerToAcct').style.display='block';
		else
			document.getElementById('containerToAcct').style.display='none';
	},
	$scope.getAmount=function() {
		a0=document.getElementById('amt0');
		amount = parseFloat(a0.options[a0.selectedIndex].value);
		a1=document.getElementById('amt1');
		amount += parseFloat(a1.options[a1.selectedIndex].value);
		a2=document.getElementById('amt2');
		amount += parseFloat(a2.options[a2.selectedIndex].value);
		a3=document.getElementById('amt3');
		amount += parseFloat(a3.options[a3.selectedIndex].value);
		a4=document.getElementById('amt4');
		amount += parseFloat(a4.options[a4.selectedIndex].value);
		c0=document.getElementById('cent0');
		amount += parseFloat(c0.options[c0.selectedIndex].value);
		c1=document.getElementById('cent1');
		amount += parseFloat(c1.options[c1.selectedIndex].value);
		$scope.amount=amount.toFixed(2);
	}
	$scope.getDays=function() {
		d0=document.getElementById('days0');
		days = parseInt(d0.options[d0.selectedIndex].value);
		d1=document.getElementById('days1');
		days += parseInt(d1.options[d1.selectedIndex].value);
		d2=document.getElementById('days2');
		days += parseInt(d2.options[d2.selectedIndex].value);
		$scope.days=days;
	},
	$scope.done=function(){
		var d = new Date(), year = d.getFullYear(), month=d.getMonth(),day=d.getDate(),newObj={};
		var temp={},i=0,t=0,e=0;
		temp['Income']=0,temp['Expense']=0,temp['Transfer']=0;

		for(x in $scope.items) {
			if($scope.items[x].name=='Category') {
				for(y in $scope.items[x].desc) {
					if($scope.items[x].desc[y].type =='Income') {
							temp[$scope.items[x].desc[y].name][i]=0;
							alert($scope.items[x].desc[y].name);
							i++;
					}
					else if($scope.items[x].desc[y].type =='Transfer') {
							temp[$scope.items[x].desc[y].name][t]=0;
							t++;
					}
					else {
							temp[$scope.items[x].desc[y].name][e]=0;
							e++;
					}
					//newSummary[0][$scope.items[x].desc[y]]=0;
				}
			}
		}

		//if($scope.yearTotal[year]) $scope.yearTotal[year] = $scope.amount;
	//	else  $scope.yearTotal[year] += $scope.amount;
		//alert($scope.yearTotal[year]);
	/*	for(x in $scope.items) {
			if($scope.items[x].name=='Category') {
				for(y in $scope.items[x].desc) {
					newSummary[0][$scope.items[x].desc[y]]=0;
				}
			}
			
		//$scope.title.push($scope.items[x].name);

		
		}
		for(x in newSummary[0]) {
		  alert(x +'='+newSummary[0][x]);
		}*/
		//alert($scope.title[0]);
	},
	$scope.init=function(){
		//localStorage.removeItem("items");
		var d = new Date(), year = d.getFullYear(), month=d.getMonth(),day=d.getDate();
		var newSummary=[
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
		}];
		var tempIncome=[],tempExpense=[],tempTransfer=[];
		for(x in $scope.items) {
			if($scope.items[x].name=='Category') {
				for(y in $scope.items[x].desc) {
					if($scope.items[x].desc[y].type =='Income') {
						tempIncome[$scope.items[x].desc[y].name]=0;
					}
					else if($scope.items[x].desc[y].type =='Transfer') {
						tempTransfer[$scope.items[x].desc[y].name]=0;
					}
					else {
						tempExpense[$scope.items[x].desc[y].name]=0;
					}
				}
			}
		};
		if(localStorage.getItem('summary')) $scope.summary=JSON.parse(localStorage.getItem('summary'));
		else {
			for(x in newSummary) {
				for(y in newSummary[x].Month){
					for(z in newSummary[x].Month[y]){
						newSummary[x].Month[y].Expense.push(tempExpense);
						newSummary[x].Month[y].Income.push(tempIncome);
						newSummary[x].Month[y].Transfer.push(tempTransfer);
					}
				}
			}
			$scope.summary=newSummary;
			localStorage.setItem("summary",JSON.stringify($scope.summary));
		};
		if(localStorage.getItem('items')) $scope.items=JSON.parse(localStorage.getItem('items'));
		$scope.isMobile=mobilecheck();
	};
	$scope.init();
});