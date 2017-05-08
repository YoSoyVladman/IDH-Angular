'use strict';
const angular = require('angular');

export function idhServiceService() {
  // Service logic
  var services = {
    getStates: getStates
  };

  return services;


  function getStates(){
    var states = [
        {
          "state": "Aguascalientes",
          "abbreviation": "AGS"
        },
        {
          "state": "Baja California",
          "abbreviation": "BC"
        },
        {
          "state": "Baja California Sur",
          "abbreviation": "BCS"
        },
        {
          "state": "Campeche",
          "abbreviation": "CAMP"
        },
        {
          "state": "Chiapas",
          "abbreviation": "CHIS"
        },
        {
          "state": "Chihuahua",
          "abbreviation": "CHIH"
        },
        {
          "state": "Coahuila",
          "abbreviation": "COAH"
        },
        {
          "state": "Colima",
          "abbreviation": "COL"
        },
        {
          "state": "Ciudad de México",
          "abbreviation": "CMDX"
        },
        {
          "state": "Durango",
          "abbreviation": "DGO"
        },
        {
          "state": "Guanajuato",
          "abbreviation": "GTO"
        },
        {
          "state": "Guerrero",
          "abbreviation": "GRO"
        },
        {
          "state": "Hidalgo",
          "abbreviation": "HGO"
        },
        {
          "state": "Jalisco",
          "abbreviation": "JAL"
        },
        {
          "state": "Estado de México",
          "abbreviation": "MEX"
        },
        {
          "state": "Michoacán",
          "abbreviation": "MICH"
        },
        {
          "state": "Morelos",
          "abbreviation": "MOR"
        },
        {
          "state": "Nayarit",
          "abbreviation": "NAY"
        },
        {
          "state": "Nuevo León",
          "abbreviation": "NL"
        },
        {
          "state": "Oaxaca",
          "abbreviation": "OAX"
        },
        {
          "state": "Puebla",
          "abbreviation": "PUE"
        },
        {
          "state": "Querétaro",
          "abbreviation": "QRO"
        },
        {
          "state": "Quintana Roo",
          "abbreviation": "QR"
        },
        {
          "state": "San Luis Potosí",
          "abbreviation": "SLP"
        },
        {
          "state": "Sinaloa",
          "abbreviation": "SIN"
        },
        {
          "state": "Sonora",
          "abbreviation": "SON"
        },
        {
          "state": "Tabasco",
          "abbreviation": "TAB"
        },
        {
          "state": "Tamaulipas",
          "abbreviation": "TAMS"
        },
        {
          "state": "Tlaxcala",
          "abbreviation": "TLAX"
        },
        {
          "state": "Veracruz",
          "abbreviation": "VER"
        },
        {
          "state": "Yucatán",
          "abbreviation": "YUC"
        },
        {
          "state": "Zacatecas",
          "abbreviation": "ZAC"
        }
    ];
    return states;
  }
}


export default angular.module('idhAngularApp.idhService', [])
  .factory('idhService', idhServiceService)
  .name;
