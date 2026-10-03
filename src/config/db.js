const mongose = require("mongose");
const dotenv = require ("dotenv")
dotenv.config

exports.connectDatabase = async () =>{
    try{
        await mongoose
        .connect(env.MONGOOSE_URL)
        .them (()=> { console.log("database connected successfylly")

        })
        .catcch(()=>{console.log ("Database connection failed");

        })

    }catch(error){
        console.error("Error:",error)
    }
}