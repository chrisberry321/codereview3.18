var apiKey = require('./../.env').apiKey;
var username = "";
var all_repos = [];

exports.getInfo = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);

    $('.results').prepend(
      "Login: " + response.login + "<br>" +
      "Name: " + response.name + "<br>" +
      "Location: " + response.location + "<br>" +
      "Public repos: " + response.public_repos + "<br>" +
      "avatar_url: " + response.avatar_url + "<br>"
    );

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey + '&sort=created&per_page=100').then(function(response) {
    console.log(response);
    response.forEach(function(repo, index) {
      if (repo.private === false) {
        $('.repositories').prepend(
           "<strong><a href=" + repo.html_url +  ">" + repo.name + "</a>" + "</strong>" +  "<br>" + "<strong>description: </strong>" + repo.description + "<hr>"
        );
      }
    });

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};
