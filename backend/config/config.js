const mongoose =require('mongoose');

const connectDB=async()=>{
    try{
        const response =await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB Connected');
    }catch(error){
        console.error(error.message);
    }
}

module.exports=connectDB;