var http = require('http');
var options = {
    hostname: 'localhost',
    port: '8888',
    path: '/hello.html'
};
function handleResponse(response) {
    var serverData = '';
    response.on('data', function (chunk) {
        serverData += chunk;
    });
    response.on('end', function (chunk) {
        console.log(serverData);
    });
}
http.request(options, function (response) {
    handleResponse(response);
}).end();