const mongoose = require ("mongoose")
const complaintSchema =  new mongoose.Schema({
    studentName :{
        type:String,
        required:[true,"studentname is required"],
     
    },
    email :{
        type:String,
        required:[true,"studentemail is required"],
    },
    title :{
        type:String,
        required:[true,"studenttitle is required"],
    },
  description :{
        type:String,
        required:[true,"studendescription is required"],
    },
    category :{
        type:String,
        enum:["open","infrastracture","IT","cleanliness","security","other"],
        default:"open"
        
    },
     priority :{
        type:String,
        enum:["low","medium","high"],
        default:"open"
        
    },
    location :{
        type:String,
        
    },
     status :{
        type:String,
        enum:["open","in progress","Resolved","Rejected","createdAt","uplotedat"],
        default:"open"
        
    },
    module.exports =mongoose.model("complaint",complaintschema)
})