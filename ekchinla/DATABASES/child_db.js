var mongoose=require('mongoose');
var child_database=new mongoose.Schema(
{
	mcts_id_child:{
		type:Number,
		unique:true,
		required:true
	},

	child_name:String,
	sex:String,
	mothers_name:String,
	mcts_id_mother:
	{
		type:Number,
		unique:true,
		required:true
	},
	address:String,
	birth_weight:Number,
	date_of_birth:Date,
	place_of_birth:String,
	religion:String,
	caste:String,
	vaccines:{String:Date},
	fully_immuinzed:Boolean
})
module.exports=mongoose.model('Child',child_database);