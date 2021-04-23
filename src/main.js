import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeNow from './currencyExchanger.js';

function getNorwayElements(conversion, response){
  if (conversion){
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

    
  
    if(norway === true){
      // countryPicked = "NOK";
      $('#showConversion').val("");
      ExchangeNow.getNorway()
      .then(function(response){
        let x = response.conversion_rates.NOK
        let conversion = Math.floor(usAmount * x);
        console.log(conversion);
        getNorwayElements(conversion, response);
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


