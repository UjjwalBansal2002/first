

require('dotenv').config()

// import Express in your project
const express = require('express')

// Initialise and store express in app variable
const app = express()

// setting port
const port = 4000


// Creating methods of get/post/put etc.

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req,res)=>{
    res.send("ujjwal_bansal_20")
})

app.get('/login',(req , res)=>{
    res.send("<h1>Please login first</h1>")
})

app.get('/youtube',(req , res)=>{
    res.send("<h2>Welcome to youtube</h2>")
})



// listening our request by using listen() of express

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})