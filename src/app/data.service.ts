import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public docsData = [
    {
      "name": 'GST-Return-Regular',
      "reqDocs": [
        'Invoices Details of Sales in Excel Format or Soft Copy of Invoices',
        'Invoices Details of Purchases in Excel Format or Soft Copy of Invoices ',
        'Login Id & Password of GSTN Portal',
      ],
    },
    {
      "name": 'GST-Return-Composition',
      "reqDocs": [
        'Invoice Details of Sales in Excel Sheet or Amount of Sales',
        'Login Id & Password of GSTN Portal',
      ],
    },
    {
      "name": 'GST-Registration-Private Limited',
      "reqDocs": [
        'PAN of Company',
        'Pan of All Directors',
        'AADHAR of All Directors',
        'PASSPORT SIZE PHOTO',
        'EMAIL ID',
        'TRADE NAME',
        'MOBILE NUMBER OF AUTHORIZED SIGNATORY SHOULD BE LINKED WITH AADHAR',
        'INCORPORATION CERTIFICATE',
        'MOA & AOA',
        'OTHER REGISTRATION CERTIFICATE IN CASE OF SELLING FOOD PRODUCT OR MEDICINE',
        'AUTHORISATION LETTER OF AUTHORIZED SIGNATORY',
        'NATURE OF BUSINESS',
        'NAME OR DESCRIPTION OF GOODS OR SERVICE',
        'BANK DETAILS DOCUMENTS (Like First Page of Bank Passbook, Bank Statement, Cancelled Cheque)',
        'Address Proof of Principle place of Business as per case:- i) RENT AGREEMENT/NOC/BOTH WITH OWNERSHIP DOCUEMENTS (LIKE ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY,PROPERTY PAPER, ETC. (In Case of Rented) ii) ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY,  PROPERTY PAPER, ETC (In Case of OWN, If Owner is Taxpayer) iii) ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY, PROPERTY PAPER, ETC  with NOC (In Case of OWN, If Owner is Other than Taxpayer)',
      ],
    },
    {
      "name": 'GST-Registration-Partnership',
      "reqDocs": [
        'PAN Card of Firm',
        'PAN Card of All Partners',
        'AADHAR Card of All Partners',
        'PASSPORT SIZE PHOTO',
        'EMAIL ID',
        'TRADE NAME',
        'MOBILE NUMBER OF AUTHORIZED SIGNATORY SHOULD BE LINKED WITH AADHAR',
        'OTHER REGISTRATION CERTIFICATE IN CASE OF SELLING FOOD PRODUCT OR MEDICINE',
        'AUTHORISATION LETTER OF AUTHORIZED SIGNATORY',
        'Address Proof of Principle place of Business as per case:- i) RENT AGREEMENT/NOC/BOTH WITH OWNERSHIP DOCUMENTS (LIKE ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY, PROPERTY PAPER, ETC. (In Case of Rented) ii) ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY, PROPERTY PAPER, ETC (In Case of OWN, If Owner is Taxpayer) iii) ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY, PROPERTY PAPER, ETC  with NOC (In Case of OWN, If Owner is Other than Taxpayer)',
        'NATURE OF BUSINESS',
        'NAME OR DESCRIPTION OF GOODS OR SERVICE',
        'BANK DETAILS DOCUMENTS (Like First Page of Bank Passbook, Bank Statement, Cancelled Cheque',
      ],
    },
    {
      "name": 'GST-Registration-Individual',
      "reqDocs": [
        'PAN',
        'AADHAR',
        'PASSPORT SIZE PHOTO',
        'EMAIL ID',
        'TRADE NAME',
        'MOBILE NUMBER (SHOULD BE LINKED WITH AADHAR )',
        'OTHER REGISTRATION CERTIFICATE IN CASE OF SELLING FOOD PRODUCT OR MEDICINE',
        `Address Proof of Principle place of Business as per case:-

      i) RENT AGREEMENT/NOC/BOTH WITH OWNERSHIP DOCUMENTS (LIKE
         ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY,
         PROPERTY PAPER, ETC. (In Case of Rented)

     ii) ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY, 
         PROPERTY PAPER, ETC (In Case of OWN, If Owner is Taxpayer)

    iii) ELECTRICITY BILL, PROPERTY TAX RECEIPT, MUNICIPAL KHATA COPY, 
         PROPERTY PAPER, ETC  with NOC (In Case of OWN, If Owner is Other
         than Taxpayer)`,

        'NATURE OF BUSINESS',
        'NAME OR DESCRIPTION OF GOODS OR SERVICE',
        'BANK DETAILS DOCUMENTS (Like First Page of Bank Passbook, Bank Statement, Cancelled Cheque',
      ],
    },
    {
      "name": 'E-way Bill Registration',
      "reqDocs": [`GST Certificate`, `Registered Mobile and Email`],
    },
    {
      "name": `Package`,
      "reqDocs": [
        `Tax Invoice*`,
        `Party GST Certificate*`,
        `Transport Details or Vehicle Number`,
        `The Distance of Place of supply*`,
      ],
    },
    {
      "name": 'ITR1(For salaried person)',
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
      ],
    },
    {
      "name": 'ITR( PYR)',
      "reqDocs": [
        `PAN card*`,
        `Aadhar Card*`,
        `Form -16 form Employers`,
        `Bank Statement*`,
        `TDS detail (Form 26 AS)`,
        `Chapter VI Deductions or Mediclaim details`,
        `Other Income details`,
        `User ID /Password (if Register Under Income Tax)*`,
        `Mobile no and Email Id*`,
      ],
    },
    {
      "name": 'ITR(Business Income)',
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
        `Mobile no and Email Id`,
      ],
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
      ],
    },
    {
      "name": 'ITR(Other Source)',
      "reqDocs": [
        `PAN card*`,
        `Aadhar Card`,
        `Income from other source details. (Lottery, horse riding, Puzzles, etc)`,
        `TDS detail (Form 26 AS)`,
        `Rent agreement for plant & machinery, building, etc. given on rent (if any)`,
        `Bank Statement*`,
        `Chapter VI Deductions or Mediclaim Details`,
        `Other investment details`,
        `User ID /Password (if Register Under Income Tax)*`,
        `Mobile no and Email id*`,
      ],
    },
    {
        "name":`TDS Return`,
        "reqDocs":[
          `PAN card/Pan Number`,
          `Tax payment challans (Self-assessment, advance tax, if you have deposited the same)`,
          `TDS certificates (if TDS has been deducted by other)`,
          `All Bank account information`,
        ],
    },
    {
      "name":"ITR (PYR Organization)",
      "reqDocs":[
        `PAN card.*`,
        `Aadhar Card`, 
        `Name of business  and nature`,
        `Income and expenditure details`,
        `TDS details (form 26 AS)`,
        `Bank Statement*`,
        `Salary details. (if salary pain any worker/employee)`,
        `Chapter VI Deductions or medical details`,
        `Other income details`,
        `User ID /Password (if register under Income Tax)*`,
        `Mobile no and Email Id*`,
        ],
    },
    {
        "name":"ITR2",
        "reqDocs":[

          `PAN Card`,
          `AADHAR Card`,
          `Form -16 form Employers* (In Case of Salary)`,
          `User ID /Password (if Register Under Income Tax)`,
          `Mobile no and Email id`,
          `Bank Statement*`,
          `TDS detail (Form 16/16A) (If Any)`,
          `Proof of Investment (Like PF/Tuition Fees/LIC/Home Loan Interest/Stamp Duty/Mutual Fund/Fixed Deposite/Mediclaim)`,
          `Date of purchase of Capital Assets*`,
          `Income From Capital Assets Details.*`,
          `Details of investment in Capital Gains Accounts Scheme`,
          `Re-investment purchase deed for claiming exemption from Capital Gains`,
          `PAN card of the Tenant if rent is paid to exceed Rs-1 lack*(In Case of Income from House Property)`,
          `Property address proof (In Case of Income from House Property)`,
          `Co-owner details (if the property is co-owned)`,
          `Interest certificate issued by the bank for a housing loan. (If House Loan Running)`,
          `Details of Agriculture Income (If Any)`,
          ],
    },
    {
      "name":"ITR3",
      "reqDocs":[
        `PAN card.*`,
        `Aadhar Card`, 
        `Name of business  and Nature of Business`,
        `Proof of Gross Turn Over of Business Like GST Return Copy (If Registered), Books of Accounts,etc.`,
        `Expenditure Details`,
        `TDS details (Form 16/16A)`,
        `Bank Statement*`,
        `Salary details. (In Case of Salary Income)`,
        `Proof of Investment (Like PF/Tuition Fees/LIC/Home Loan Interest/Stamp Duty/Mutual Fund/Fixed Deposite/Mediclaim,etc.)`,
        `Details of Income from Other Sources.`,
        `User Id /Password (if Register Under Income Tax)*`,
        `Mobile no and Email Id*"`,
        `GST Certificate (If Registered)`,
        `Details of Agricultural Income (If Any)`,
        ],
    },
    {
      "name":"ITR4",
      "reqDocs":[

        `PAN card.*`,
        `Aadhar Card`, 
        `Name of business  and Nature of Business`,
        `Proof of Gross Turn Over of Business Like GST Return Copy (If Registered), Books of Accounts,etc.`,
        `Expenditure Details`,
        `TDS details (Form 16/16A)`,
        `Bank Statement*`,
        `Salary details. (In Case of Salary Income)`,
        `Proof of Investment (Like PF/Tuition Fees/LIC/Home Loan Interest/Stamp Duty/Mutual Fund/Fixed Deposite/Mediclaim, etc.)`,
        `Details of Income from Other Sources.`,
        `User Id /Password (if Register Under Income Tax)*`,
        `Mobile no and Email Id*"`,
        `GST Certificate (If Registered)`,
        ],
    },
    {
      "name":`Digital Signature Certificate Class-3/1 Y/Sig`,
      "reqDocs":[
        `Pan Card`,
        `Aadhar Card`, 
        `Driving License/Voter ID Card`,
        `Passport Size Photograph`,
        `GST Registration Certificate`, 
        `Bank Statement`,
        `All Documents should be self-attested`,
    ]
    },
    {
     "name":`Digital Signature Certificate Class-3/1 Y/Sig`,
     "reqDocs":[
      `Pan Card`,
  `Aadhar Card`, 
  `Driving License/Voter ID Card`,
  `Passport Size Photograph`,
  `GST Registration Certificate`, 
  `Bank Statement`,
  `All Documents should be self-attested`,
  ]
    },
    {
      "name":"[Digital Signature Certificate Class-3/1 Y/Comb",
      "reqDocs":[
        `Pan Card`,
    `Aadhar Card`, 
    `Driving License/Voter ID Card`,
    `Passport Size Photograph`,
    `GST Registration Certificate`, 
    `Bank Statement`,
    `All Documents should be self-attested`,
    ],
    },
    {
      "name":"Digital Signature Certificate Class-3/2 Y/Comb",
      "reqDocs":[
        `Pan Card`,
    `Aadhar Card`,
    `Driving License/Voter ID Card`,
    `Passport Size Photograph`,
    `GST Registration Certificate`, 
    `Bank Statement`,
    `All Documents should be self-attested`,
    ]
    },
    {
      "name":"Digital Signature Certificate Class-3/2 Y/Comb Sig Org",
      "reqDocs":[
        `Letter From Organization`,
        `Copy of Organization pan card`, 
        `Copy of Bank Statement`, 
        `Copy of Incorporation Certificate`,
        `Copy Of GST Registration Certificate`,
        `Proof of Authorized Signatory`,
        `Pan card, aadhar card of Authorized Signatory`,
        `Partnership Deed (in case of a partnership)`,
        `LLP Agreement containing the list of partners(in case of LLP)`,
        ]
    },

    {
       "name":"Digital Signature Certificate 3/1 Y/Comb Sig Org",
       "reqDocs":[
        `Letter From Organization`,
        `Copy of Organization pan card`, 
        `Copy of Bank Statement`,
        `Copy of Incorporation Certificate`,
        `Copy Of GST Registration Certificate`,
        `Proof of Authorized Signatory`,
        `Pan card, aadhar card of Authorized Signatory`,
        `Partnership Deed (in case of a partnership)`,
        `LLP Agreement containing the list of partners(in case of LLP)`,
        ]
    },
    {
      "name":"Digital Signature Certificate Class-3/2 Y/Comb Sign Org",
      "reqDocs":[
        `Letter From Organization`,
        `Copy of Organization pan card`, 
        `Copy of Bank Statement `,
        `Copy of Incorporation Certificate`,
        `Copy Of GST Registration Certificate`,
        `Proof of Authorized Signatory`,
        `Pan card, aadhar card of Authorized Signatory`,
        `Partnership Deed (in case of a partnership)`,
        `LLP Agreement containing the list of partners(in case of LLP)`,
        ]
    },
    {
      "name":"Company Formation-LLP",
      "reqDocs":[
        `PAN Card of the Partners.*`,
        `Address Proof of the Partners.(DL/Voter id/Passport)*`,
        `Utility Bill of the proposed Registered Office of the LLP*`,
        `No-Objection Certificate from the Landlord*`,
        `Rental Agreement Copy between the LLP and the Landlord*`,
        `Partnership Deed.*`,
        `Board Resolution form Authorized partners.*`,
        `Mobile no and email Id of the Partners.*`,
        ]
    },
    {
      "name":"Company Formation-Limited",
      "reqDocs":[
        `Address proof of All Members. (Driving Licence/voter id/Passport)*`,
        `Identity proof of All Members. (PAN if Indian nationals)*`,
        `Identity proof of All Members. (Passport if foreign nationals)`,
        `Registered office address.*`,
        `Bank Statement of Members`,
        `Lease agreement electricity bill (if Office is rented) (Latest month utility bill)*`,
        `NOC form landlord. (office is Own premises.)*`,
        `Obtaining a digital signature certificate of All partners*`,
        `Up to 2 name options can be given in 1 RUN name approval request.*`,
        `Board resolution authorizing investment in the company*`,
        `DIN of all partners`,
        ]
    },
    {
      "name":"Private Limited",
      "reqDocs":[
        `Address proof of All Members. (Driving Licence/voter id/Passport)*`,
        `Identity proof of All Members.(PAN if Indian nationals)*`,
        `Identity proof of All Members. (Passport if foreign nationals)`,
        `Registered office address.*`,
        `Bank Statement of Members`,
        `Lease agreement electricity bill (if Office is rented) (Latest month utility bill)*`,
        `NOC form the landlord. (office is Own premises.)*`,
        `Obtaining a digital signature certificate of All partners*`,
        `Up to 2 name options can be given in 1 RUN name approval request.*`,
        `Board resolution authorizing investment in the company*`,
        ]
    },
    {
      "name":"Accounting",
      "reqDocs":[
        `Cash Sale/Memo (sale and purchase )`,
        `Invoice and bill (sale invoice and purchase invoice )`,
        `Bank Receipt/Cash Receipt`,
        `Pay in slip`,
        `Bank Statement for the accounting period`,
        `Debit Note`,
        `Credit Note`,
        `Voucher`,
        ]
    },
    {
      "name":"Audit",
      "reqDocs":[
        `Last Year Balance sheet`,
        `Last Year ITR Return Copy`,
        `Income Tax Login Details`,
        `Bank Statement`,
        `GSTIN Login Details`,
        `Sale/Purchase details`,
        `Other Income details`,
        `Expenses Details with Bill/vouchers`,
        `Cash Receipt details`,
        ]
    },
    {
      "name":"TDS",
      "reqDocs":[

        `PAN card/Pan Number (Deductor)`,
        `TAN of Deductor (With TDS Portal Login)`,
        `PAN card/Pan Number (Deductee)`,
        `TDS Deducted Invoice Details`,
        `DSC `,
        `Tax payment challans (Self-assessment, if you have deposited the same)`,
        `All Bank account information`,
        `Official Address Proof (GST Certificate, Authorised Person Details)`,
        ]
    },
    {
      "name":`TradeMark(Trademark Registration Documents Required)`,
      "reqDocs":[ 
        
        `Pan Card`,
        `Aadhar Card`,
        `Copy of Logo`,
        `Trade name`,
        `Mobile No email id`,
        `Object of Business`,
        `Any Registration Certificate (Like GST Certificate, etc.)`,
        `MSME (For Private Limited company, LLP, Partnership, OPC, etc.)`,
        ]
    },
    {
      "name":"IEC Code",
      "reqDocs":[
        `Individual's or Firm's or Company's copy of PAN Card`,
        `Individual's voter id or Aadhar card or passport copy`,
        `Individuals or company's or firms cancel cheque copy of the current bank account`,
        `Copy of Rent Agreement or Electricity Bill Copy of the premise`,
        `Gst certificate`,
        ]
    },
    {
      "name":"New PAN Card",
      "reqDocs":[
        `Aadhar`,
        `Passport photo`,
        `Application Form`,
        ]
    },
    {
      "name":"Corrections in PAN Card",
      "reqDocs":[
        `Previous  PAN Card Xerox/PAN Number`,
        `Aadhar`,
        `Photos`,
        `Application Form`,
        ]
    },
    {
      "name":"DIN Registration",
      "reqDocs":[
        `KYC Documents`, 
        `DSC - Class - 2`,
        `Exiting Company Details`,
        ]
    },
    {
      "name":"Gem Registration",
      "reqDocs":[
        `Pan Card & Aadhar Card`,
        `Mobile Number & Email ID`,
        `GST Certificate`,
        `Bank Statement`, 
        `ITR Acknowledgment`,
        ]
    },
    {
      "name":"Shop Registration",
      "reqDocs":[
        `Pan Card*`,
        `Aadhar Card`, 
        `Trade Name and product & Service Description`,
        `Rent Agreement (If Office is Rented) (100 Rs stamp paper)*`,
        `No Objection Certificate (NOC) form landlord (100 Rs Stamp Paper)*`,
        `Electricity Bill*`,
        `Passport Size Photograph (Self Attested)*`,
        `Bank statement/Cancel Cheque (Having name of Taxpayers)*`,
        `Shop photo`, 
        `Shop Employee Details`,
        ]
    },
    {
      "name":"FSSAI Registration",
      "reqDocs":[
        `Pan Card & Aadhar Card`,
        `Mobile Number & Email ID`,
        `Nature Of Business`,
        `Declaration Letter`, 
        `GST Certificate if ( Register)`,
        `Photo (Proprietor)`,
        `Address Proof`,
        ]
    },
    {
      "name":"TAN– Individuals",
      "reqDocs":[
        `Pan Card`, 
        `Aadhar Card`,
        `Mobile Number`, 
        `Email Address`,
        ]
    },
    {
      "name":"TAN–Organisation",
      "reqDocs":[
        `Pan of Company`, 
        `Aadhar / Mob/ Email / Pan ( KYC Document Directors)`,
        `Incorporation Certificate ( PVT LTD)`,
        `Partnership Deed (Partnership)`,
        `GST Certificate`,
        ]
    },
    {
      "name":"Partnership Registration",
      "reqDocs":[
        `PAN Card of the Partners`,
        `Address Proof of the Partners (DL/Voter id/Passport)`,
        `Utility Bill of the proposed Registered Office`,
        `No-Objection Certificate from the Landlord`,
        `Rental Agreement Copy between the Partner and the Landlord`,
        `Partnership Deed`,
        `Bord Resolution form Authorized partners`,
        `Mobile no and email Id of the Partners`,
        ]
    }
  ];

  constructor() {}
}
