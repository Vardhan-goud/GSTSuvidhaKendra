import { Component, OnInit } from '@angular/core';
import {WebservicesdataService} from '../webservicesdata.service';

@Component({
  selector: 'app-meesevaservices',
  templateUrl: './meesevaservices.component.html',
  styleUrls: ['./meesevaservices.component.css']
})
export class MeesevaservicesComponent implements OnInit {
   meeSevaData:any = [];
  constructor(public meeSevaService:WebservicesdataService) { 
    this.meeSevaData = meeSevaService.webServicesData;
  }

  ngOnInit(): void {
  }

}
