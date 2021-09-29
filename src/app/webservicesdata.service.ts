import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebservicesdataService {
  public webServicesData = [
    {
      "name":"Income Proofs",
      "reqDocs":[
        `Aadhar Card Student`,
        `Aadhar Card Father/Mother`,
        `Ration Card(Online Print)`,
        `Current Bill/Gas Bill`,
        `Bonafide Or Marks Memo`,
        `Affidavit`
      ]
    },
    {
      "name":"Caste Proofs",
      "reqDocs":[
        `Aadhar Card Student`,
        `Aadhar Card Father/Mother`,
        `Ration Card(Online Print)`,
        `Current Bill/Gas Bill`,
        `Bonafide Or Marks Memo`,
        `Previous Caste Proof`,
        `Affidavit`,
      ]
    },
    {
      "name":"OBC Proofs",
      "reqDocs":[
        `Aadhar Card Student`,
        `Aadhar Card Father/Mother`,
        `Ration Card(Online Print)`,
        `Current Bill/Gas Bill`,
        `Bonafide Or Marks Memo`,
        `Affidavit`,
        `Previous Caste Proof`,
        
      ]
    },
    {
      "name":"Residence Proofs",
      "reqDocs":[
        `Aadhar Card Student`,
        `Aadhar Card Father/Mother`,
        `Ration Card(Online Print)`,
        `Current Bill/Gas Bill`,
        `Bonafide Or Marks Memo`,
        `Affidavit`,
      ]
    },
    {
      "name":"EBC Proofs",
      "reqDocs":[
        `Aadhar Card Student`,
        `Aadhar Card Father/Mother`,
        `Ration Card(Online Print)`,
        `Current Bill/Gas Bill`,
        `Bonafide Or Marks Memo`,
        `Affidavit`,
      ]
    }
  ]
  constructor() { }
}
