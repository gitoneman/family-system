angular.module('myApp.directives', []).
	directive('chart', function () {
	    return function(scope, elm, attrs) {
	    	var myChart = "";

			attrs.$observe('chart', function(option) {
				option = JSON.parse(option)
				myChart = echarts.init(elm[0]);
			    
			    myChart.setOption(option);

			    $(window).on("resize",function(){
			    	myChart.resize();
			    })
			    
			});
	    }
	})	