import {Injectable} from '@angular/core';

/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesServiceProvider {
    items =  [

    ]

    getItems = ()=>{
        return this.items;
    }

    addItem = (item) => {
        console.log("ITEM", item);
        this.items.push(item);
        console.log(item);
    }
    removeItem = (item, index) => {
        this.items.splice(index, 1);
    }
    editItem = (item, index) => {
        this.items[index] = item;
    }

    constructor() {
        console.log('Hello GroceriesServiceProvider Provider');
    }

}

