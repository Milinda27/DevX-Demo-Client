import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient, HttpParams } from '@angular/common/http';
import jsPDF from 'jspdf';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import DataSource from 'devextreme/data/data_source';

const URL = 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi';

const data = [
  {
    "OrderID": 10248,
    "CustomerID": "VINET",
    "EmployeeID": 5,
    "OrderDate": "2018-07-04T00:00:00",
    "RequiredDate": "2018-08-01T00:00:00",
    "ShippedDate": "2018-07-16T00:00:00",
    "ShipVia": 3,
    "Freight": 32.3800,
    "ShipName": "Vins et alcools Chevalier",
    "ShipAddress": "59 rue de l'Abbaye",
    "ShipCity": "Reims",
    "ShipRegion": null,
    "ShipPostalCode": "51100",
    "ShipCountry": "France",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10249,
    "CustomerID": "TOMSP",
    "EmployeeID": 6,
    "OrderDate": "2018-07-05T00:00:00",
    "RequiredDate": "2018-08-16T00:00:00",
    "ShippedDate": "2018-07-10T00:00:00",
    "ShipVia": 1,
    "Freight": 11.6100,
    "ShipName": "Toms Spezialitäten",
    "ShipAddress": "Luisenstr. 48",
    "ShipCity": "Münster",
    "ShipRegion": null,
    "ShipPostalCode": "44087",
    "ShipCountry": "Germany",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10250,
    "CustomerID": "HANAR",
    "EmployeeID": 4,
    "OrderDate": "2018-07-08T00:00:00",
    "RequiredDate": "2018-08-05T00:00:00",
    "ShippedDate": "2018-07-12T00:00:00",
    "ShipVia": 2,
    "Freight": 65.8300,
    "ShipName": "Hanari Carnes",
    "ShipAddress": "Rua do Paço, 67",
    "ShipCity": "Rio de Janeiro",
    "ShipRegion": "RJ",
    "ShipPostalCode": "05454-876",
    "ShipCountry": "Brazil",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10251,
    "CustomerID": "VICTE",
    "EmployeeID": 3,
    "OrderDate": "2018-07-08T00:00:00",
    "RequiredDate": "2018-08-05T00:00:00",
    "ShippedDate": "2018-07-15T00:00:00",
    "ShipVia": 1,
    "Freight": 41.3400,
    "ShipName": "Victuailles en stock",
    "ShipAddress": "2, rue du Commerce",
    "ShipCity": "Lyon",
    "ShipRegion": null,
    "ShipPostalCode": "69004",
    "ShipCountry": "France",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10252,
    "CustomerID": "SUPRD",
    "EmployeeID": 4,
    "OrderDate": "2018-07-09T00:00:00",
    "RequiredDate": "2018-08-06T00:00:00",
    "ShippedDate": "2018-07-11T00:00:00",
    "ShipVia": 2,
    "Freight": 51.3000,
    "ShipName": "Suprêmes délices",
    "ShipAddress": "Boulevard Tirou, 255",
    "ShipCity": "Charleroi",
    "ShipRegion": null,
    "ShipPostalCode": "B-6000",
    "ShipCountry": "Belgium",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10253,
    "CustomerID": "HANAR",
    "EmployeeID": 3,
    "OrderDate": "2018-07-10T00:00:00",
    "RequiredDate": "2018-07-24T00:00:00",
    "ShippedDate": "2018-07-16T00:00:00",
    "ShipVia": 2,
    "Freight": 58.1700,
    "ShipName": "Hanari Carnes",
    "ShipAddress": "Rua do Paço, 67",
    "ShipCity": "Rio de Janeiro",
    "ShipRegion": "RJ",
    "ShipPostalCode": "05454-876",
    "ShipCountry": "Brazil",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10254,
    "CustomerID": "CHOPS",
    "EmployeeID": 5,
    "OrderDate": "2018-07-11T00:00:00",
    "RequiredDate": "2018-08-08T00:00:00",
    "ShippedDate": "2018-07-23T00:00:00",
    "ShipVia": 2,
    "Freight": 22.9800,
    "ShipName": "Chop-suey Chinese",
    "ShipAddress": "Hauptstr. 31",
    "ShipCity": "Bern",
    "ShipRegion": null,
    "ShipPostalCode": "3012",
    "ShipCountry": "Switzerland",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10255,
    "CustomerID": "RICSU",
    "EmployeeID": 9,
    "OrderDate": "2018-07-12T00:00:00",
    "RequiredDate": "2018-08-09T00:00:00",
    "ShippedDate": "2018-07-15T00:00:00",
    "ShipVia": 3,
    "Freight": 148.3300,
    "ShipName": "Richter Supermarkt",
    "ShipAddress": "Starenweg 5",
    "ShipCity": "Genève",
    "ShipRegion": null,
    "ShipPostalCode": "1204",
    "ShipCountry": "Switzerland",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10256,
    "CustomerID": "WELLI",
    "EmployeeID": 3,
    "OrderDate": "2018-07-15T00:00:00",
    "RequiredDate": "2018-08-12T00:00:00",
    "ShippedDate": "2018-07-17T00:00:00",
    "ShipVia": 2,
    "Freight": 13.9700,
    "ShipName": "Wellington Importadora",
    "ShipAddress": "Rua do Mercado, 12",
    "ShipCity": "Resende",
    "ShipRegion": "SP",
    "ShipPostalCode": "08737-363",
    "ShipCountry": "Brazil",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10257,
    "CustomerID": "HILAA",
    "EmployeeID": 4,
    "OrderDate": "2018-07-16T00:00:00",
    "RequiredDate": "2018-08-13T00:00:00",
    "ShippedDate": "2018-07-22T00:00:00",
    "ShipVia": 3,
    "Freight": 81.9100,
    "ShipName": "HILARION-Abastos",
    "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
    "ShipCity": "San Cristóbal",
    "ShipRegion": "Táchira",
    "ShipPostalCode": "5022",
    "ShipCountry": "Venezuela",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10258,
    "CustomerID": "ERNSH",
    "EmployeeID": 1,
    "OrderDate": "2018-07-17T00:00:00",
    "RequiredDate": "2018-08-14T00:00:00",
    "ShippedDate": "2018-07-23T00:00:00",
    "ShipVia": 1,
    "Freight": 140.5100,
    "ShipName": "Ernst Handel",
    "ShipAddress": "Kirchgasse 6",
    "ShipCity": "Graz",
    "ShipRegion": null,
    "ShipPostalCode": "8010",
    "ShipCountry": "Austria",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10259,
    "CustomerID": "CENTC",
    "EmployeeID": 4,
    "OrderDate": "2018-07-18T00:00:00",
    "RequiredDate": "2018-08-15T00:00:00",
    "ShippedDate": "2018-07-25T00:00:00",
    "ShipVia": 3,
    "Freight": 3.2500,
    "ShipName": "Centro comercial Moctezuma",
    "ShipAddress": "Sierras de Granada 9993",
    "ShipCity": "México D.F.",
    "ShipRegion": null,
    "ShipPostalCode": "05022",
    "ShipCountry": "Mexico",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10260,
    "CustomerID": "OTTIK",
    "EmployeeID": 4,
    "OrderDate": "2018-07-19T00:00:00",
    "RequiredDate": "2018-08-16T00:00:00",
    "ShippedDate": "2018-07-29T00:00:00",
    "ShipVia": 1,
    "Freight": 55.0900,
    "ShipName": "Ottilies Käseladen",
    "ShipAddress": "Mehrheimerstr. 369",
    "ShipCity": "Köln",
    "ShipRegion": null,
    "ShipPostalCode": "50739",
    "ShipCountry": "Germany",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10261,
    "CustomerID": "QUEDE",
    "EmployeeID": 4,
    "OrderDate": "2018-07-19T00:00:00",
    "RequiredDate": "2018-08-16T00:00:00",
    "ShippedDate": "2018-07-30T00:00:00",
    "ShipVia": 2,
    "Freight": 3.0500,
    "ShipName": "Que Delícia",
    "ShipAddress": "Rua da Panificadora, 12",
    "ShipCity": "Rio de Janeiro",
    "ShipRegion": "RJ",
    "ShipPostalCode": "02389-673",
    "ShipCountry": "Brazil",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10262,
    "CustomerID": "RATTC",
    "EmployeeID": 8,
    "OrderDate": "2018-07-22T00:00:00",
    "RequiredDate": "2018-08-19T00:00:00",
    "ShippedDate": "2018-07-25T00:00:00",
    "ShipVia": 3,
    "Freight": 48.2900,
    "ShipName": "Rattlesnake Canyon Grocery",
    "ShipAddress": "2817 Milton Dr.",
    "ShipCity": "Albuquerque",
    "ShipRegion": "NM",
    "ShipPostalCode": "87110",
    "ShipCountry": "USA",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10263,
    "CustomerID": "ERNSH",
    "EmployeeID": 9,
    "OrderDate": "2018-07-23T00:00:00",
    "RequiredDate": "2018-08-20T00:00:00",
    "ShippedDate": "2018-07-31T00:00:00",
    "ShipVia": 3,
    "Freight": 146.0600,
    "ShipName": "Ernst Handel",
    "ShipAddress": "Kirchgasse 6",
    "ShipCity": "Graz",
    "ShipRegion": null,
    "ShipPostalCode": "8010",
    "ShipCountry": "Austria",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10264,
    "CustomerID": "FOLKO",
    "EmployeeID": 6,
    "OrderDate": "2018-07-24T00:00:00",
    "RequiredDate": "2018-08-21T00:00:00",
    "ShippedDate": "2018-08-23T00:00:00",
    "ShipVia": 3,
    "Freight": 3.6700,
    "ShipName": "Folk och fä HB",
    "ShipAddress": "Åkergatan 24",
    "ShipCity": "Bräcke",
    "ShipRegion": null,
    "ShipPostalCode": "S-844 67",
    "ShipCountry": "Sweden",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10265,
    "CustomerID": "BLONP",
    "EmployeeID": 2,
    "OrderDate": "2018-07-25T00:00:00",
    "RequiredDate": "2018-08-22T00:00:00",
    "ShippedDate": "2018-08-12T00:00:00",
    "ShipVia": 1,
    "Freight": 55.2800,
    "ShipName": "Blondel père et fils",
    "ShipAddress": "24, place Kléber",
    "ShipCity": "Strasbourg",
    "ShipRegion": null,
    "ShipPostalCode": "67000",
    "ShipCountry": "France",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10266,
    "CustomerID": "WARTH",
    "EmployeeID": 3,
    "OrderDate": "2018-07-26T00:00:00",
    "RequiredDate": "2018-09-06T00:00:00",
    "ShippedDate": "2018-07-31T00:00:00",
    "ShipVia": 3,
    "Freight": 25.7300,
    "ShipName": "Wartian Herkku",
    "ShipAddress": "Torikatu 38",
    "ShipCity": "Oulu",
    "ShipRegion": null,
    "ShipPostalCode": "90110",
    "ShipCountry": "Finland",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10267,
    "CustomerID": "FRANK",
    "EmployeeID": 4,
    "OrderDate": "2018-07-29T00:00:00",
    "RequiredDate": "2018-08-26T00:00:00",
    "ShippedDate": "2018-08-06T00:00:00",
    "ShipVia": 1,
    "Freight": 208.5800,
    "ShipName": "Frankenversand",
    "ShipAddress": "Berliner Platz 43",
    "ShipCity": "München",
    "ShipRegion": null,
    "ShipPostalCode": "80805",
    "ShipCountry": "Germany",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10268,
    "CustomerID": "GROSR",
    "EmployeeID": 8,
    "OrderDate": "2018-07-30T00:00:00",
    "RequiredDate": "2018-08-27T00:00:00",
    "ShippedDate": "2018-08-02T00:00:00",
    "ShipVia": 3,
    "Freight": 66.2900,
    "ShipName": "GROSELLA-Restaurante",
    "ShipAddress": "5ª Ave. Los Palos Grandes",
    "ShipCity": "Caracas",
    "ShipRegion": "DF",
    "ShipPostalCode": "1081",
    "ShipCountry": "Venezuela",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10269,
    "CustomerID": "WHITC",
    "EmployeeID": 5,
    "OrderDate": "2018-07-31T00:00:00",
    "RequiredDate": "2018-08-14T00:00:00",
    "ShippedDate": "2018-08-09T00:00:00",
    "ShipVia": 1,
    "Freight": 4.5600,
    "ShipName": "White Clover Markets",
    "ShipAddress": "1029 - 12th Ave. S.",
    "ShipCity": "Seattle",
    "ShipRegion": "WA",
    "ShipPostalCode": "98124",
    "ShipCountry": "USA",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
  {
    "OrderID": 10270,
    "CustomerID": "WARTH",
    "EmployeeID": 1,
    "OrderDate": "2018-08-01T00:00:00",
    "RequiredDate": "2018-08-29T00:00:00",
    "ShippedDate": "2018-08-02T00:00:00",
    "ShipVia": 1,
    "Freight": 136.5400,
    "ShipName": "Wartian Herkku",
    "ShipAddress": "Torikatu 38",
    "ShipCity": "Oulu",
    "ShipRegion": null,
    "ShipPostalCode": "90110",
    "ShipCountry": "Finland",
    "Customer": null,
    "Employee": null,
    "Shipper": null
  },
];

const customerData = [
  {
    "Value": "ALFKI",
    "Text": "Alfreds Futterkiste (Germany)"
  },
  {
    "Value": "ANATR",
    "Text": "Ana Trujillo Emparedados y helados (Mexico)"
  },
  {
    "Value": "ANTON",
    "Text": "Antonio Moreno Taquería (Mexico)"
  },
  {
    "Value": "AROUT",
    "Text": "Around the Horn (United Kingdom)"
  },
  {
    "Value": "BERGS",
    "Text": "Berglunds snabbköp (Sweden)"
  },
  {
    "Value": "BLAUS",
    "Text": "Blauer See Delikatessen (Germany)"
  },
  {
    "Value": "BLONP",
    "Text": "Blondesddsl père et fils (France)"
  },
  {
    "Value": "BOLID",
    "Text": "Bólido Comidas preparadas (Spain)"
  },
  {
    "Value": "BONAP",
    "Text": "Bon app' (France)"
  },
  {
    "Value": "BOTTM",
    "Text": "Bottom-Dollar Markets (Canada)"
  },
  {
    "Value": "BSBEV",
    "Text": "B's Beverages (United Kingdom)"
  },
  {
    "Value": "CACTU",
    "Text": "Cactus Comidas para llevar (Argentina)"
  },
  {
    "Value": "CENTC",
    "Text": "Centro comercial Moctezuma (Mexico)"
  },
  {
    "Value": "CHOPS",
    "Text": "Chop-suey Chinese (Switzerland)"
  },
  {
    "Value": "COMMI",
    "Text": "Comércio Mineiro (Brazil)"
  },
  {
    "Value": "CONSH",
    "Text": "Consolidated Holdings (United Kingdom)"
  },
  {
    "Value": "WANDK",
    "Text": "Die Wandernde Kuh (Germany)"
  },
  {
    "Value": "DRACD",
    "Text": "Drachenblut Delikatessen (Germany)"
  },
  {
    "Value": "DUMON",
    "Text": "Du monde entier (France)"
  },
  {
    "Value": "EASTC",
    "Text": "Eastern Connection (United Kingdom)"
  },
  {
    "Value": "ERNSH",
    "Text": "Ernst Handel (Austria)"
  },
  {
    "Value": "FAMIA",
    "Text": "Familia Arquibaldo (Brazil)"
  },
  {
    "Value": "FISSA",
    "Text": "FISSA Fabrica Inter. Salchichas S.A. (Spain)"
  },
  {
    "Value": "FOLIG",
    "Text": "Folies gourmandes (France)"
  },
  {
    "Value": "FOLKO",
    "Text": "Folk och fä HB (Sweden)"
  },
  {
    "Value": "FRANR",
    "Text": "France restauration (France)"
  },
  {
    "Value": "FRANS",
    "Text": "Franchi S.p.A. (Italy)"
  },
  {
    "Value": "FRANK",
    "Text": "Frankenversand (Germany)"
  },
  {
    "Value": "FURIB",
    "Text": "Furia Bacalhau e Frutos do Mar (Portugal)"
  },
  {
    "Value": "GALED",
    "Text": "Galería del gastrónomo (Spain)"
  },
  {
    "Value": "GODOS",
    "Text": "Godos Cocina Típica (Spain)"
  },
  {
    "Value": "GOURL",
    "Text": "Gourmet Lanchonetes (Brazil)"
  },
  {
    "Value": "GREAL",
    "Text": "Great Lakes Food Market (USA)"
  },
  {
    "Value": "GROSR",
    "Text": "GROSELLA-Restaurante (Venezuela)"
  },
  {
    "Value": "HANAR",
    "Text": "Hanari Carnes (Brazil)"
  },
  {
    "Value": "HILAA",
    "Text": "HILARION-Abastos (Venezuela)"
  },
  {
    "Value": "HUNGC",
    "Text": "Hungry Coyote Import Store (USA)"
  },
  {
    "Value": "HUNGO",
    "Text": "Hungry Owl All-Night Grocers (Ireland)"
  },
  {
    "Value": "ISLAT",
    "Text": "Island Trading (United Kingdom)"
  },
  {
    "Value": "KOENE",
    "Text": "Königlich Essen (Germany)"
  },
  {
    "Value": "LACOR",
    "Text": "La corne d'abondance (France)"
  },
  {
    "Value": "LAMAI",
    "Text": "La maison d'Asie (France)"
  },
  {
    "Value": "LAUGB",
    "Text": "Laughing Bacchus Wine Cellars (Canada)"
  },
  {
    "Value": "LAZYK",
    "Text": "Lazy K Kountry Store (USA)"
  },
  {
    "Value": "LEHMS",
    "Text": "Lehmanns Marktstand (Germany)"
  },
  {
    "Value": "LETSS",
    "Text": "Let's Stop N Shop (USA)"
  },
  {
    "Value": "LILAS",
    "Text": "LILA-Supermercado (Venezuela)"
  },
  {
    "Value": "LINOD",
    "Text": "LINO-Delicateses (Venezuela)"
  },
  {
    "Value": "LONEP",
    "Text": "Lonesome Pine Restaurant (USA)"
  },
  {
    "Value": "MAGAA",
    "Text": "Magazzini Alimentari Riuniti (Italy)"
  },
  {
    "Value": "MAISD",
    "Text": "Maison Dewey (Belgium)"
  },
  {
    "Value": "MEREP",
    "Text": "Mère Paillarde (Canada)"
  },
  {
    "Value": "MORGK",
    "Text": "Morgenstern Gesundkost (Germany)"
  },
  {
    "Value": "NORTS",
    "Text": "North/South (United Kingdom)"
  },
  {
    "Value": "OCEAN",
    "Text": "Océano Atlántico Ltda. (Argentina)"
  },
  {
    "Value": "OLDWO",
    "Text": "Old World Delicatessen (USA)"
  },
  {
    "Value": "OTTIK",
    "Text": "Ottilies Käseladen (Germany)"
  },
  {
    "Value": "PARIS",
    "Text": "Paris spécialités (France)"
  },
  {
    "Value": "PERIC",
    "Text": "Pericles Comidas clásicas (Mexico)"
  },
  {
    "Value": "PICCO",
    "Text": "Piccolo und mehr (Austria)"
  },
  {
    "Value": "PRINI",
    "Text": "Princesa Isabel Vinhos (Portugal)"
  },
  {
    "Value": "QUEDE",
    "Text": "Que Delícia (Brazil)"
  },
  {
    "Value": "QUEEN",
    "Text": "Queen Cozinha (Brazil)"
  },
  {
    "Value": "QUICK",
    "Text": "QUICK-Stop (Germany)"
  },
  {
    "Value": "RANCH",
    "Text": "Rancho grande (Argentina)"
  },
  {
    "Value": "RATTC",
    "Text": "Rattlesnake Canyon Grocery (USA)"
  },
  {
    "Value": "REGGC",
    "Text": "Reggiani Caseifici (Italy)"
  },
  {
    "Value": "RICAR",
    "Text": "Ricardo Adocicados (Brazil)"
  },
  {
    "Value": "RICSU",
    "Text": "Richter Supermarkt (Switzerland)"
  },
  {
    "Value": "ROMEY",
    "Text": "Romero y tomillo (Spain)"
  },
  {
    "Value": "SANTG",
    "Text": "Santé Gourmet (Norway)"
  },
  {
    "Value": "SAVEA",
    "Text": "Save-a-lot Markets (USA)"
  },
  {
    "Value": "SEVES",
    "Text": "Seven Seas Imports (United Kingdom)"
  },
  {
    "Value": "SIMOB",
    "Text": "Simons bistro (Denmark)"
  },
  {
    "Value": "SPECD",
    "Text": "Spécialités du monde (France)"
  },
  {
    "Value": "SPLIR",
    "Text": "Split Rail Beer & Ale (USA)"
  },
  {
    "Value": "SUPRD",
    "Text": "Suprêmes délices (Belgium)"
  },
  {
    "Value": "THEBI",
    "Text": "The Big Cheese (USA)"
  },
  {
    "Value": "THECR",
    "Text": "The Cracker Box (USA)"
  },
  {
    "Value": "TOMSP",
    "Text": "Toms Spezialitäten (Germany)"
  },
  {
    "Value": "TORTU",
    "Text": "Tortuga Restaurante (Mexico)"
  },
  {
    "Value": "TRADH",
    "Text": "Tradição Hipermercados (Brazil)"
  },
  {
    "Value": "TRAIH",
    "Text": "Trail's Head Gourmet Provisioners (USA)"
  },
  {
    "Value": "VAFFE",
    "Text": "Vaffeljernet (Denmark)"
  },
  {
    "Value": "VICTE",
    "Text": "Victuailles en stock (France)"
  },
  {
    "Value": "VINET",
    "Text": "Vins et alcools Chevalier (France)"
  },
  {
    "Value": "WARTH",
    "Text": "Wartian Herkku (Finland)"
  },
  {
    "Value": "WELLI",
    "Text": "Wellington Importadora (Brazil)"
  },
  {
    "Value": "WHITC",
    "Text": "White Clover Markets (USA)"
  },
  {
    "Value": "WILMK",
    "Text": "Wilman Kala (Finland)"
  },
  {
    "Value": "WOLZA",
    "Text": "Wolski  Zajazd (Poland)"
  }
];

const shippersData = [
  {
    "Value": 3,
    "Text": "Federal Shipping"
  },
  {
    "Value": 1,
    "Text": "Speedy Express"
  },
  {
    "Value": 2,
    "Text": "United Package"
  }
];

@Component({
  selector: 'app-data-grid-customization',
  templateUrl: './data-grid-customization.component.html',
  styleUrls: ['./data-grid-customization.component.scss']
})

export class DataGridCustomizationComponent implements OnInit {
  dataForSortAndFilter: any;
  customerDataForSortAndFilter: any;
  shipperDataForSortAndFilter: any;
  dataSource: CustomStore;

  customersData: {store:CustomStore,paginate:boolean;}

  shippersData: any;

  countryFilter:any;
  freightFilter:any;

  constructor( 
    private http: HttpClient
   ) { 
    this.dataForSortAndFilter = data;
    this.customerDataForSortAndFilter = customerData;
    this.shipperDataForSortAndFilter = shippersData;

    this.dataSource = new CustomStore({
      key: 'OrderID',
      load: () => this.sendRequest(`${URL}/Orders`,'GET',{}),
      insert: (values) => this.sendRequest(`${URL}/InsertOrder`, 'POST', {
        values: JSON.stringify(values),
      }),
      update: (key, values) => this.sendRequest(`${URL}/UpdateOrder`, 'PUT', {
        key,
        values: JSON.stringify(values),
      }),
      remove: (key) => this.sendRequest(`${URL}/DeleteOrder`, 'DELETE', {
        key,
      }),
    });

    this.customersData = {
      paginate: false,
      store: new CustomStore({
        key: 'Value',
        loadMode: 'raw',
        load: () => this.sendRequest(`${URL}/CustomersLookup`,'GET',{}),
      }),
    };

    this.shippersData = new CustomStore({
      key: 'Value',
      loadMode: 'raw',
      load: () => this.sendRequest(`${URL}/ShippersLookup`,'GET',{}),
    });

    this.countryFilter = [
      {text:"France",value:"france"},
      {text:"Germany",value:"germany"},
      {text:"Brazil",value:"brazil"},
      {text:"Switzerland",value:"switzerland"},
    ];

    this.freightFilter = [
      {text: "More than 50", value:[]}
    ]
  }

  sendRequest(url: string, method = 'GET', data: {key?: number, values?:string}): any {
    // this.logRequest(method, url, data);

    const httpParams = new HttpParams({ fromObject: data });
    const httpOptions = { withCredentials: true, body: httpParams };
    let result;

    switch (method) {
      case 'GET':
        result = this.http.get(url, httpOptions);
        break;
      case 'PUT':
        result = this.http.put(url, httpParams, httpOptions);
        break;
      case 'POST':
        result = this.http.post(url, httpParams, httpOptions);
        break;
      case 'DELETE':
        result = this.http.delete(url, httpOptions);
        break;
    }

    

    return result?.toPromise()
    .then((data: any) => (method === 'GET' ? data.data : data))
    .catch((e) => {
      throw e && e.error && e.error.Message;
    });;
  }

  onExporting($event:any) :void{
    const doc = new jsPDF();
    exportDataGrid({
      jsPDFDocument: doc,
      component:$event.component
    }).then(() => {
      doc.save('Companies.pdf');
    }).catch(err =>{
      throw err;
    });
  }


  ngOnInit(): void {
  }

}
