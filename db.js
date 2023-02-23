const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()
const mongoURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.dhjpmgq.mongodb.net/notebook?retryWrites=true&w=majority`
mongoose.set('strictQuery', true)
const connectMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongodb Successfully")
    })

}
module.exports = connectMongo
