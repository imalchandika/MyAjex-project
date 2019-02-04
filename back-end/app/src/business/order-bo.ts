import Promise=require("promise");
import {OrderDTO} from "../dto/order-dto";
import {pool} from "../db/db-pool";
import {DAOTypes, getDAO} from "../dao/dao-factory";
import {OrderDAO} from "../dao/custom/order-dao";
import {ItemDAO} from "../dao/custom/item-dao";





export class OrderBO{
    findAllOrders(): Promise<Array<OrderDTO>>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const orderDAO = <OrderDAO> getDAO(DAOTypes.ORDER, connection);

                    const promise = orderDAO.findAll();
                    promise.then(orders => {
                        resolve(orders);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });
        });
    }

    findOrder(id: string): Promise<Array<OrderDTO>>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const orderDAO  = <OrderDAO> getDAO(DAOTypes.ORDER, connection);

                    const promise = orderDAO .find(id);
                    promise.then(order => {
                        resolve(order);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

    saveOrder(order: OrderDTO): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const orderDAO = <OrderDAO> getDAO(DAOTypes.ORDER, connection);

                    const promise = orderDAO.save(order);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

    countOrder():Promise<number>{
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connect)=>{
                if(err){
                    reject(err);
                }else{
                    const orderDAO =<OrderDAO> getDAO(DAOTypes.ORDER,connect )
                    const promise=orderDAO.count();

                    promise.then(count=>{
                        resolve(count);
                    }).catch(err=>{
                        reject(err);
                    });
                }
            })
        })
    }

}