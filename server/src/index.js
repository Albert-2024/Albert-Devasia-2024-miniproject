const express = require('express');
const app = express();
const path = require('path');
const collection = require('./mongo')

app.use(express.json());
app.set('view engine','ejs')
app.set('views',(path.join(__dirname,'../views')))
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.render('index')
    })

app.listen(5000,()=>{
    console.log('Server running on port 5000')
}   )