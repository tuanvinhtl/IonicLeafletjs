import { Component, AfterViewInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { Map, tileLayer, marker } from "leaflet";
@Component({
  selector: "page-contact",
  templateUrl: "contact.html"
})
export class ContactPage implements AfterViewInit {
 
  map: Map;
  newMarker: any;
  address: string[];

  constructor(public navCtrl: NavController) {}

  ionViewDidEnter() {
   
  }

  loadMap() {
    this.map = new Map("mapId").setView([17.385, 78.4867], 13);
    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    }).addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.loadMap();
  }
  
}
