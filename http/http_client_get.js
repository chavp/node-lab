var http = require('http');
var options = {
    hostname: 'localhost',
    port: '8888'
};
function handleResponse(response) {
    var serverData = '';
    response.on('data', function (chuck) {
        serverData += chuck;
    });
    response.on('end', function (chuck) {
        console.log("Response Status:", response.statusCode);
        console.log("Response Status:", response.headers);
        console.log(serverData);
    });
}
http.request(options, function (response) {
    handleResponse(response);
}).end();