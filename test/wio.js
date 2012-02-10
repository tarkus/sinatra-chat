var wio = require('../server/wio');

wio.add('tarkus').on('complete', function(data) {
    console.log(data); 
}).on('error', function(data) {
    console.log(data); 
});

wio.get('tarkus').on('complete', function(data) {
    console.log(data); 
});

wio.del('tarkus').on('complete', function(data) {
    console.log(data); 
});
