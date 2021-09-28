import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-docs-req',
  templateUrl: './docs-req.component.html',
  styleUrls: ['./docs-req.component.css']
})
export class DocsReqComponent implements OnInit {
  docName:string="";
  reqFiles:any;
  services:any=[];
  constructor(public activatedRoute:ActivatedRoute,public dataService:DataService) {
    this.services=dataService.docsData;
    this.activatedRoute.params.subscribe((params)=>{
      this.docName=params.name;
      for(var service of this.services){
         if(service.name == this.docName){
           this.reqFiles=service;
           break;
         }
      }

    })
   }

  ngOnInit(): void {
  }

}
