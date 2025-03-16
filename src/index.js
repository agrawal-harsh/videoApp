import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path : "../.env"
})


connectDB()
.then(()=>{
    const port = process.env.PORT || 5000;
    app.listen(port , ()=>{
        console.log(`Server is running at port : ${port}`);
    })
})
.catch((error) => {
    console.log("Mongodb connection failed");
    process.exit(1);
})






/*
const app = express();

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log("ERROR: ",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error(error);
        throw error;
    }
})()
    */