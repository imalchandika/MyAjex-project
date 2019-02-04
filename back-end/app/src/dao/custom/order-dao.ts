import {CrudDAO} from "../crud-dao";
import {Order} from "../../entity/order";

export interface OrderDAO extends CrudDAO<Order,string>{

    count():Promise<number>;
}