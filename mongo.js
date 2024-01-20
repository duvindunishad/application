const mongoose = require('mongoose');
mongoose.connect("ENTER YOUR MONGODB CONNECTION STRING")
.then(()=>{
    console.log("mongodb connected successfully");
})
.catch(()=>{
    console.log("connection failed");
})

const newSchema=new mongoose.Schema({
    name:{
        type:"string",require:true
    },
    email:{type:"string",require:true},
    password:{type:"string",require:true}
})

const collection = mongoose.model("Collection",newSchema);
module.exports=collection;
