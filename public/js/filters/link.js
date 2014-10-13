angular.module('myApp.filters', []).
	filter('link', function(){
		return function(value){
			return "#" + value;
		}
	})