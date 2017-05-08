'use strict';
const angular = require('angular');

export function idhServiceService() {
  // Service logic
  var services = {
    getStates
  };

  return services;

/// Funciones ///
  function getStates() {
    var states = [
      {
        name: 'Aguascalientes',
        abbreviation: 'AGS'
      },
      {
        name: 'Baja California',
        abbreviation: 'BC'
      },
      {
        name: 'Baja California Sur',
        abbreviation: 'BCS'
      },
      {
        name: 'Campeche',
        abbreviation: 'CAMP'
      },
      {
        name: 'Chiapas',
        abbreviation: 'CHIS'
      },
      {
        name: 'Chihuahua',
        abbreviation: 'CHIH'
      },
      {
        name: 'Coahuila',
        abbreviation: 'COAH'
      },
      {
        name: 'Colima',
        abbreviation: 'COL'
      },
      {
        name: 'Ciudad de México',
        abbreviation: 'CMDX'
      },
      {
        name: 'Durango',
        abbreviation: 'DGO'
      },
      {
        name: 'Guanajuato',
        abbreviation: 'GTO'
      },
      {
        name: 'Guerrero',
        abbreviation: 'GRO'
      },
      {
        name: 'Hidalgo',
        abbreviation: 'HGO'
      },
      {
        name: 'Jalisco',
        abbreviation: 'JAL'
      },
      {
        name: 'Estado de México',
        abbreviation: 'MEX'
      },
      {
        name: 'Michoacán',
        abbreviation: 'MICH'
      },
      {
        name: 'Morelos',
        abbreviation: 'MOR'
      },
      {
        name: 'Nayarit',
        abbreviation: 'NAY'
      },
      {
        name: 'Nuevo León',
        abbreviation: 'NL'
      },
      {
        name: 'Oaxaca',
        abbreviation: 'OAX'
      },
      {
        name: 'Puebla',
        abbreviation: 'PUE'
      },
      {
        name: 'Querétaro',
        abbreviation: 'QRO'
      },
      {
        name: 'Quintana Roo',
        abbreviation: 'QR'
      },
      {
        name: 'San Luis Potosí',
        abbreviation: 'SLP'
      },
      {
        name: 'Sinaloa',
        abbreviation: 'SIN'
      },
      {
        name: 'Sonora',
        abbreviation: 'SON'
      },
      {
        name: 'Tabasco',
        abbreviation: 'TAB'
      },
      {
        name: 'Tamaulipas',
        abbreviation: 'TAMS'
      },
      {
        name: 'Tlaxcala',
        abbreviation: 'TLAX'
      },
      {
        name: 'Veracruz',
        abbreviation: 'VER'
      },
      {
        name: 'Yucatán',
        abbreviation: 'YUC'
      },
      {
        name: 'Zacatecas',
        abbreviation: 'ZAC'
      }
    ];
    states.forEach(state => {
      var yearsArray = [];
      for (var i = 0; i < 6; i++) {
        var year = `199${i}`;
        var obj = {
            year: year,
            idh: getRandom()
          };
        yearsArray.push(obj);
      }
      state.years = yearsArray;
    });
    return states;
  }

  function getRandom() {
    return Math.random();
  }
}


export default angular.module('idhAngularApp.idhService', [])
  .factory('idhService', idhServiceService)
  .name;
