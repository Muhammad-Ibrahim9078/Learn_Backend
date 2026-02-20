import mongoose from "mongoose";


const connectedMongoDb = async()=>{
    try {
        const isConnected = await mongoose.connect(process.env.MONGODB_URL, {dbName: "IB_Dev"});

        isConnected && console.log("MongoDb Connencted to Db");
        
    } catch (error) {
         console.log("Something went wrong while MongoDb Connencted to Db");
    }
}


export default connectedMongoDb;