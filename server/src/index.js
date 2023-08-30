const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser')
const collection = require('./mongo')
const cors = require("cors")
// app.use(express.json());
// app.set('view engine','ejs')
app.use(cors())
// app.set('view engine', 'html');

// app.set('views',(path.join(__dirname,'../views')))
// app.use(express.urlencoded({extendwhen i push a commit my data has been lost in remote server mainly myed:false}))

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

// app.get('/',(req,res)=>{
//     res.render('index')
//     })
app.post('/add',async(req,res)=>{
    try{
        const data = req.body
        console.log(data)
        const insert = await collection.create(data);
        res.status(200).json({message:"Data inserted successfully"})
    }catch(error) {
        console.log(error)
        res.status(500).json({error:'An error occured'})
    }
})
app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
  });
    

app.listen(5000,()=>{
    console.log('Server running on port 5000')
}   )   