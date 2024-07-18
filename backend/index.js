import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import dataRoutes from "./routes/data.routes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', dataRoutes);

connectDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Server is listening on PORT : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Error : ", err)
})
