import { Component, OnInit } from '@angular/core';
import { InactivityService } from 'src/app/services/inactivity-service.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit{

  loader = true;

  constructor(private inactivityService: InactivityService) {} 

  ngOnInit():void {
    setTimeout(()=>{
      this.loader = false;
    }, 2000);
    this.inactivityService.startTimer();
  }

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 21.158003,
    lng: -100.940717
  };
  zoom = 6;

  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: 21.158003, lng: -100.940717 } // Ubicación específica
  ];

  moveMap(event: google.maps.MapMouseEvent){
    if(event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent){
    if(event.latLng != null) this.display = (event.latLng.toJSON());
  }

  // Método para acercar el mapa al marcador
  zoomToMarker(markerPosition: google.maps.LatLngLiteral) {
    this.center = markerPosition;
    this.zoom = 30; 
  }

}