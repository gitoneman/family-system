/*
 * Serve JSON to our AngularJS client
 */
var mongoose = require("mongoose");
var express_mongoose = require("express-mongoose");
var model = require("./model");

mongoose.connect('mongodb://localhost/express-mongoose');

exports.list = function(req,res){
	model.find({},function(err,doc){
		res.json(doc);
	});
}
exports.insert = function(req,res){	
    model.insert({ 
        name : "make" 
    },function(){
    	res.send("data create");
    });
}
exports.update = function(req,res){	
    model.update({name:"make"},{name:"mike"},function(){
    	res.send("data updated");
    });
}
exports.delete = function(req,res){	
    model.delete({name:"mike"},function(){
    	res.send("data delete");
    });
}

exports.name = function (req, res) {
  res.json({
    name: 'Bob',
    rows: [

    	[
			{
				name:"chart1",
				type:"bar",
				legend: {
					data:['意向','预购','成交']
				},
				xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : ['周一','周二','周三','周四','周五','周六','周日']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
				series : [
			        {
			            name:'成交',
			            type:'line',
			            smooth:true,
			            itemStyle: {normal: {areaStyle: {type: 'default'}}},
			            data:[10, 12, 21, 54, 260, 830, 710]
			        },
			        {
			            name:'预购',
			            type:'line',
			            smooth:true,
			            itemStyle: {normal: {areaStyle: {type: 'default'}}},
			            data:[30, 182, 434, 791, 390, 30, 10]
			        },
			        {
			            name:'意向',
			            type:'line',
			            smooth:true,
			            itemStyle: {normal: {areaStyle: {type: 'default'}}},
			            data:[1320, 1132, 601, 234, 120, 90, 20]
			        }
			    ]
			},
			{
				name:"chart3",
				type:"bar",
				legend:{
		            data:['蒸发量','降水量']
		        },
		        xAxis : [
		            {
		                type : 'category',
		                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
		            }
		        ],
		        yAxis : [
		            {
		                type : 'value',
		                splitArea : {show : true}
		            }
		        ],
				series:[
		            {
		                name:'蒸发量',
		                type:'bar',
		                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
		            },
		            {
		                name:'降水量',
		                type:'bar',
		                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
		            }
		        ]
			}
    	],
    	[
    		
    		{
    			name:"chart2",
    			type:"bar",
    			legend:{
		            data:['蒸发量','降水量']
		        },
		        xAxis : [
		            {
		                type : 'category',
		                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
		            }
		        ],
		        yAxis : [
		            {
		                type : 'value',
		                splitArea : {show : true}
		            }
		        ],
    			series:[
		            {
		                name:'蒸发量',
		                type:'bar',
		                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
		            },
		            {
		                name:'降水量',
		                type:'bar',
		                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
		            }
		        ]
    		}

    	]
    	
    	
    ]
  });
};



