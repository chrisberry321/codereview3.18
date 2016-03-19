var getInfo = require('./../js/github.js').getInfo;
var getRepos = require('./../js/github.js').getRepos;


$(document).ready(function() {
  $('#userSearch').submit(function(event) {
    event.preventDefault();
    var userName = $('#userName').val();
    $('.results').text("");
    console.log(getInfo);
    getInfo(userName);
    getRepos(userName);
  });
});
