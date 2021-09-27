import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public docsData = [
    {
      "name": "GST-Return-Regular",
      "reqDocs": [
        "Invoices Details of Sales in Excel Format or Soft Copy of Invoices",
        "Invoices Details of Purchases in Excel Format or Soft Copy of Invoices ",
        "Login Id & Password of GSTN Portal"
      ]
    },
    {
      "name": "GST-Return-Composition",
      "reqDocs": [
        "Invoice Details of Sales in Excel Sheet or Amount of Sales",
        "Login Id & Password of GSTN Portal"
      ]
    },
    {
      "name": "GST-Registration-Private Limited",
      "reqDocs": [
        "PAN of Company",
        "Pan of All Directors",
        "AADHAR of All Directors",
        "PASSPORT SIZE PHOTO",
        "EMAIL ID",
        "TRADE NAME",
        "MOBILE NUMBER OF AUTHORIZED SIGNATORY SHOULD BE LINKED WITH AADHAR",
        "INCORPORATION CERTIFICATE",
        "MOA & AOA",
        "OTHER REGISTRATION CERTIFICATE IN CASE OF SELLING FOOD PRODUCT OR MEDICINE",
        "AUTHORISATION LETTER OF AUTHORIZED SIGNATORY",
        "NATURE OF BUSINESS",
        "NAME OR DESCRIPTION OF GOODS OR SERVICE",
        "BANK DETAILS DOCUMENTS (Like First Page of Bank Passbook, Bank Statement, Cancelled Cheque)",
        "Address Proof of Principle place of Business as per case:- i) RENT AGREEMENT/NOC/BOTH WITH OWNERSHIP DOCUEMENTS (LIKE ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY,PROPERTY PAPER, ETC. (In Case of Rented) ii) ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY,  PROPERTY PAPER, ETC (In Case of OWN, If Owner is Taxpayer) iii) ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY, PROPERTY PAPER, ETC  with NOC (In Case of OWN, If Owner is Other than Taxpayer)"
      ]
    },
    {
      "name": "GST-Registration-LLP/Partnership",
      "reqDocs": [
        "PAN Card of Firm",
        "PAN Card of All Partners",
        "AADHAR Card of All Partners",
        "PASSPORT SIZE PHOTO",
        "EMAIL ID",
        "TRADE NAME",
        "MOBILE NUMBER OF AUTHORIZED SIGNATORY SHOULD BE LINKED WITH AADHAR",
        "OTHER REGISTRATION CERTIFICATE IN CASE OF SELLING FOOD PRODUCT OR MEDICINE",
        "AUTHORISATION LETTER OF AUTHORIZED SIGNATORY",
        "Address Proof of Principle place of Business as per case:- i) RENT AGREEMENT/NOC/BOTH WITH OWNERSHIP DOCUMENTS (LIKE ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY, PROPERTY PAPER, ETC. (In Case of Rented) ii) ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY, PROPERTY PAPER, ETC (In Case of OWN, If Owner is Taxpayer) iii) ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY, PROPERTY PAPER, ETC  with NOC (In Case of OWN, If Owner is Other than Taxpayer)",
        "NATURE OF BUSINESS",
        "NAME OR DESCRIPTION OF GOODS OR SERVICE",
        "BANK DETAILS DOCUMENTS (Like First Page of Bank Passbook, Bank Statement, Cancelled Cheque"
      ]
    },
    {
      "name": "GST-Registration-Individual",
      "reqDocs": [
        "PAN",
        "AADHAR",
        "PASSPORT SIZE PHOTO",
        "EMAIL ID",
        "TRADE NAME",
        "MOBILE NUMBER (SHOULD BE LINKED WITH AADHAR )",
        "OTHER REGISTRATION CERTIFICATE IN CASE OF SELLING FOOD PRODUCT OR MEDICINE",
        `Address Proof of Principle place of Business as per case:-

      i) RENT AGREEMENT/NOC/BOTH WITH OWNERSHIP DOCUMENTS (LIKE
         ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY,
         PROPERTY PAPER, ETC. (In Case of Rented)

     ii) ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY, 
         PROPERTY PAPER, ETC (In Case of OWN, If Owner is Taxpayer)

    iii) ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY, 
         PROPERTY PAPER, ETC  with NOC (In Case of OWN, If Owner is Other
         than Taxpayer)`,

        "NATURE OF BUSINESS",
        "NAME OR DESCRIPTION OF GOODS OR SERVICE",
        "BANK DETAILS DOCUMENTS (Like First Page of Bank Passbook, Bank Statement, Cancelled Cheque",

      ]
    },
    {
      "name": "E-way Bill Registration",
      "reqDocs": [
        `GST Certificate`,
        `Registered Mobile and Email`,
      ]
    },
    {
      "name": `Package`,
      "reqDocs": [
        `Tax Invoice*`,
        `Party GST Certificate*`,
        `Transport Details or Vehicle Number`,
        `The Distance of Place of supply*`
      ]
    },
    {
      "name": "ITR1(For salaried person)",
      "reqDocs": [
        `PAN card.*`,
        `Aadhar Card *`,
        `Form -16 form Employers*`,
        `Bank Statement*`,
        `Chapter VI Deductions or Mediclaim Details`,
        `TDS detail (Form 26 AS)`,
        `PF/Tuition Fees/LIC/Home Loan Interest/Stamp Duty/Mutual Fund/Fixed Deposite`,
        `Other Income Details`,
        `User ID /Password (if Register Under Income Tax)*`,
        `Mobile no and Email ID*`,

      ]
    },
    {
      "name": "ITR( PYR)",
      "reqDocs": [
        `PAN card*`,
        `Aadhar Card*`,
        `Form -16 form Employers`,
        `Bank Statement*`,
        `TDS detail (Form 26 AS)`,
        `Chapter VI Deductions or Mediclaim details`,
        `Other Income details`,
        `User ID /Password (if Register Under Income Tax)*`,
        `Mobile no and Email Id*`
      ]
    },
    {
      "name": "ITR(Business Income)",
      "reqDocs": [
        `PAN card*`,
        `Aadhar Card`,
        `Name of business  and Nature of Business`,
        `Income and Expenditure details`,
        `TDS detail (Form 26 AS)`,
        `Bank Statement*`,
        `Salary details. (if salary pain any worker/employee)`,
        `Chapter VI Deductions or medical details`,
        `Other Investment details`,
        `User Id /Password (if Register Under Income Tax)*`,
        `Mobile no and Email Id`
      ]
    },
    {
      "name": `ITR(Capital Gain)`,
      "reqDocs": [
        `PAN card*`,
        `Aadhar Card`,
        `Date of purchase of Capital Assets*`,
        `Income From Capital Assets Details*`,
        `Details of investment in Capital Gains Accounts Scheme`,
        `TDS detail (Form 26 AS)`,
        `Re-investment purchase deed for claiming exemption from Capital Gains`,
        `Bank Statement*`,
        `Chapter VI Deductions or Mediclaim Details`,
        `Other Investment Details`,
        `User ID /Password (if Register Under Income Tax)*`,
        `Mobile no and Email ID*`,
      ]
    },
  ]

  constructor() { }
}
