import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyGoogleMapsMarker } from '@assets/lib/components/my-google-maps/dist/types/components/my-google-maps/my-google-maps';

@Component({
  selector: 'page-around-me',
  templateUrl: 'around-me.html'
})
export class AroundMePage {

  markers: Array<MyGoogleMapsMarker> = [
    {lat: 39.472936, lng: -0.379647, title: "AV OEST, 17"},
    {lat: 39.470488, lng: -0.377770, title: "C/ SANG, 4"},
    {lat: 39.472747, lng: -0.385087, title: "C/ SANT PERE PASQUAL, 13"}
  ]
  constructor(public navCtrl: NavController) {

  }
}
