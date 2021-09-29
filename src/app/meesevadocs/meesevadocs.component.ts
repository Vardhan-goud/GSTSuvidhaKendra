import { Component, OnInit } from '@angular/core';
import {WebservicesdataService} from '../webservicesdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meesevadocs',
  templateUrl: './meesevadocs.component.html',
  styleUrls: ['./meesevadocs.component.css']
})
export class MeesevadocsComponent implements OnInit {
   filesArray:any = [];
   docName:string = "";
   reqDocs:any;
  constructor(public webServicesDataService:WebservicesdataService, public activatedRoute:ActivatedRoute) {
    this.filesArray = webServicesDataService.webServicesData;
    this.activatedRoute.params.subscribe((params)=>{
      this.docName=params.name;
      for(var service of this.filesArray){
         if(service.name == this.docName){
           this.reqDocs=service;
           break;
         }
      }

    })
   }
  

  ngOnInit(): void {
  }

}
