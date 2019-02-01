import {Item} from "../../entity/item";
import {CrudDAO} from "../crud-dao";

export interface ItemDAO extends CrudDAO<Item, string>{

}