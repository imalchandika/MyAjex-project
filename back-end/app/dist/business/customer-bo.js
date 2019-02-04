"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_pool_1 = require("../db/db-pool");
var dao_factory_1 = require("../dao/dao-factory");
var Promise = require("promise");
var CustomerBO = /** @class */ (function () {
    function CustomerBO() {
    }
    CustomerBO.prototype.findAllCustomers = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.CUSTOMER, connection);
                    var promise = customerDAO.findAll();
                    promise.then(function (customers) {
                        resolve(customers);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    CustomerBO.prototype.findCustomer = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.CUSTOMER, connection);
                    var promise = customerDAO.find(id);
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
    CustomerBO.prototype.saveCustomer = function (customer) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.CUSTOMER, connection);
                    var promise = customerDAO.save(customer);
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
    // updateCustomer(customer: CustomerDTO): Promise<boolean>{
    //     return new Promise((resolve, reject) => {
    //
    //         pool.getConnection((err, connection) => {
    //
    //             if (err){
    //                 reject(err);
    //             }else{
    //
    //                 const customerDAO = <CustomerDAO> getDAO(DAOTypes.CUSTOMER, connection);
    //
    //                 const promise = customerDAO.update(customer);
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
    // deleteCustomer(id: string): Promise<boolean>{
    //     return new Promise((resolve, reject) => {
    //
    //         pool.getConnection((err, connection) => {
    //
    //             if (err){
    //                 reject(err);
    //             }else{
    //
    //                 const customerDAO = <CustomerDAO> getDAO(DAOTypes.CUSTOMER, connection);
    //
    //                 const promise = customerDAO.delete(id);
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
    CustomerBO.prototype.countCustomer = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connect) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.CUSTOMER, connect);
                    var promise = customerDAO.count();
                    promise.then(function (count) {
                        resolve(count);
                    }).catch(function (err) {
                        reject(err);
                    });
                }
            });
        });
    };
    return CustomerBO;
}());
exports.CustomerBO = CustomerBO;
