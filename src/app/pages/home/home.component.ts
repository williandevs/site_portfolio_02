import { Component, OnInit } from '@angular/core';
import { OrdeDetalsService } from 'src/app/services/orde-detals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: OrdeDetalsService) { }

  serviceData:any;

  ngOnInit(): void {
     this.serviceData = this.service.serviceDetails;
  }

 

}
