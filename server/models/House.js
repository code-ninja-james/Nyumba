const moongoose=require('mongoose');

const HouseSchema=new moongoose.Schema({
    title:{type:String,required:true},
    address:{type:String,required:true},
    homeType:String,
    description:String,
    price:{type:Number,required:true},
    image:String,
    yearBuilt:Number
})

 module.exports=moongoose.model('House',HouseSchema);
