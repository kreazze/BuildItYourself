const mongoose = require('mongoose')

const OrdersSchema = new mongoose.Schema({
    processor: {
        type: String,
        required: true,
    },
    motherboard:{
        type:String,
        required:true,
    },
    graphicsCard:{
        type: String,
        required:true, 
    },
})

const OrdersModel = mongoose.model("Orders", OrdersSchema)

module.exports = OrdersModel