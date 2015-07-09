$(document).ready(function(){
  var weatherEndpoint = "http://api.wunderground.com/api/ef965f0566aedf6d/geolookup/q/"
  var weatherForecast = "http://api.wunderground.com/api/ef965f0566aedf6d/forecast10day/q/"
  
  $('#getForecast').click (function(){
    var country =$('#country').val();
    var city =$('#city').val();
    console.log( country, city);
    var location = weatherEndpoint + country + '/' + city + '.json';
    var forecast10day = weatherForecast + country + '/' + city + '.json'
    
    $.get (location, function (response){
      var result = response["location"];
        console.log("response from api", result);
        $('#getType').html(result.type);
      })

    $.get( forecast10day, function (data){
      console.log("response from api", data);
    })
    $('#getCountry').html(country);
    $('#getCity').html(city);

  }); 

})
