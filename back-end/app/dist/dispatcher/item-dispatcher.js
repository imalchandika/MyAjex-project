"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var item_bo_1 = require("../business/item-bo");
var cors = require("cors");
// This will return a new instance of a router object that can be used to handle routing
var itemDispatcher = express.Router();
itemDispatcher.route("")
    .get(function (req, res) {
    var promise = new item_bo_1.ItemBO().findAllItems();
    promise.then(function (item) {
        res.status(200).json(item);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    if (!("code" in req.body && "description" in req.body && "unitPrice" in req.body && "qtyOnHand" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new item_bo_1.ItemBO().saveItem(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
}).head(cors({ exposedHeaders: ['X-Count'] }), (function (req, res) {
    var promise = new item_bo_1.ItemBO().countItem();
    promise.then(function (count) {
        res.append("X-Count", count + "");
        res.sendStatus(200);
    }).catch(function (error) {
        res.sendStatus(500);
    });
}));
itemDispatcher.route("/:code")
    .get(function (req, res) {
    var promise = new item_bo_1.ItemBO().findItem(req.params.code);
    promise.then(function (items) {
        if (items.length > 0) {
            res.status(200).send(items[0]);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
});
// .delete((req, res) => {
//     const promise = new ItemBO().deleteItem(req.params.code);
//     promise.then(status=>{
//
//         if (status){
//             res.status(200).send(true);
//         }else{
//             res.sendStatus(404);
//         }
//
//     }).catch(error=>{
//         res.status(500).send(error);
//     });
// })
// .put((req, res) => {
//     if (!("code" in req.body && "description" in req.body && "unitPrice" in req.body,"qtyOnHand" in req.body)){
//         res.status(400).send("Invalid Request Body");
//         return;
//     }
//
//     if (req.body.code !== req.params.code){
//         res.status(400).send("Mismatched Item code");
//         return;
//     }
//
//     const promise = new ItemBO().updateItem(req.body);
//     promise.then(status=>{
//
//         if (status){
//             res.status(200).send(true);
//         }else{
//             res.sendStatus(404);
//         }
//
//     }).catch(error=>{
//         res.status(500).send(error);
//     });
//
// });
exports.default = itemDispatcher;
