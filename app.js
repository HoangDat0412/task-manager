const express = require("express");
const app = express();

const Root_Router = require("./routers");
const connectDB = require("./db/connect")
require('dotenv').config()



//routes 
// app.get("/",(req,res)=>{
//     res.send("Hello The World")
// })

app.use(express.static('./public'))
app.use(express.json())

app.use("/api/v1/",Root_Router)

const port = 4000;

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log(`Server is listening on http://localhost:${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()


