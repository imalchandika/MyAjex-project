"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var order_bo_1 = require("../business/order-bo");
var orderDispatcher = express.Router();
orderDispatcher.route("")
    .get(function (req, res) {
    var promise = new order_bo_1.OrderBO().findAllOrders();
    promise.then(function (orders) {
        res.status(200).json(orders);
    }).catch(function (error) {
        res.status(500).send(error);
    });
});
exports.default = orderDispatcher;
