import express=require("express");



import {OrderBO} from "../business/order-bo";

const orderDispatcher = express.Router();


orderDispatcher.route("")
    .get((req, res) => {

        const promise = new OrderBO().findAllOrders();
        promise.then(orders=>{
            res.status(200).json(orders);
        }).catch(error=>{
            res.status(500).send(error);
        });

    });

export default orderDispatcher;