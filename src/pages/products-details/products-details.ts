import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CartPage } from "../cart/cart"


@Component({
  selector: 'page-products-details',
  templateUrl: 'products-details.html',
})
export class ProductsDetailsPage {
  
  product : any;
  reviews : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,public toastCtrl : ToastController, public modalCtrl : ModalController) {
    this.product = this.navParams.get("product");
    this.reviews = [
          {
            "reviewer_name": "Guna",
            "review":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ",
            "rating":4
          },
          {
            "reviewer_name": "Saravanan",
            "review":"mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula",
            "rating": 1
          },
          {
            "reviewer_name": "Palz pal",
            "review":"rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit ",
            "rating": 3
          }
          
      ]
      
  }
  addToCart(product){

    this.storage.get('cart').then((data)=>{
      if(data==null || data.length==0){
        data = [];
        data.push({
          'product': product,
          'qty': 1,
          'amount': parseFloat(product.price)
        })
      }else{
        
        let added = 0;

        for (let i=0 ; i <data.length;i++){
          if(data[i] !='undefined' || data[i]!=undefined){
            if(product.pid==data[i]['product']['pid']){

              let qty = data[i].qty;
              data[i].qty = qty + 1
              data[i].amount = parseFloat(data[i].amount) + parseFloat(data[i].product.price);
              added = 1;

            }
          }
        }

        if(added==0){
          data.push({
              'product': product,
              'qty': 1,
              'amount': parseFloat(product.price)
          })
        }
      }
      this.storage.set('cart', data).then(()=>{
        this.toastCtrl.create({
        message : "Cart Updated",
        duration:3000
      }).present();
      })
    });

  }

  openCart(){
    this.modalCtrl.create(CartPage).present();
  }


}
