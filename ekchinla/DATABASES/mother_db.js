var mongoose=require('mongoose');
var mother_database=new mongoose.Schema(
{
	mcts_id:{
		type:Number,
		unique:true,
		required:true
	},

	name:String,
	mcts_id_child:
        [{type:Schema.Types.ObjectId,
        ref:'Child'}],
    
    husband_name:String,
    mobile_number:Number,
    age:Number,
    date_of_lmp:Date,
    date_of_registration:Date,
    pregnency_weeks_during_registration:Date,
    registered_within_time:Boolean,
	address:String,
    weight_at_delivery:Number,
    total_number_of_pregnancy:Number,
	date_of_birth:Date,
	place_of_birth:String,
	religion:String,
	caste:String
})

module.exports=mongoose.model('Mother',mother_database);