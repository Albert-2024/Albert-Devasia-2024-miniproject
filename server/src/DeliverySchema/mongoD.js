const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Ecommerce')

.then(()=> console.log('Connected to MongoDB'))

.catch((err) => console.log('error'));

const DeliveryRegSchema = new mongoose.Schema({
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

const collectionDelivery =  new mongoose.model('collectiondelivery',DeliveryRegSchema);

module.exports = collectionDelivery;
