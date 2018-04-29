import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductsDetailsPage } from '../products-details/products-details';

@Component({
  selector: 'page-products-by-category',
  templateUrl: 'products-by-category.html',
})
export class ProductsByCategoryPage {

  products : any[];
  category : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.products = [
          {
            "featured_src": "feature1.jpg",
            "title": "Neque turpis ut.",
            "short_description": "Lorem ipsum dolor sit amet, est est est, vitae venenatis gravida. Quisque quisque rhoncus, ante proin luctus. Venenatis nullam, non amet vel. Elit ipsum, nunc consequat, nascetur magna. Semper neque quis, metus amet, in eleifend. Euismod vulputate.",
            "price": "$ 15.00",
            "images":["feature1.jpg","feature2.jpg","feature3.jpg","feature4.jpg","feature5.jpg"],
            "attributes": [{"name": 'Causals', "options":['spec1','spec2','spec3','spec4']},{"name": 'Cloth', "options":['spec11','spec22','spec33','spec44']}]
          },
          {
            "featured_src": "feature2.jpg",
            "title": "Neque turpis ut.",
            "short_description": "Libero libero tortor, sit in justo, integer wisi maecenas. Eos nulla, posuere arcu placerat. Ligula nam justo, nunc nisl. Nulla lectus, aliquet semper lectus, lectus tellus id. Sed et pulvinar, porttitor adipiscing sit, magna nostra massa. Et vitae nonummy, hac luctus.",
            "price": "$ 10.00",
            "images":["feature1.jpg","feature2.jpg","feature3.jpg","feature4.jpg","feature5.jpg"],
            "attributes": [{"name": 'Causals', "options":['spec1','spec2','spec3','spec4']},{"name": 'Cloth', "options":['spec11','spec22','spec33','spec44']}]
          },
          {
            "featured_src": "feature3.jpg",
            "title": "Nam venenatis sit. ",
            "short_description": "Sollicitudin nam sed. Nunc gravida, et etiam, tortor lacinia eget. Orci sit, magnis iaculis. At lorem nibh. Vestibulum sapien sed, et arcu. Sed vestibulum condimentum, suscipit wisi.",
            "price": "$ 18.00",
            "images":["feature1.jpg","feature2.jpg","feature3.jpg","feature4.jpg","feature5.jpg"],
            "attributes": [{"name": 'Causals', "options":['spec1','spec2','spec3','spec4']},{"name": 'Cloth', "options":['spec11','spec22','spec33','spec44']}]
          },
          {
            "featured_src": "feature4.jpg",
            "title": "Amet lacus, non accumsan volutpat.",
            "short_description": "Sollicitudin nam sed. Nunc gravida, et etiam, tortor lacinia eget. Orci sit, magnis iaculis. At lorem nibh. Vestibulum sapien sed, et arcu. Sed vestibulum condimentum, suscipit wisi.",
            "price": "$ 12.00",
            "images":["feature1.jpg","feature2.jpg","feature3.jpg","feature4.jpg","feature5.jpg"],
            "attributes": [{"name": 'Causals', "options":['spec1','spec2','spec3','spec4']},{"name": 'Cloth', "options":['spec11','spec22','spec33','spec44']}]
          },
          {
            "featured_src": "feature5.jpg",
            "title": "Amet lacus, non accumsan volutpat. ",
            "short_description": "Amet id, semper voluptatem pretium. Tincidunt turpis, rhoncus in, vitae donec. Lectus at, et neque, sed mi justo. Placerat nunc. Pulvinar augue, convallis amet at, tincidunt ligula. Nibh pellentesque a, orci sed scelerisque.",
            "price": "$ 8.00",
            "images":["feature1.jpg","feature2.jpg","feature3.jpg","feature4.jpg","feature5.jpg"],
            "attributes": [{"name": 'Causals', "options":['spec1','spec2','spec3','spec4']},{"name": 'Cloth', "options":['spec11','spec22','spec33','spec44']}]
          }
      ]
  }
  openProductPage(product){
    this.navCtrl.push(ProductsDetailsPage, {"product": product});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsByCategoryPage');
  }

}
