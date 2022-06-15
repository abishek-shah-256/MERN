import mongoose from 'mongoose';

const {Schema} = mongoose;



const addressSchema = new Schema({
    address_state:{
        type:String,
        required:true, 
    },
    address_city:{
        type:String,
        required:true,
    },
    weather:{
       type:Number,
       required:true,
    }
  });

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    address:addressSchema

    
},
{
    timestamps:true
})
export default mongoose.model("users",userSchema)