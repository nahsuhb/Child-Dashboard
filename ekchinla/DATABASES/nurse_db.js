var mongoose=require('mongoose')
var nurse_database=new mongoose.Schema({
	name:String,
	password:{
		type:String,
		required:true
}
})
var nurse=mongoose.model('Nurse',nurse_database);

