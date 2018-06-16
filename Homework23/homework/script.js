window.onload = function () {
//---------task 1

// const obj = {
//     list_1: [10, 20, 30, 40, 50, 60],
//     list_2: [15, 30, 45, 60, 75, 90, 105],
//     get collise () {
//         return collision(this) 
//     } 
// }

// function collision(object) {
//     return object.list_1.filter(function(item) {
//         for(var key of object.list_2) {
//             if(item == key) {
//                 return item
//             }
//         } 
//     })
// }

//--------task 2

Object.defineProperty(Array.prototype, "render", {
    get: function () {
        return arrayRendering.call(this)
    }
})


function arrayRendering () {
var table = document.createElement("table")    
document.body.appendChild(table)

this.forEach(element => {
    tr = document.createElement("tr")
    table.appendChild(tr)

    if(typeof element == "object") {
            element.forEach(item=> {
            td = document.createElement("td")
            td.innerHTML = item
            tr.appendChild(td)
        })
    }else {
            td = document.createElement("td")
            td.innerHTML = element
            tr.appendChild(td)
    }

});      
}

const array2 = [[321,123,"string",12,22],[32,1,2312,333],[32,1,23,21,44,3],[43,3,4,21,3]]
const array1 = [32,1,2312,333]

array2.render
}

