import React from 'react'
import {useState, useEffect} from "react"
import Axios from "axios"

const getRequest = () => {

    const [listOfOrders, setListOfOrders] = useState ([{},
])

    useEffect(() => {
        Axios.get("http://localhost:3001/getOrders").then((response) => {
            setListOfOrders(response.data)
        })
        
    }, [])
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
            <div className="ordersDisplay">
                {listOfOrders.map((order) => {
                    return (
                        <div>
                            <h1>Processor: {order.processor}</h1>
                            <h1>Motherboard: {order.motherboard}</h1>
                            <h1>Graphics Card: {order.graphicsCard}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default getRequest
