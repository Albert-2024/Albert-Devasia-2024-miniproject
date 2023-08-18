const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Ecommerce')

.then(()=> console.log('Connected to MongoDB'))

.catch((err) => console.log('error'));

const RegSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,

    },
    email: {
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true
    }
})

const collection = new mongoose.model('RegSchema',RegSchema);

module.exports = collection;