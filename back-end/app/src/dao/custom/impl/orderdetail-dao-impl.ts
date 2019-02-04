import {OrderDetailDAO} from "../orderdetail-dao";
import {OrderDetail} from "../../../entity/orderdetails";
import {PoolConnection} from "mysql";
import Promise=require("promise");

export class OrderDetailDAOImpl implements OrderDetailDAO{

    constructor(private connection: PoolConnection){

    }


    find(id: string): Promise<Array<OrderDetail>> {

        return new Promise((resolve,reject)=>{
            this.connection.query(`SELECT * FROM orderdetail WHERE orderId='${id}'`,(err,results)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(results);
                }
            });
        });
    }

    findAll(): Promise<Array<OrderDetail>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM orderdetail`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    save(entity: OrderDetail): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            this.connection.query(`INSERT INTO orderdetail VALUES('${entity.orderId}','${entity.itemCode}','${entity.qty}','${entity.unitPrice}')`,(err,results)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(results);
                }
            });
        });
    }



}