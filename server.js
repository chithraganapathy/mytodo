const express = require('express')
const app = express()
const homeRoutes = require('./routes/home')
const bodyParser = require('body-parser')
const connectDB = require('./config/database')
const defaultPORT = 3000
require('dotenv').config({path: './config/.env'})
connectDB();

app.set('view engine', 'ejs') //which view engine to use , eventually react
app.use(express.static('public')) //hosts all of our static files// to pull data out of the request body ie.e. body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)

app.listen(defaultPORT || process.env.PORT, ()=>{
    console.log('Server is running...')
})
