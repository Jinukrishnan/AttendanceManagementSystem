import mongoose from "mongoose";

export default async function Connection(){
   const URL=process.env.DB_URL+process.env.DB_NAME;
   const db=await mongoose.connect(URL);
   console.log("Database Connected");
   return db;
}