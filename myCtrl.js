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
app.controller("myCtrl", function($scope) {
    $scope.items=[
	{name:'Spender',desc:[{slug:'Me',val:'Me'},{slug:'Others',val:'Others'}]},
	{name:'Payment Type',desc:[{slug:'Cash',val:'Cash'},{slug:'VISA',val:'VISA'},{slug:'MarsterCard',val:'MarsterCard'},{slug:'Cheque',val:'Cheque'},{slug:'Others',val:'Others'}]},
	{name:'Pay From',desc:[{slug:'Cash on hand(me)',val:'Cash on hand(me)'},{slug:'Others',val:'Others'}]},
	{name:'Category',desc:[{slug:'Home',val:'Home'},{slug:'Auto',val:'Auto'},{slug:'Utilities',val:'Utilities'},{slug:'Personal',val:'Personal'},{slug:'Activities',val:'Activities'},{slug:'Food',val:'Food'},{slug:'Kids',val:'Kids'},{slug:'Income',val:'Income'},{slug:'Others',val:'Others'}]},
	{name:'Description',desc:[{slug:'Rent/Mortgage',val:'Home'},{slug:'Insurance',val:'Home'},{slug:'Maintenance',val:'Home'},{slug:'Property taxes',val:'Home'},{slug:'Others',val:'Home'},{slug:'Furniture',val:'Home'},
	{slug:'Payment',val:'Auto'},{slug:'Fuel',val:'Auto'},{slug:'Insurance',val:'Auto'},{slug:'Maintenance',val:'Auto'},{slug:'Registration',val:'Auto'},{slug:'Parking',val:'Auto'},{slug:'Toll Fee',val:'Auto'},{slug:'Bus/Taxi',val:'Auto'},{slug:'Others',val:'Auto'},
	{slug:'Electric/Water',val:'Utilities'},{slug:'Gas',val:'Utilities'},{slug:'Phone',val:'Utilities'},{slug:'Internet',val:'Utilities'},{slug:'Others',val:'Utilities'},
	{slug:'Clothing',val:'Personal'},{slug:'Hair care',val:'Personal'},{slug:'Skin care',val:'Personal'},{slug:'Electronic',val:'Personal'},{slug:'Others',val:'Personal'},
	{slug:'Membership',val:'Activities'},{slug:'Vacation',val:'Activities'},{slug:'Charitable',val:'Activities'},{slug:'Entertainment',val:'Activities'},{slug:'Gifts',val:'Activities'},{slug:'Others',val:'Activities'},
	{slug:'Grocery',val:'Food'},{slug:'Dinning',val:'Food'},{slug:'Others',val:'Food'},
	{slug:'School Expenses',val:'Kids'},{slug:'Tuition',val:'Kids'},{slug:'Books',val:'Kids'},{slug:'Child care',val:'Kids'},{slug:'Gift',val:'Kids'},{slug:'Others',val:'Kids'},
	{slug:'Salary',val:'Income'},{slug:'Wage',val:'Income'},{slug:'Bonus',val:'Income'},{slug:'Expense Reimbursemments',val:'Income'},{slug:'Rental',val:'Income'},
	{slug:'Interest earned',val:'Income'},{slug:'Dividends/Capital Gains',val:'Income'},{slug:'Lottery',val:'Income'},{slug:'Tax return',val:'Income'},{slug:'Refund',val:'Income'},{slug:'Others',val:'Income'}
	]},
	{name:'Pay Status',desc:[{slug:'Pay now',val:0},{slug:'Daily',val:1},{slug:'Weekly',val:7},{slug:'Bi-Weekly',val:14},{slug:'Monthly',val:30},{slug:'Quartery',val:91},{slug:'Semi-anually',val:182},{slug:'Yearly',val:365}]},
	
	];

});