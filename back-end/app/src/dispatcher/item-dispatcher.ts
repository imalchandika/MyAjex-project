import express = require("express");
import {ItemBO} from "../business/item-bo";

import cors=require("cors");



// This will return a new instance of a router object that can be used to handle routing
const itemDispatcher = express.Router();

itemDispatcher.route("")
    .get((req, res) => {
        const promise = new ItemBO().findAllItems();
        promise.then(item=>{
            res.status(200).json(item);
        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .post((req, res) => {
        if (!("code" in req.body && "description" in req.body && "unitPrice" in req.body&&"qtyOnHand" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }

        const promise = new ItemBO().saveItem(req.body);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));

    }).head(cors({exposedHeaders:['X-Count']}),((req,res)=>{


    const promise=new ItemBO().countItem();
    promise.then(count=>{
        res.append("X-Count",count+"");
        res.sendStatus(200);
    }).catch(error=>{
        res.sendStatus(500);
    });

}));

itemDispatcher.route("/:code")
    .get((req, res) => {
        const promise = new ItemBO().findItem(req.params.code);
        promise.then(items=>{

            if (items.length > 0){
                res.status(200).send(items[0]);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });
    })
    .delete((req, res) => {
        const promise = new ItemBO().deleteItem(req.params.code);
        promise.then(status=>{

            if (status){
                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });
    })
    .put((req, res) => {
        if (!("code" in req.body && "description" in req.body && "unitPrice" in req.body,"qtyOnHand" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }

        if (req.body.code !== req.params.code){
            res.status(400).send("Mismatched Item code");
            return;
        }

        const promise = new ItemBO().updateItem(req.body);
        promise.then(status=>{

            if (status){
                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });

    });

export default itemDispatcher;
