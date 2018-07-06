import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-material',
  templateUrl: 'material.html'
})
export class MaterialPage {
  material: string;
  
  constructor(public navParams: NavParams) {
    this.material = this.navParams.get('material');
  }
}
