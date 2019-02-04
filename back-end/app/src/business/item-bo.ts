
import {pool} from "../db/db-pool";

import {DAOTypes, getDAO} from "../dao/dao-factory";
import {ItemDTO} from "../dto/item-dto";
import {ItemDAO} from "../dao/custom/item-dao";
import Promise=require("promise");




export class ItemBO {
    findAllItems(): Promise<Array<ItemDTO>>{

        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const itemDAO = <ItemDAO> getDAO(DAOTypes.ITEM, connection);

                    const promise = itemDAO .findAll();
                    promise.then(item => {
                        resolve(item);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });

    }

    findItem(id: string): Promise<Array<ItemDTO>>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const itemDAO  = <ItemDAO> getDAO(DAOTypes.ITEM, connection);

                    const promise = itemDAO .find(id);
                    promise.then(customer => {
                        resolve(customer);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

    saveItem(item: ItemDTO): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const itemDAO = <ItemDAO> getDAO(DAOTypes.ITEM, connection);

                    const promise = itemDAO.save(item);
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
    countItem():Promise<number>{
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connect)=>{
                if(err){
                    reject(err);
                }else{
                    const itemDAO =<ItemDAO> getDAO(DAOTypes.ITEM,connect )
                    const promise=itemDAO.count();

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