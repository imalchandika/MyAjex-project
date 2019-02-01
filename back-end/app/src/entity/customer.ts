import {SuperEntity} from "./super-entity";

export class Customer implements SuperEntity{
    constructor(public id: string, public name: string, public address: string,public salary:number){

    }
}