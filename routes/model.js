var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var _Chart = new Schema({
	name:String,
	type:String,
	legend:Object,
	xAxis:Array,
	yAxis:Array,
	series:Array
});
var ChartModel = mongoose.model("Chart",_Chart);

module.exports = {

	insert:function(obj,callback){
		var chart = new ChartModel(obj);
		chart.save(function(){
			callback();
		});
		
	},

	find:function(obj,callback){
		ChartModel.find(obj,function(err,doc){
			callback(err,doc);
		});
	},

	update:function(obj1,obj2,callback){
		ChartModel.update(obj1,obj2,function(){
			callback();
		});
	},

	delete:function(obj,callback){
		ChartModel.remove(obj,function(){
			callback();
		})
	}
};