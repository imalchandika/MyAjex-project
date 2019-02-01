import {ItemDAO} from "../item-dao";
import {Item} from "../../../entity/item";
import Promise=require("promise");
import {PoolConnection} from "mysql";



 export class ItemDAOImpl implements ItemDAO{

     constructor(private connection: PoolConnection) {

     }

    delete(id: string): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM item WHERE code='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    find(id: string): Promise<Array<Item>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM item WHERE code='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    findAll(): Promise<Array<Item>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM item`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    save(entity: Item): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO item VALUES ('${entity.code}','${entity.description}','${entity.unitPrice}',${entity.qtyOnHand})`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    update(entity: Item): Promise<boolean> {
        return new Promise((resolve, reject) => {

            // console.log(`UPDATE item SET description = '${entity.description}', unitPrice ='${entity.unitPrice}' WHERE code='${entity.code}'`);
            this.connection.query(`UPDATE item SET description = '${entity.description}', unitPrice ='${entity.unitPrice}',qtyOnHand='${entity.qtyOnHand}' WHERE code='${entity.code}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

}