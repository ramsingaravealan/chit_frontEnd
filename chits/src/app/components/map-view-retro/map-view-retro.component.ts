import { Component, OnInit, OnDestroy, AfterViewInit, Input, Output, ViewChild, ElementRef, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

declare var $: any;
declare var google: any;
declare var moment: any;

@Component({
  selector: 'app-map-view-retro',
  templateUrl: './map-view-retro.component.html',
  styleUrls: ['./map-view-retro.component.css']

})
export class MapViewRetroComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() cId = Math.random() + '';

  public latValue = 0.0;
  public lonValue = 0.0;
  public map: any;
  public polygons: any;
  public marker: any;
  @Output() cordsChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
   // this.initMap();
   console.log('inir called');
   if (this.map) {
     this.map = null;
   }
   this.map = new google.maps.Map(document.getElementById(this.cId), {
     center: { lat: parseFloat(this.latValue + ''), lng: parseFloat(this.lonValue + '') },
     zoom: 15
   });
   google.maps.event.addListener(this.map, 'click', (event) => {
    console.log('called');
    this.latValue = event.latLng.lat();
    this.lonValue = event.latLng.lng();
    this.cordsChanged.emit({lat: this.latValue, lon: this.lonValue});
    // this.geoCordChange.emit(this.obj);
    this.createMarker();
  });
  }

  ngOnDestroy() {

  }

  get lat() {
    return this.latValue;
  }

  @Input()
  set lat(v) {
    this.latValue = parseFloat(v + '');
    this.initMap();
  }


  get lon() {
    return this.lonValue;
  }

  @Input()
  set lon(v) {
    this.lonValue = parseFloat(v + '');
    this.initMap();
  }

  public initMap() {
   if (this.map && this.latValue !== 0.0 && this.lonValue !== 0.0) {
    this.createMarker();
    this.setToCen();
   }

  }

  public createMarker() {
    if (this.marker) {
      this.marker.setMap(null);
      this.marker = null;
    }
    const lat = parseFloat(this.latValue + '');
    const lng = parseFloat('' + this.lonValue);



    if (lat !== 0.0 && lng !== 0.0) {
      this.marker = new google.maps.Marker({
        position: { lat, lng },
        map: this.map,
        zoom: 15,
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        title: ''
      });

      this.marker.setMap(this.map);
      // const latLng = this.marker.getPosition(); // returns LatLng object
      // this.map.setCenter(latLng);
      /*
      if (!this.bounds) {
        this.bounds = new google.maps.LatLngBounds();
      }
      this.bounds.extend(new google.maps.LatLng(lat, lng));
      this.map.fitBounds(this.bounds);
      */
    }
  }

  public setToCen() {
    const latLng = this.marker.getPosition(); // returns LatLng object
    console.log(latLng);
    if (latLng) {
    this.map.setCenter(latLng);
    }
  }

}
