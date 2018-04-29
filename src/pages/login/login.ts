import { Component } from '@angular/core';
import { NavController, NavParams, ToastController,AlertController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SignupPage } from '../signup/signup'; 

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username : String;
  password : String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public storage : Storage, public alertCtrl : AlertController) {
    this.username = '';
    this.password = '';
  }

  login() {
    if(this.username!='admin' ||this.password!='123'){
      this.toastCtrl.create({
        message:'Invalid username and/or password!',
        duration: 3000
      }).present()

    }else{
      let response = {'user':{'name':'Admin'}};
      this.storage.set('userLoginInfo',response).then((data)=>{
        this.alertCtrl.create({
          title : "Login Successful",
          message : "You have been logged in successfully!.",
          buttons: [{
            text: "OK",
            handler: () => {
              if(this.navParams.get('next')){
                this.navCtrl.push(this.navParams.get("next"));
              }else{
                this.navCtrl.pop()     
              }
            }
          }]
        }).present()
      });
    }
  }

  openPage(pageName : String){
    if(pageName=='signup'){
      this.navCtrl.push(SignupPage);
    }
  }

}
