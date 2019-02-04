import {CrudDAO} from "../crud-dao";

import {OrderDetail} from "../../entity/orderdetails";

export interface OrderDetailDAO extends CrudDAO<OrderDetail,string>{

}