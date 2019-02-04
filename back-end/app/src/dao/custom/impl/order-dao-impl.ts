import {OrderDAO} from "../order-dao";
import {Order} from "../../../entity/order";
import {PoolConnection} from "mysql";

import Promise=require("promise");

export class OrderDAOImpl implements OrderDAO{

    constructor(private connection: PoolConnection){

    }


    findAll(): Promise<Array<Order>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM orders`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    find(id: string): Promise<Array<Order>> {
       return new Promise((resolve,reject)=>{
           this.connection.query(`SELECT * FROM orders WHERE id=${id}`,(err,results)=>{
               if(err){
                   reject(err);
               }else{
                   resolve(results);
               }
           });
       });
    }

    save(entity: Order): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            this.connection.query(`SELECT * FROM orders VALUES('${entity.id}','${entity.date}',${entity.customerId})`,(err,results)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(results);
                }
            });
        });
    }



}