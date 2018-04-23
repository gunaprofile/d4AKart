import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductsByCategoryPage } from '../products-by-category/products-by-category';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  homePage : any;
  categories : any[]
  @ViewChild('content') childNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  openCategoryPage(category){
    this.childNavCtrl.setRoot(ProductsByCategoryPage, {'category' : category})
  }

}
