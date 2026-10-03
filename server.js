const express =require("express")
const app = express()
const{env}=  require("./src/config/env")
const {connectDatabase} = require("./src/routes/complaintRoutes")
    const { config } = require("dotenv")
const { connectDatabase } = require("./src/config/db")

    // const connectDatabase =require("./src/routes/complaintRoutes")
        app.use(express.json())
    connectDatabase()
    // app.use("/complain, complainRoutes")
    app.listen(env.PORT,()=>{
        console.log("server is working",env.PORT);
    })
