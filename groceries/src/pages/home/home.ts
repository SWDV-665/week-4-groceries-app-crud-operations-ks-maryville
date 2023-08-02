import {Component} from '@angular/core';
import {Alert, NavController, Toast} from 'ionic-angular';
import {ToastController} from "ionic-angular";
import {AlertController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery";
  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Shrimp",
      quantity: 3
    },
    {
      name: "Sugar",
      quantity: 1
    },
  ]

  addItem = () => {
    this.showPrompt();
  }
  removeItem = (obj) => {
    const toast = this.toastCtrl.create({
        message: `Removing Item - ${obj.name}`,
        duration: 1000
      }
    );
    toast.present();
    const isMatch = (item) => item.name === obj.name;
    let index = this.items.findIndex(isMatch);
    console.log(index);
    this.items.splice(index, 1);

  }
  editItem = (item) => {
    this.editItemPrompt(item);
  }
  editItemPrompt = (item) => {
    const prompt: Alert = this.alertCtrl.create({
      title: "update",
      message: "update item",
      inputs: [
        {
          name: "name",
          placeholder: item.name,
          value: item.name
        },
        {
          name: "quantity",
          placeholder: item.quantity,
          value: item.quantity
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log("clicked");
          }
        },
        {
          text: "Saved",
          handler: data => {
            console.log("save clicked");
            let foundIndex = this.items.findIndex((thisItem) => thisItem.name === item.name);
            this.items[foundIndex] = {...this.items[foundIndex], ...data};
          }
        }

      ]
    })
    prompt.present()
  }
  showPrompt = () => {
    const prompt = this.alertCtrl.create({
      title: 'Add Groceries',
      message: "Add an item and quantity to be added to the list",
      inputs: [
        {
          name: 'name',
          placeholder: 'item'
        },
        {
          name: 'quantity',
          placeholder: 'quantity'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Save clicked', data);
            this.items.push(data);
          }
        }
      ]
    });
    prompt.present();
  }

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

}
