import {Customer} from "../../entity/customer";
import {CrudDAO} from "../crud-dao";

export interface CustomerDAO extends CrudDAO<Customer,string>{
    count():Promise<number>;
}