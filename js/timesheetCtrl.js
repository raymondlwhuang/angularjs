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
app.controller("timesheetCtrl", function($scope) 
{
	var d = new Date();
	$scope.weekdaylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
//	$scope.weekdaylist = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
//	$scope.monthlist = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
	$scope.monthlist = [1,2,3,4,5,6,7,8,9,10,11,12],
	$scope.year = d.getFullYear(), 
	$scope.yearRange = [$scope.year-1,$scope.year,$scope.year+1], 
//	$scope.month=$scope.monthlist[d.getMonth()],
	$scope.month=d.getMonth()+1,
	$scope.day=d.getDate(),
	$scope.weekday = $scope.weekdaylist[d.getDay()],
	
	$scope.filterEndDate=d.getTime(),
	$scope.filterEndYear=d.getFullYear(),
	$scope.filterEndMonth=d.getMonth()+1,
	$scope.filterEndDay=d.getDate(),
	d= new Date($scope.year+'/'+$scope.month+'/'+$scope.day),
	d.setDate(d.getDate()-13),
	$scope.filterYear = d.getFullYear(), 
	$scope.filterMonth=d.getMonth()+1,
	$scope.filterDay=d.getDate(), 
	$scope.filterStartDate=d.getTime(),
	$scope.start=9,
	$scope.startMin="00",
	$scope.end=6,
	$scope.endMin="00",
	$scope.am=0,
	$scope.pm=12,
	$scope.records=[],
	$scope.hours=8,
	$scope.totalHours=0,
	$scope.dateChanged=function(){
		d= new Date($scope.year+'/'+$scope.month+'/'+$scope.day);
		$scope.weekday = $scope.weekdaylist[d.getDay()];
	},
	$scope.byRange = function (fieldName, minValue, maxValue) {
	  if (minValue === undefined) minValue = Number.MIN_VALUE;
	  if (maxValue === undefined) maxValue = Number.MAX_VALUE;
		
	  return function predicateFunc(item) {
		return minValue <= item[fieldName] && item[fieldName] <= maxValue;
	  };
	},	
	$scope.filterChanged=function(){
		d= new Date($scope.filterYear+'/'+$scope.filterMonth+'/'+$scope.filterDay),
		$scope.today=d.getTime(),
		$scope.filterStartDate=d.getTime(),
		d.setDate(d.getDate() + 13),
		$scope.filterEndDate=d.getTime(),
		$scope.filterEndYear=d.getFullYear();
		$scope.filterEndMonth=d.getMonth()+1;
		$scope.filterEndDay=d.getDate();
		$scope.getTotalHours();
	},
	$scope.endDateChanged=function(){
		d= new Date($scope.filterEndYear+'/'+$scope.filterEndMonth+'/'+$scope.filterEndDay),
		$scope.filterEndDate=d.getTime();
		$scope.getTotalHours();
	},
	$scope.newPage=function(dirction){
		if(dirction==1) {
			d= new Date($scope.filterEndDate);
			d.setDate(d.getDate() + 1),
			$scope.filterStartDate=d.getTime(),
			$scope.filterYear=d.getFullYear(),
			$scope.filterMonth=d.getMonth()+1,
			$scope.filterDay=d.getDate(),
			d.setDate(d.getDate() + 13),
			$scope.filterEndDate=d.getTime(),
			$scope.filterEndYear=d.getFullYear(),
			$scope.filterEndMonth=d.getMonth()+1,
			$scope.filterEndDay=d.getDate();
		}
		else {
			d= new Date($scope.filterStartDate);
			d.setDate(d.getDate() - 1),
			$scope.filterEndDate=d.getTime(),
			$scope.filterEndYear=d.getFullYear(),
			$scope.filterEndMonth=d.getMonth()+1,
			$scope.filterEndDay=d.getDate(),
			d.setDate(d.getDate() - 13),
			$scope.filterStartDate=d.getTime(),
			$scope.filterYear=d.getFullYear(),
			$scope.filterMonth=d.getMonth()+1,
			$scope.filterDay=d.getDate();
		}
		$scope.getTotalHours();
	},
	$scope.getHours=function(){
		if($scope.start==12) $scope.start=0;
		if($scope.end==12) $scope.end=0;
		$scope.hours=parseFloat($scope.end) + parseFloat($scope.pm) + (parseFloat($scope.endMin)/60)-(parseFloat($scope.start)+parseFloat($scope.am)+(parseFloat($scope.startMin)/60));
		if($scope.hours>5) $scope.hours=$scope.hours-0.5;
	},
	$scope.getTotalHours=function(){
		$scope.totalHours=0;
		for(x in $scope.records){
			if($scope.records[x].Date>=$scope.filterStartDate && $scope.records[x].Date<=$scope.filterEndDate) {
				if( $scope.Start!='' && $scope.records[x].End!='') {
					$scope.totalHours+=$scope.records[x].Hours;
				}
			}
			if($scope.records[x].Year==$scope.filterEndYear && $scope.records[x].Month==$scope.filterEndMonth && $scope.records[x].Day==$scope.filterEndDay) doTotal=false;
		}
	},
	$scope.holiday=function(){
		d= new Date($scope.year+'/'+$scope.month+'/'+$scope.day);
		var newRecord=
			{
				Weekday:$scope.weekday,
				Date:d.getTime(),
				Start:'',
				End:'',
				Hours:'Holiday',
			};

		$scope.records.push(newRecord);
		localStorage.setItem("records",angular.toJson($scope.records));
		d.setDate(d.getDate()+1);
		$scope.year = d.getFullYear(), 
		$scope.month=d.getMonth()+1,
		$scope.day=d.getDate(),
		$scope.dateChanged();
	
	},
	$scope.done=function(){
		var ampm = new Array();
		ampm[0] = "AM",
		ampm[12] = "PM",
		d= new Date(),
		year = d.getFullYear(), 
		month=d.getMonth()+1,
		day=d.getDate(),
		$scope.today=d.getTime(),
		d= new Date(year+'/'+month+'/'+day),
		$scope.filterEndDate=d.getTime(),
		$scope.filterEndYear=d.getFullYear(),
		$scope.filterEndMonth=d.getMonth()+1,
		$scope.filterEndDay=d.getDate(),
		d.setDate(d.getDate()-13),
		$scope.filterYear = d.getFullYear(), 
		$scope.filterMonth=d.getMonth()+1,
		$scope.filterDay=d.getDate(), 
		$scope.filterStartDate=d.getTime(),
		
		d= new Date($scope.year+'/'+$scope.month+'/'+$scope.day);
		if(d.getTime() > $scope.today) { alert('日期还未到,不能使用！');return;}
		var newRecord=
			{
				Weekday:$scope.weekday,
				Date:d.getTime(),
				Start:$scope.start+':'+$scope.startMin+ampm[$scope.am],
				End:$scope.end+':'+$scope.endMin+ampm[$scope.pm],
				Hours:$scope.hours,
			};

		$scope.records.push(newRecord);
		//localStorage.setItem("records",JSON.stringify($scope.records));
		localStorage.setItem("records",angular.toJson($scope.records));
		$scope.getTotalHours();
		d.setDate(d.getDate()+1);
		$scope.year = d.getFullYear(), 
		$scope.month=d.getMonth()+1,
		$scope.day=d.getDate(),
		$scope.dateChanged();
	},
	$scope.remove=function(date) {
		for(x in $scope.records) {
			if($scope.records[x].Date==date) {
				$scope.records.splice(x, 1);
			}
		}
		localStorage.setItem("records",angular.toJson($scope.records));
		$scope.getTotalHours();
	}
	$scope.init=function(){
		//localStorage.removeItem("records");
		$scope.getHours();
		if(localStorage.getItem('records')) {
			$scope.records=JSON.parse(localStorage.getItem('records'));
		}
		$scope.getTotalHours();
	};
	$scope.init();
});