var AccountName = require('../js/github.js').AccountName;
var Discription = require('../js/github.js').Discription;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#userSearch').submit(function(event) {
    event.preventDefault();
    var userName = $('#userName').val();
    $.get('https://api.github.com/users/' + userName +'?access_token=' + apiKey).then(function(response){
    console.log(response);
    }).fail(function(error){
    console.log(error.responseJSON.message);
   });
   });
 });
