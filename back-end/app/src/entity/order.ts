import {SuperEntity} from "./super-entity";

export class Order implements SuperEntity{

  constructor(public id:string,public date:string,public customerId:string){

  }

}