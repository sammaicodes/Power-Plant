import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeNow from './currencyExchanger.js';

function getNorwayElements(response, usAmount){
  
  if (response.conversion_rate){
    let foreignCurrency = response.conversion_rates.NOK
    let conversion = (usAmount * foreignCurrency).toFixed(2);
    $("#showConversion").text(`${conversion}`);
  } else {
    $('#showErrors').text(`There was an error: ${response.message}`);
  }
}

// function getRwandaElements(){

// }



  $("#go").on("click", (event) => {
    event.preventDefault();
    console.log("whats going on!?");

    let usAmount = parseFloat($("#us").val());

    let norway = $("#NOK")[0].selected;
    let rwanda = $("#RWF")[0].selected;
    let newZeland = $("#NZD")[0].selected;
    let mexico = $("#MXN")[0].selected;
    let tanzania = $("#TZS")[0].selected;
    // let other = $("#other")[0].selected;
    // $('#showConversion').val("");

    let conversion;
  
    if(norway === true){
      // countryPicked = "NOK";
      $('#showConversion').val("");
      ExchangeNow.getNorway()
      .then(function(response){
        getNorwayElements(response, usAmount);
      });
    }else if(rwanda === true){
      // countryPicked = "RWF";
      // ExchangeNow.getRwanda()
      // .then(function(response){
      //   getRwandaElements(conversion);
      // });
    }else if(newZeland === true){
      // countryPicked = "NZD";
    }else if(mexico === true){
      // countryPicked = "MXN";
    }else if(tanzania === true){
      // countryPicked = "TZS";
    }else{
      $("#ShowErrors").show();
    }



    // ExchangeNow.getNorway()
    //   .then(function(response){
    //     getNorwayElements(response, countryPicked);
    //   });
    // ExchangeNow.getRwanda()
    //   .then(function(response){
    //     getRwandaElements(response, countryPicked);
    //   });

  });


