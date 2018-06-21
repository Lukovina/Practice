function renderGoods (item) {
    var goods = document.querySelector(".goods")
        goods.innerHTML = "";


    item.forEach(element => {
    var div = document.createElement("div"),  
        img = document.createElement("img"),
        h2 = document.createElement("h2"),
        p = document.createElement("p")

        div.classList.add("card");
        img.classList.add("goodImg");
        h2.classList.add("goodTitle");
        img.classList.add("goodPrice");

        goods.appendChild(div)
        var card = document.querySelectorAll(".card")   
        img.src = element.img
        h2.innerHTML = element.title;
        p.innerHTML = element.price;
        
        card[card.length-1].appendChild(img)
        card[card.length-1].appendChild(h2)
        card[card.length-1].appendChild(p)
    });
}


module.exports = {
    renderGoods
};


