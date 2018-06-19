window.onload = function () {

    var storage = document.querySelector(".storage__inner");
    var add_bottoms = document.querySelectorAll(".Add_btn");
    var remove_btn = document.querySelector(".remove");
    var remove_item_bottoms = document.querySelectorAll(".Remove_item");
    add_bottoms.forEach(function(item){
        item.addEventListener('click', addToCard)
    });

    remove_item_bottoms.forEach(function(item){
        item.addEventListener('click', removeFromCard)
    });

    remove_btn.addEventListener('click', clearStorage);

    if(localStorage.getItem("goods")){
        var storageGoods = JSON.parse(localStorage.goods);
        renderStorage();
    }else {
          var storageGoods = {}
    }

    var goods = {
            1: {
                name: "велосипед",
                price: 500,
                quantity: 0
            },
            2: {
                name: "ролики",
                price: 200,
                quantity: 0
            },
            3: {
                name: "скейт",
                price: 150,
                quantity: 0
            },
            4: {
                name: "кроссовки",
                price: 100,
                quantity: 0
            },
            5: {
                name: "самокат",
                price: 280,
                quantity: 0
            },
        }

    function addToCard(event) {
        if(!storageGoods[this.parentElement.id]) {
            storageGoods[this.parentElement.id] = goods[this.parentElement.id];
        }
        storageGoods[this.parentElement.id].quantity +=1;
        localStorage.setItem("goods", JSON.stringify(storageGoods));
        renderStorage()
    }

    function removeFromCard() {
        storageGoods[this.parentElement.id].quantity = 0;
        delete storageGoods[this.parentElement.id];
        localStorage.setItem("goods", JSON.stringify(storageGoods));
        renderStorage()
    }

    function clearStorage(){
        storageGoods = "{}";
        localStorage.setItem("goods", storageGoods);
        storageGoods = JSON.parse(storageGoods);
        renderStorage();
    }

    function renderStorage() {
        var ls = JSON.parse(localStorage.goods);

        storage.innerHTML = "<tr>";
        for (var key in ls) {
            storage.innerHTML += "<td>" + ls[key].name + "</td>" +  "<td>" + "&nbsp x &nbsp" + ls[key].quantity + "</td>"
        }
        storage.innerHTML += "</tr>";
    }
}
