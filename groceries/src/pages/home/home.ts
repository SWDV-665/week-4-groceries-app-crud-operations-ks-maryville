import {Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import {ToastController} from "ionic-angular";
import {AlertController} from 'ionic-angular';
import {GroceriesServiceProvider} from "../../providers/groceries-service/groceries-service";
import {InputDialogServiceProvider} from "../../providers/input-dialog-service/input-dialog-service";
// import {InputDialogServiceProvider} from "../../providers/input-dialog-service/input-dialog-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery";
  items = this.dataService.items;
  loadItems = ()=>{
    console.log("loading items...")
    return this.dataService.getItems();
  }
  handleAdd = () => {
    this.dialogService.addEditPrompt()
  }
  handleRemove = (item, i) => {
    this.dataService.removeItem(item, i);
  }
  handleEdit = (item, i) => {
    console.log(item);
    this.dialogService.addEditPrompt(item, i);
  }

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceProvider, public dialogService: InputDialogServiceProvider) {

  }

}
