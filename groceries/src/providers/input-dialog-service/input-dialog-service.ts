import {Injectable} from '@angular/core';


import {Alert, AlertController, ToastController} from "ionic-angular";
import {GroceriesServiceProvider} from "../groceries-service/groceries-service";

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

    // items = this.dataService.items
    addEditPrompt = (item?, index?) => {

        const prompt: Alert = this.alertCtrl.create({
            title: item ? "Edit Item" : "Add Item",
            message: item ? "Please edit item..." : "Please enter item",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'item',
                    value: item ? item["name"] : null,
                },
                {
                    name: 'quantity',
                    placeholder: 'quantity',
                    value: item ? item["quantity"] : null,
                }
            ],
            buttons: [
                {
                    text: "Cancel",
                    handler: data => {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Save",
                    handler: data => {
                        if (item === undefined) {
                            console.log("the item is not present. adding item.")
                            this.dataService.addItem(data);
                        } else {
                            this.dataService.editItem(data, index);
                        }
                    }
                }
            ]
        })
        prompt.present();
    }

    constructor(public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceProvider) {
        console.log('Hello InputDialogServiceProvider Provider');
    }

}
