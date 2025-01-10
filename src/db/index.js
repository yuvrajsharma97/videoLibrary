import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDatabase = async () => {
    try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    //   console.log(connectionInstance);
      
      console.log(`\n MongoDB connected: ${connectionInstance.connection.host}`);
      
    } catch (error) {
        console.log("Error: ", error);
        process.exit(1);
    }
}

export default connectDatabase;