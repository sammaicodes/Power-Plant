import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeNow from './currencyExchanger.js';




$(document).ready(function(){
  $("form.exchanger").submit(function(event){
    event.preventDefault();

    let norway = $("#NOK")[0].selected;
    let rwanda = $("#RWF")[0].selected;
    let newZeland = $("#NZD")[0].selected;
    let mexico = $("#MXN")[0].selected;
    let tanzania = $("#TZS")[0].selected;
    let other = $("#other")[0].selected;

  });
});

