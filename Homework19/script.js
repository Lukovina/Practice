window.onload = function () {

    var storage = document.querySelector(".storage__inner");
    var add_bottoms = document.querySelectorAll(".Add_btn");
    var remove_btn = document.querySelector(".remove");
    var remove_item_bottoms = document.querySelectorAll(".Remove_item");
    



var xhr = new XMLHttpRequest();

    xhr.open('GET', 'goods.json',true);
    xhr.send();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        
            var goods = JSON.parse(xhr.responseText);
            console.log(goods)

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
          
            function addToCard(event) {
                if(!storageGoods[this.parentElement.id]) {
                    storageGoods[this.parentElement.id] = goods[this.parentElement.id];
                }
                console.log(JSON.stringify(goods))
                storageGoods[this.parentElement.id].quantity +=1;
                storageGoods = JSON.stringify(storageGoods);
                localStorage.setItem("goods", storageGoods);
                storageGoods = JSON.parse(localStorage.goods);
                renderStorage()
            }
        
            function removeFromCard() {
                storageGoods = JSON.parse(localStorage.goods);
                delete storageGoods[this.parentElement.id];
                storageGoods = JSON.stringify(storageGoods);
                localStorage.setItem("goods", storageGoods);
                storageGoods = JSON.parse(localStorage.goods);
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
        
        
    }
    
   

   