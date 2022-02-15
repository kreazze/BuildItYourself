const express = require("express")
const app = express()
const mongoose = require('mongoose')
const OrdersModel = require('./models/Orders')

const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://ronniechua01:ronniechua01@customerinfo.hckkc.mongodb.net/Customer?retryWrites=true&w=majority")

app.get("/getOrders", (req, res) => {
    OrdersModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        }

        else{
            res.json(result)
        }
    })
})

app.post("/createOrders", async (req, res) => {
    const order = req.body
    const newOrder = new OrdersModel(order)
    await newOrder.save()

    res.json(order)
})

app.listen(3001, () => {
    console.log("Server running")
})