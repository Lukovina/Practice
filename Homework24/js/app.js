var render = require('./render.js');
var data = require('./data.js');


data.load()
    .then(value=>render.renderGoods(value))


    