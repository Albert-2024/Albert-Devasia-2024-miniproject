const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser')
const cors = require("cors")

app.use(cors())

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.get('/login',async(req,res)=> {
    try{
        const data = req.body
        console.log(data)
    }catch(error) {
        console.log(error)
        res.status(500).json({error:'An error occured'})
    }
})
app.get('/', (req, res) => {
    res.send('Welcome to the homepage');    
})

app.listen(5001,()=>{
   console.log('Server running on port 5001')
})