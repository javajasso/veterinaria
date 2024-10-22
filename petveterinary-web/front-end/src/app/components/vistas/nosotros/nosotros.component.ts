import { Component } from '@angular/core';
import { InactivityService } from 'src/app/services/inactivity-service.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {

  loader = true;

  //variables del mapa
  title="gmaps";

  position={
    lat: -34.681,
    lng: -58.371
  };

  label = {
    color: 'red',
    text: 'marcador'
  }

  constructor(private inactivityService: InactivityService) {} 

  ngOnInit():void {
    setTimeout(()=>{
      this.loader = false;
    }, 2000);
    this.inactivityService.startTimer();
  }

}