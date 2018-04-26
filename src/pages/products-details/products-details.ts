import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-products-details',
  templateUrl: 'products-details.html',
})
export class ProductsDetailsPage {
  
  product : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product=this.navParams.get("product");
  }


}
