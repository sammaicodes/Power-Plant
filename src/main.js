import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeNow from './currencyExchanger.js';

function getNorwayElements(response, usAmount){
  if (response.conversion_rates){
    let foreignCurrency = response.conversion_rates.NOK
    let conversion = (usAmount * foreignCurrency).toFixed(2);
    $("#showConversion").text(`${conversion}`);
  } else {
    $('#showAPIerror').text(`There was an error: ${response.message}`);
  }
}

function getRwandaElements(response, usAmount){
  if (response.conversion_rates){
    let foreignCurrency = response.conversion_rates.RWF
    let conversion = (usAmount * foreignCurrency).toFixed(2);
    $("#showConversion").text(`${conversion}`);
  } else {
    $('#showAPIerror').text(`There was an error: ${response.message}`);
  }
}

function getNZelements(response, usAmount){
  if (response.conversion_rates){
    let foreignCurrency = response.conversion_rates.NZD
    let conversion = (usAmount * foreignCurrency).toFixed(2);
    $("#showConversion").text(`${conversion}`);
  } else {
    $('#showAPIerror').text(`There was an error: ${response.message}`);
  }
}

function getMexElements(response, usAmount){
  if (response.conversion_rates){
    let foreignCurrency = response.conversion_rates.MXN
    let conversion = (usAmount * foreignCurrency).toFixed(2);
    $("#showConversion").text(`${conversion}`);
  } else {
    $('#showAPIerror').text(`There was an error: ${response.message}`);
  }
}

function getTanzElements(response, usAmount){
  if (response.conversion_rates){
    let foreignCurrency = response.conversion_rates.TZS
    let conversion = (usAmount * foreignCurrency).toFixed(2);
    $("#showConversion").text(`${conversion}`);
  } else {
    $('#showAPIerror').text(`There was an error: ${response.message}`);
  }
}
function clear(){
  $('#showConversion').val("");
  $('#showAPIerror').val("");
  $('#error').text("");
}



  $("#go").on("click", (event) => {
    event.preventDefault();
    console.log("whats going on!?");

    let usAmount = parseFloat($("#us").val());

    let norway = $("#NOK")[0].selected;
    let rwanda = $("#RWF")[0].selected;
    let newZeland = $("#NZD")[0].selected;
    let mexico = $("#MXN")[0].selected;
    let tanzania = $("#TZS")[0].selected;
    
    if(norway === true){
      ExchangeNow.getNorway()
      .then(function(response){
        clear();
        getNorwayElements(response, usAmount);
      });
    }else if(rwanda === true){
      ExchangeNow.getRwanda()
      .then(function(response){
        clear();
        getRwandaElements(response, usAmount);
      });
    }else if(newZeland === true){
      ExchangeNow.getNewZeland()
      .then(function(response){
        clear();
        getNZelements(response, usAmount);
      });
    }else if(mexico === true){
      ExchangeNow.getMexico()
      .then(function(response){
        clear();
        getMexElements(response, usAmount);
      });
    }else if(tanzania === true){
      ExchangeNow.getTanzania()
      .then(function(response){
        clear();
        getTanzElements(response, usAmount);
      });
    }else{
      $("#error").text("Sorry, at this time we are limited to only the options listed in the dropdown menu.");  
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


