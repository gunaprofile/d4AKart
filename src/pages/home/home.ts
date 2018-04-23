import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  products : any[];
  moreProducts : any[];

  @ViewChild('productSlides') productComponentSlides : Slides;
  constructor(public navCtrl: NavController, public toastCtrl : ToastController) {

    this.products = [
        {
          "featured_src": "feature2.jpg",
          "title": "Neque turpis ut.",
          "short_description": "Libero libero tortor, sit in justo, integer wisi maecenas. Eos nulla, posuere arcu placerat. Ligula nam justo, nunc nisl. Nulla lectus, aliquet semper lectus, lectus tellus id. Sed et pulvinar, porttitor adipiscing sit, magna nostra massa. Et vitae nonummy, hac luctus."
        },
        {
          "featured_src": "feature3.jpg",
          "title": "Nam venenatis sit. ",
          "short_description": "Sollicitudin nam sed. Nunc gravida, et etiam, tortor lacinia eget. Orci sit, magnis iaculis. At lorem nibh. Vestibulum sapien sed, et arcu. Sed vestibulum condimentum, suscipit wisi."
        },
        {
          "featured_src": "feature4.jpg",
          "title": "Amet lacus, non accumsan volutpat.",
          "short_description": "Sollicitudin nam sed. Nunc gravida, et etiam, tortor lacinia eget. Orci sit, magnis iaculis. At lorem nibh. Vestibulum sapien sed, et arcu. Sed vestibulum condimentum, suscipit wisi."
        },
        {
          "featured_src": "feature5.jpg",
          "title": "Amet lacus, non accumsan volutpat. ",
          "short_description": "Amet id, semper voluptatem pretium. Tincidunt turpis, rhoncus in, vitae donec. Lectus at, et neque, sed mi justo. Placerat nunc. Pulvinar augue, convallis amet at, tincidunt ligula. Nibh pellentesque a, orci sed scelerisque."
        }
    ];
    this.loadMoreProducts(null);
  }
  ionViewDidLoad(){
    setInterval(()=>{
      if(this.productComponentSlides.getActiveIndex() == this.productComponentSlides.length()-1)
        this.productComponentSlides.slideTo(0)
      this.productComponentSlides.slideNext();
    }, 3000)
  }
  loadMoreProducts(event){
    if(event==null){
        this.moreProducts = [
          {
            "featured_src": "feature1.jpg",
            "title": "Neque turpis ut.",
            "short_description": "Lorem ipsum dolor sit amet, est est est, vitae venenatis gravida. Quisque quisque rhoncus, ante proin luctus. Venenatis nullam, non amet vel. Elit ipsum, nunc consequat, nascetur magna. Semper neque quis, metus amet, in eleifend. Euismod vulputate.",
            "price": "$ 15.00"
          },
          {
            "featured_src": "feature2.jpg",
            "title": "Neque turpis ut.",
            "short_description": "Libero libero tortor, sit in justo, integer wisi maecenas. Eos nulla, posuere arcu placerat. Ligula nam justo, nunc nisl. Nulla lectus, aliquet semper lectus, lectus tellus id. Sed et pulvinar, porttitor adipiscing sit, magna nostra massa. Et vitae nonummy, hac luctus.",
            "price": "$ 10.00"
          },
          {
            "featured_src": "feature3.jpg",
            "title": "Nam venenatis sit. ",
            "short_description": "Sollicitudin nam sed. Nunc gravida, et etiam, tortor lacinia eget. Orci sit, magnis iaculis. At lorem nibh. Vestibulum sapien sed, et arcu. Sed vestibulum condimentum, suscipit wisi.",
            "price": "$ 18.00"
          },
          {
            "featured_src": "feature4.jpg",
            "title": "Amet lacus, non accumsan volutpat.",
            "short_description": "Sollicitudin nam sed. Nunc gravida, et etiam, tortor lacinia eget. Orci sit, magnis iaculis. At lorem nibh. Vestibulum sapien sed, et arcu. Sed vestibulum condimentum, suscipit wisi.",
            "price": "$ 12.00"
          },
          {
            "featured_src": "feature5.jpg",
            "title": "Amet lacus, non accumsan volutpat. ",
            "short_description": "Amet id, semper voluptatem pretium. Tincidunt turpis, rhoncus in, vitae donec. Lectus at, et neque, sed mi justo. Placerat nunc. Pulvinar augue, convallis amet at, tincidunt ligula. Nibh pellentesque a, orci sed scelerisque.",
            "price": "$ 8.00"
          }
      ]
    }
  else
      this.moreProducts = this.moreProducts.concat([
          {
            "featured_src": "feature1.jpg",
            "title": "Neque turpis ut.",
            "short_description": "Lorem ipsum dolor sit amet, est est est, vitae venenatis gravida. Quisque quisque rhoncus, ante proin luctus. Venenatis nullam, non amet vel. Elit ipsum, nunc consequat, nascetur magna. Semper neque quis, metus amet, in eleifend. Euismod vulputate.",
            "price": "$ 15.00"
          },
          {
            "featured_src": "feature2.jpg",
            "title": "Neque turpis ut.",
            "short_description": "Libero libero tortor, sit in justo, integer wisi maecenas. Eos nulla, posuere arcu placerat. Ligula nam justo, nunc nisl. Nulla lectus, aliquet semper lectus, lectus tellus id. Sed et pulvinar, porttitor adipiscing sit, magna nostra massa. Et vitae nonummy, hac luctus.",
            "price": "$ 10.00"
          },
          {
            "featured_src": "feature3.jpg",
            "title": "Nam venenatis sit. ",
            "short_description": "Sollicitudin nam sed. Nunc gravida, et etiam, tortor lacinia eget. Orci sit, magnis iaculis. At lorem nibh. Vestibulum sapien sed, et arcu. Sed vestibulum condimentum, suscipit wisi.",
            "price": "$ 18.00"
          },
          {
            "featured_src": "feature4.jpg",
            "title": "Amet lacus, non accumsan volutpat.",
            "short_description": "Sollicitudin nam sed. Nunc gravida, et etiam, tortor lacinia eget. Orci sit, magnis iaculis. At lorem nibh. Vestibulum sapien sed, et arcu. Sed vestibulum condimentum, suscipit wisi.",
            "price": "$ 12.00"
          },
          {
            "featured_src": "feature5.jpg",
            "title": "Amet lacus, non accumsan volutpat. ",
            "short_description": "Amet id, semper voluptatem pretium. Tincidunt turpis, rhoncus in, vitae donec. Lectus at, et neque, sed mi justo. Placerat nunc. Pulvinar augue, convallis amet at, tincidunt ligula. Nibh pellentesque a, orci sed scelerisque.",
            "price": "$ 8.00"
          }
      ]);
    if(event != null){
      event.complete()
    }
    if(this.moreProducts.length < 10){
      this.toastCtrl.create({
        message : "No more products!",
        duration:3000
      }).present();
    }
  }
}
