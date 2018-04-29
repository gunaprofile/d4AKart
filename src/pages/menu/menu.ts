import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import { ProductsByCategoryPage } from '../products-by-category/products-by-category';

import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup'; 
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  homePage : any;
  categories : any[]
  @ViewChild('content') childNavCtrl: NavController;
  loggedIn : boolean;
  user : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage, public modalCtrl : ModalController ) {
    this.homePage = HomePage
    this.categories = [
                        {
                          "name": "Clothing",
                          "description": "The best clothing for all",
                          "icon": "shirt"
                        },
                        {
                          "name": "Music",
                          "description": "New popular music CDs and DVDs",
                          "icon": "musical-notes"
                        },
                        {
                          "name": "Posters",
                          "description": "Best posters for your favorite movies and brands",
                          "icon": "images"
                        }
                      ]
    this.user = {};
  }

  ionViewDidEnter() {
    this.storage.ready().then(() => {
      this.storage.get('userLoginInfo').then((userLoginInfo)=>{
        if (userLoginInfo!=null){
          this.loggedIn = true;
          this.user = userLoginInfo.user;
        }else{
          this.loggedIn = false;
          this.user = null;
        }
      })

    });
  }
  openCategoryPage(category){
    this.childNavCtrl.setRoot(ProductsByCategoryPage, {'category' : category})
  }
  openPage(pageName : String){
    if(pageName=='signup'){
      this.navCtrl.push(SignupPage);
    }
    if(pageName=='login'){

      this.navCtrl.push(LoginPage);
    }
    if(pageName=='home'){
      this.navCtrl.setRoot(HomePage);
    }
    if(pageName=='logout'){
      this.storage.remove('userLoginInfo').then(()=>{
        this.loggedIn = false;
        this.user = null;
      })
    }
    if(pageName=='cart'){
      let modal = this.modalCtrl.create(CartPage).present();
    }

  }

}
