import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import routes from "./routes/soccerRoutes.js"
import AlgoService from "./services/algo.js"

const app = express();
const PORT = 4000;

mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/soccerDB")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use(cors())

routes(app)

app.get("/", (req, res) => {

    AlgoService.bubbleSort([4,9,3,7,1]);

    res.send(`App is running on port ${PORT}`)
})

app.listen(PORT, () => 
    console.log("Server is running on port: "+ PORT)
)