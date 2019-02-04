
import Promise=require("promise");
import {OrderDTO} from "../dto/order-dto";
import {pool} from "../db/db-pool";
import {CustomerDAO} from "../dao/custom/customer-dao";
import {DAOTypes, getDAO} from "../dao/dao-factory";
import {OrderDAO} from "../dao/custom/order-dao";




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
}