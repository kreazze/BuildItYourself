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
    ram:{
        type: String,
        required:true, 
    },
    storage:{
        type: String,
        required:true, 
    },
    powerSupply:{
        type: String,
        required:true, 
    },
    systemCooler:{
        type: String,
        required:true, 
    },
    cpuCase:{
        type: String,
        required:true, 
    },
    monitor:{
        type: String,
        required:true, 
    },
    keyboard:{
        type: String,
        required:true, 
    },
    mouse:{
        type: String,
        required:true, 
    },
})

const OrdersModel = mongoose.model("Orders", OrdersSchema)

module.exports = OrdersModel

