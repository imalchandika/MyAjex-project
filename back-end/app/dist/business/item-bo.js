"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_pool_1 = require("../db/db-pool");
var dao_factory_1 = require("../dao/dao-factory");
var Promise = require("promise");
var ItemBO = /** @class */ (function () {
    function ItemBO() {
    }
    ItemBO.prototype.findAllItems = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise = itemDAO.findAll();
                    promise.then(function (item) {
                        resolve(item);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.findItem = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise = itemDAO.find(id);
                    promise.then(function (customer) {
                        resolve(customer);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.saveItem = function (item) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise = itemDAO.save(item);
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
    // updateItem(item: ItemDTO): Promise<boolean>{
    //     return new Promise((resolve, reject) => {
    //
    //         pool.getConnection((err, connection) => {
    //
    //             if (err){
    //                 reject(err);
    //             }else{
    //
    //                 const itemDAO = <ItemDAO> getDAO(DAOTypes.ITEM, connection);
    //
    //                 const promise = itemDAO.update(item);
    //                 promise.then(result => {
    //                     resolve(result);
    //                     pool.releaseConnection(connection);
    //                 }).catch(error=>{
    //                     reject(error);
    //                     pool.releaseConnection(connection);
    //                 });
    //
    //             }
    //
    //         });
    //
    //
    //     });
    // }
    //
    // deleteItem(id: string): Promise<boolean>{
    //     return new Promise((resolve, reject) => {
    //
    //         pool.getConnection((err, connection) => {
    //
    //             if (err){
    //                 reject(err);
    //             }else{
    //
    //                 const itemDAO = <ItemDAO> getDAO(DAOTypes.ITEM, connection);
    //
    //                 const promise = itemDAO.delete(id);
    //                 promise.then(result => {
    //                     resolve(result);
    //                     pool.releaseConnection(connection);
    //                 }).catch(error=>{
    //                     reject(error);
    //                     pool.releaseConnection(connection);
    //                 });
    //
    //             }
    //
    //         });
    //
    //
    //     });
    // }
    ItemBO.prototype.countItem = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connect) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connect);
                    var promise = itemDAO.count();
                    promise.then(function (count) {
                        resolve(count);
                    }).catch(function (err) {
                        reject(err);
                    });
                }
            });
        });
    };
    return ItemBO;
}());
exports.ItemBO = ItemBO;
