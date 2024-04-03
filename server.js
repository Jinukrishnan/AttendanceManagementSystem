import express from 'express';
import env from 'dotenv';
import Connection from './Connection.js';
import router from './router.js';
env.config();
const app=express();
app.use(express.json())
app.use('/api',router)
Connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server Started");
    })
}).catch((error)=>{
console.log(error);
})
