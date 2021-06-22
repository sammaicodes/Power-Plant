// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import ExchangeNow from './currencyExchanger.js';

// function getNorwayElements(response, usAmount){
//   if (response.conversion_rates){
//     let foreignCurrency = response.conversion_rates.NOK
//     let conversion = (usAmount * foreignCurrency).toFixed(2);
//     $("#showConversion").text(`${conversion} Norwegian Krones`);
//   } else {
//     $('#showAPIerror').text(`There was an error: ${response.message}`);
//   }
// }

// function getRwandaElements(response, usAmount){
//   if (response.conversion_rates){
//     let foreignCurrency = response.conversion_rates.RWF
//     let conversion = (usAmount * foreignCurrency).toFixed(2);
//     $("#showConversion").text(`${conversion} Rwandan Francs`);
//   } else {
//     $('#showAPIerror').text(`There was an error: ${response.message}`);
//   }
// }

// function getNZelements(response, usAmount){
//   if (response.conversion_rates){
//     let foreignCurrency = response.conversion_rates.NZD
//     let conversion = (usAmount * foreignCurrency).toFixed(2);
//     $("#showConversion").text(`${conversion} New Zealand Dollars`);
//   } else {
//     $('#showAPIerror').text(`There was an error: ${response.message}`);
//   }
// }

// function getMexElements(response, usAmount){
//   if (response.conversion_rates){
//     let foreignCurrency = response.conversion_rates.MXN
//     let conversion = (usAmount * foreignCurrency).toFixed(2);
//     $("#showConversion").text(`${conversion} Mexican Pesos`);
//   } else {
//     $('#showAPIerror').text(`There was an error: ${response.message}`);
//   }
// }

// function getTanzElements(response, usAmount){
//   if (response.conversion_rates){
//     let foreignCurrency = response.conversion_rates.TZS
//     let conversion = (usAmount * foreignCurrency).toFixed(2);
//     $("#showConversion").text(`${conversion} Tanzanian Shillings`);
//   } else {
//     $('#showAPIerror').text(`There was an error: ${response.message}`);
//   }
// }
// function clear(){
//   $('#showConversion').text("");
//   $('#showAPIerror').text("");
//   $('#error').hide();
//   $('#showConversion').show()
//   $('#showAPIerror').show();
// }

// function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n);}

//   $("#go").on("click", (event) => {
//     event.preventDefault();
//     clear();

//     let usAmount = parseFloat($("#us").val());
//     let check = isNumber(usAmount);
//     if(check === true){
//       $("#notAnumber").text("");
//       let norway = $("#NOK")[0].selected;
//       let rwanda = $("#RWF")[0].selected;
//       let newZeland = $("#NZD")[0].selected;
//       let mexico = $("#MXN")[0].selected;
//       let tanzania = $("#TZS")[0].selected;
      
//       if(norway === true){
//         ExchangeNow.getNorway()
//         .then(function(response){
//           getNorwayElements(response, usAmount);
//         });
//       }else if(rwanda === true){
//         ExchangeNow.getRwanda()
//         .then(function(response){
//           getRwandaElements(response, usAmount);
//         });
//       }else if(newZeland === true){
//         ExchangeNow.getNewZeland()
//         .then(function(response){
//           getNZelements(response, usAmount);
//         });
//       }else if(mexico === true){
//         ExchangeNow.getMexico()
//         .then(function(response){
//           getMexElements(response, usAmount);
//         });
//       }else if(tanzania === true){
//         ExchangeNow.getTanzania()
//         .then(function(response){
//           getTanzElements(response, usAmount);
//         });
//       }else{
//         $('#showConversion').hide()
//         $('#showAPIerror').hide();
//         $("#error").show(); 
//       }
//     }else{
//       $("#notAnumber").text("ERROR! Please enter numbers only.");
//     } 
//   });


