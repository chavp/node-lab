var fs = require('fs');
var fruitBow1 = ['apple', 'orange', 'banana', 'grapes'];
function writeFruit(fd) {
    if (fruitBow1.length) {
        var fruit = fruitBow1.pop() + " ";
        fs.write(fd, fruit, null, null, function (err, bytes) {
            if (err) {
                console.log("File Write Failed.");
            } else {
                console.log("Wrote: %s %dbytes", fruit, bytes);
                writeFruit(fd);
            }
        });
    } else {
        fs.close(fd);
    }
}
fs.open('fruit.txt', 'w', function (err, fd) {
    writeFruit(fd);
});