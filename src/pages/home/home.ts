import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductoProvider } from '../../providers/producto/producto';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productos = [];
  imagenCamara: string;
  constructor(
    public navCtrl: NavController,
    private camara: Camera,
    private servicioProductos: ProductoProvider
  ) {

  }

  ionViewDidLoad(){
    this.servicioProductos.obtenerProductos().subscribe(
      (datos: any[]) => {
        console.log(datos);
        this.productos = datos;
      }
    );
  }

  irDetalleProducto(producto){
    this.navCtrl.push("DetalleProductoPage",{
      detalleProduto : producto
    });
  }

  tomarFoto(){
    let opciones:CameraOptions = {
      sourceType: this.camara.PictureSourceType.CAMERA,
      mediaType: this.camara.MediaType.PICTURE,
      encodingType: this.camara.EncodingType.JPEG,
      quality: 100,
      destinationType: this.camara.DestinationType.DATA_URL
    }
    this.camara.getPicture(opciones).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imagenCamara = base64Image;
    }, (err) => {
      // Handle error
     });
  }
}
