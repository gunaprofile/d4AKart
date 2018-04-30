import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchQuery: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('searchQurey'));
    this.searchQuery = this.navParams.get('searchQurey');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
