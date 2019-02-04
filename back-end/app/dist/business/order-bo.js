"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var db_pool_1 = require("../db/db-pool");
var dao_factory_1 = require("../dao/dao-factory");
var OrderBO = /** @class */ (function () {
    function OrderBO() {
    }
    OrderBO.prototype.findAllOrders = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDER, connection);
                    var promise = orderDAO.findAll();
                    promise.then(function (orders) {
                        resolve(orders);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    return OrderBO;
}());
exports.OrderBO = OrderBO;
