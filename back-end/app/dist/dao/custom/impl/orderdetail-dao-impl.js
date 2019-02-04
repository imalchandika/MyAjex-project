"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var OrderDetailDAOImpl = /** @class */ (function () {
    function OrderDetailDAOImpl(connection) {
        this.connection = connection;
    }
    OrderDetailDAOImpl.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM orderdetail WHERE orderId='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    OrderDetailDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM orderdetail", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    OrderDetailDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO orderdetail VALUES('" + entity.orderId + "','" + entity.itemCode + "','" + entity.qty + "','" + entity.unitPrice + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    return OrderDetailDAOImpl;
}());
exports.OrderDetailDAOImpl = OrderDetailDAOImpl;
