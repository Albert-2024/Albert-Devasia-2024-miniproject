const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');

const collectionSeller = require('../src/SellerSchema/mongoS')
const collectionUser = require('../src/UserSchema/mongoU');
const collectionDelivery = require('../src/DeliverySchema/mongoD');
const cors = require("cors")

app.use(cors())


app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.post('/add', async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        const insert = await collectionUser.create(data);
        res.status(200).json({ message: "Data inserted successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occured' })
    }
})
app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});


app.listen(5000, () => {
    console.log('Server running on port 5000')
})   