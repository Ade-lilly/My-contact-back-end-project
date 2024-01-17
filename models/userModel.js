const mongoose = require("mongoose");

const userSchemer = mongoose.Schema({
    username:{
        type:String,
        required: [true, "Please add the user name"],
    },
    email:{
        type:String,
        required:[true, "Please add your email address"],
        unique:[true, "Email address already registered"]
    },
    password:{
        type:String,
        required:[true, "Pleaseenter your password"]
    },
},
{
    timestamp:true,
});
module.exports = mongoose.model("user", userSchemer)