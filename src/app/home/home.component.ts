import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services:any=[];
  filteredServices:any=[];
 
  constructor(public dataService:DataService) {
    this.services=dataService.docsData;

   }

  ngOnInit(): void {
    this.filteredServices=this.services;
    
  }
  filterServices(event: any): void{
    if (event && event.target && event.target.value) {
      this.filteredServices = this.services.filter((service:any) =>
        ((service.name ).toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ) 
      );
    } else {
      this.filteredServices = this.services;
    }

  }

}
