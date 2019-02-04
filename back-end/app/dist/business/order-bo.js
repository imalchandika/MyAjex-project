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
    OrderBO.prototype.findOrder = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDER, connection);
                    var promise = orderDAO.find(id);
                    promise.then(function (order) {
                        resolve(order);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderBO.prototype.saveOrder = function (order) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDER, connection);
                    var promise = orderDAO.save(order);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderBO.prototype.countOrder = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connect) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDER, connect);
                    var promise = orderDAO.count();
                    promise.then(function (count) {
                        resolve(count);
                    }).catch(function (err) {
                        reject(err);
                    });
                }
            });
        });
    };
    return OrderBO;
}());
exports.OrderBO = OrderBO;
