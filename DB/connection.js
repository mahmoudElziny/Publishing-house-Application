import mongoose from "mongoose";

export const connectionDB = async ()=> {
    try {
        await  mongoose.connect('mongodb://localhost:27017/PublishingHouse');
        console.log("connected to the database");
    } catch (error) {
        console.log("Error connecting to the databasee");
    }
}