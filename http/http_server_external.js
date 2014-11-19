var http = require('http');
var url = require('url');
var qstring = require('querystring');
function sendResponse(weatherData, res) {
    var page = '' +
        '<body>' +
        '<form method="post">' +
        'City: <input name="city"><br>' +
        '<input type="submit" value="Get Weather">' +
        '</form>';
    if (weatherData) {
        page += '<h1>Weather Info</h1><p>' + weatherData + '</p>';
    }
    page += '</doby></html>';
    res.end(page);
}
function parseWeather(weatherResponse, res) {
    var weatherData = '';
    weatherResponse.on('data', function (chunk) {
        weatherData += chunk;
    });
    weatherResponse.on('end', function () {
        sendResponse(weatherData, res);
    });
}
function getWeater(city, res) {
    var options = {
        host: 'api.openweather.org',
        path: '/data/2.5/weather?q=' + city
    };
    http.require(options, function (weatherResponse) {
        parseWeather(weatherResponse, res);
    }).end();
}
http.createServer(function (req, res) {
    console.log(req.method);
    if (req.method == "POST") {
        var reqData = '';
        req.on('data', function (chunk) {
            reqData += chunk;
        });
        req.on('end', function () {
            var postParams = qstring.parse(reqData);
            getWeater(postParams.city, res);
        });
    } else {
        sendResponse(null, res);
    }
}).listen(8888);