var render = require('./render.js'),
    data = require('./data.js'),
    priceBtn = document.querySelector(".priceSort"),
    titleBtn = document.querySelector(".titleSort"),
    idBtn = document.querySelector(".idBtn"),
    idCatcher = document.querySelector(".idCatcher"),
    resetBtn = document.querySelector(".reset")  


data.load()
    .then(value=>render.renderGoods(value.list))

priceBtn.addEventListener("click", function(){
    data
        .load()
        .then(value=>render.renderGoods(value.list.sort(data.sortByPrice)))
})  

titleBtn.addEventListener("click", function(){
    data
        .load()
        .then(value=>render.renderGoods(value.list.sort(data.sortByTitle)))
})   

idBtn.addEventListener("click", function(){
    data
        .load()
        .then(
            value=> render.renderGoods(data.findById(value.list, idCatcher.value))
        )
})

resetBtn.addEventListener("click", function() {
    data.load()
               .then(value=>console.log(data.initialCondition(value))) 
})


    