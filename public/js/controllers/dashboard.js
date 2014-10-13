angular.module('myApp.controllers', []).
	controller('dashboardCtrl', function($scope){
		var vm = $scope.vm = {};
		vm.heads = ["title","toolbox","tooltip","lengend","grid","xAxis","yAxis","series"];

		//递归格式化配置
		function format(source,target){
			for (var i = source.length - 1; i >= 0; i--) {
				var obj = source[i];
				if(obj.valueType && obj.valueType == 'json'){
					var tar = target[obj.name] = {};
					format(obj.value,tar);
				}else{
					obj.value = obj.value == "true"?true:(obj.value == "false"?false:obj.value)
					target[obj.name] = obj.value;
				}
			};
			return target;
		}


		$scope.showOption = function(){
			var option = {};

			for(var i in vm.option){
				var arr = vm.option[i];
				option[i] = {};
				format(arr,option[i])
			}

			$scope.chartOption.title = option.title;
			option.toolbox.feature = {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }

	        $scope.chartOption.toolbox = option.toolbox;
	        $scope.chartOption.tooltip = option.tooltip;
		}


		$scope.chartOption = {
			title : {
		        text: '未来一周气温变化',
		        subtext: '纯属虚构'
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['最高气温','最低气温']
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {show: true, type: ['line', 'bar']},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : ['周一','周二','周三','周四','周五','周六','周日']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel : {
		                formatter: '{value} °C'
		            }
		        }
		    ],
		    series : [
		        {
		            name:'最高气温',
		            type:'line',
		            data:[11, 11, 15, 13, 12, 13, 10],
		            markPoint : {
		                data : [
		                    {type : 'max', name: '最大值'},
		                    {type : 'min', name: '最小值'}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name: '平均值'}
		                ]
		            }
		        },
		        {
		            name:'最低气温',
		            type:'line',
		            data:[1, -2, 2, 5, 3, 2, 0],
		            markPoint : {
		                data : [
		                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name : '平均值'}
		                ]
		            }
		        }
		    ]
		}

		vm.option = {
			title:[
				{
					type:"input",
					name:"text",
					value:"11"
				},
				{
					type:"input",
					name:"subtext",
					value:""
				},
				{
					type:"input",
					name:"link",
					value:""
				},
				{
					type:"input",
					name:"target",
					value:""
				},
				{
					type:"input",
					name:"sublink",
					value:""
				},
				{
					type:"input",
					name:"subtarget",
					value:""
				},
				{
					type:"input",
					name:"x",
					value:"left"
				},
				{
					type:"input",
					name:"y",
					value:"top"
				},
				{
					type:"input",
					name:"textAlign",
					value:"",
					option:[]
				},
				{
					type:"input",
					name:"backgroundColor",
					value:"#fff"
				},
				{
					type:"input",
					name:"borderColor",
					value:""
				},
				{
					type:"input",
					name:"borderWidth",
					value:0
				},
				{
					type:"input",
					name:"padding",
					value:5
				},
				{
					type:"input",
					name:"itemGap",
					value:10
				},
				{
					type:"input",
					name:"textStyle",
					value:[
						{
							type:"input",
							name:"fontSize",
							value:18
						},
						{
							type:"input",
							name:"fontWeight",
							value:'bolder'
						},
						{
							type:"input",
							name:"color",
							value:"#333"
						},
					],
					valueType:"json"
				},
				{
					type:"input",
					name:"subtextStyle",
					value:[
						{
							type:"input",
							name:"fontSize",
							value:14
						},
						{
							type:"input",
							name:"fontWeight",
							value:'normal'
						},
						{
							type:"input",
							name:"color",
							value:"#333"
						},
					],
					valueType:"json"
				},
				

			],
			toolbox:[
				{
					type:"input",
					name:"show",
					value:true
				},
				{
					type:"input",
					name:"orient",
					value:"horizontal"
				},
				{
					type:"input",
					name:"x",
					value:"right"
				},
				{
					type:"input",
					name:"y",
					value:"top"
				},
				{
					type:"input",
					name:"backgroundColor",
					value:"#fff"
				},
				{
					type:"input",
					name:"borderWidth",
					value:0
				},
				{
					type:"input",
					name:"borderColor",
					value:""
				},
				{
					type:"input",
					name:"padding",
					value:5
				},
				{
					type:"input",
					name:"itemGap",
					value:10
				},
				{
					type:"input",
					name:"itemSize",
					value:16
				},
				// // {
				// // 	type:"input",
				// // 	name:"color",
				// // 	value:""
				// // },
				// {
				// 	type:"input",
				// 	name:"showTitle",
				// 	value:""
				// },
			],
			tooltip:[
				{
					type:"input",
					name:"show",
					value:true
				},
				{
					type:"input",
					name:"showContent",
					value:true
				},
				{
					type:"input",
					name:"trigger",
					value:"axis"
				},
				{
					type:"input",
					name:"formatter",
					value:"{b} < br/>{a0} : {c0}< br/>{a1} : {c1}"
				},
				{
					type:"input",
					name:"islandFormatter",
					value:''
				},
				{
					type:"input",
					name:"showDelay",
					value:200
				},
				{
					type:"input",
					name:"hideDelay",
					value:100
				},
				{
					type:"input",
					name:"transitionDuration",
					value:0.4
				},
				{
					type:"input",
					name:"backgroundColor",
					value:'rgba(0,0,0,0.7)'
				},
				{
					type:"input",
					name:"borderColor",
					value:"#333"
				},
				{
					type:"input",
					name:"borderRadius",
					value:4
				},
				{
					type:"input",
					name:"borderWidth",
					value:0
				},
				{
					type:"input",
					name:"padding",
					value:5
				},
				// {
				// 	type:"input",
				// 	name:"borderColor",
				// 	value:16
				// },
				// {
				// 	type:"input",
				// 	name:"borderColor",
				// 	value:16
				// }
			]
		}
		
	})