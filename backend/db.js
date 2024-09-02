import mongoose from "mongoose";

const dbconnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected...');
      } catch (err) {
        console.error(err.message);
       
      }
}
export default dbconnect