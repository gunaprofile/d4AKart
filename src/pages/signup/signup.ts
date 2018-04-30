import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login'

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  newUser : any = {};
  billing_shipping_same : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public alertCtrl: AlertController) {
    this.newUser.billing_address = {};
    this.newUser.shipping_address = {};
    this.billing_shipping_same = false;
  }

  setBillingToShipping() {
    this.billing_shipping_same = !this.billing_shipping_same;
  }
  validateEmail(){

    let validEmail=false
    let reg = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
    var patt = new RegExp(reg);
  
    if(patt.test(this.newUser.email)){

      let validEmail=true

      this.toastCtrl.create({
        message: "Congratz, Email good to go",
        duration : 3000
      }).present();

    }else{

      this.toastCtrl.create({
        message: "Please enter valid email",
        showCloseButton: true
      }).present();

      let validEmail=false

    }

  }
  signup(){
    this.alertCtrl.create({
      title : 'Account Created',
      message : 'Dummy account creation done, Please login with username admin, Pwd 123',
      buttons : [{
        text:'Login',
        handler: ()=>{
          this.navCtrl.setRoot(LoginPage);
        }
      }]
    })
  }

}
