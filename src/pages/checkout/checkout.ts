import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home'

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  newOrder : any = {};
  billing_shipping_same : boolean;
  paymentMethods : any[]
  paymentMethod : any
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl : AlertController) {
    this.newOrder.billing_address = {};
    this.newOrder.shipping_address = {};
    this.billing_shipping_same = false;
    this.paymentMethods = [
      { method_id:"bacs", method_title:"Direct Bank Trnsfer" },
      { method_id:"cheque", method_title:"Cheque Payments" },
      { method_id:"cod", method_title:"Cash on Delivery" },
      { method_id:"paypal", method_title:"PayPal" }
    ]
  }
  setBillingToShipping() {
    this.billing_shipping_same = !this.billing_shipping_same;
  }

  placeOrder(){
      this.alertCtrl.create({
          title : "Order Placed Successful",
          message : "Your Order has been placed successfully. Your order number is ###",
          buttons: [{
            text: "OK",
            handler: () => {
                this.navCtrl.setRoot(HomePage);
            }
          }]
        }).present()
  }

}
