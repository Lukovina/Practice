//task 1

// let list = [ { value: 10 }, { value: 12 }, { value: 3 },
//              { value: 31 }, { value: 19 }, { value: 6 },
//              { value: 24 }, { value: 11 }, { value: 2 }]

// list.sort(sortByNumber)  

// let sortedList = list.sort(sortByNumber).map( item => item.value ).filter(item=> item<=10 )

// function sortByNumber(a,b){
//     return a.value-b.value
// }

// console.log(sortedList)


//task2
let objList = [
               { title: 'Owl', size: 4, img: 'http://www.catersnews.com/wp-content/uploads/2017/01/0_CATERS_OWL_WITH_HEART_SHAPED_FACE_01-800x498.jpg' },
               { title: 'Seagull', size: 35, img: 'https://www.samcodes.co.uk/project/geometrize-haxe-web/assets/images/xseagull.jpg.pagespeed.ic.iK66EGA15-.jpg' }, 
               { title: 'Bear', size: 22, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-WXtjHQNadRCsA0EWNNe_QyzX-jGpi83_zKg3seOAF6-2bupYbQ' }          
        ]


class ViewController {
    constructor(model) {
        this.model
    }

    render (list) {
        return list.map(item => 
                `<div class="card">
                    <img src = "${item.img}"> 
                    <h2>${item.title}</h2>
                    <p>${item.size}</p> 
                </div>`).join("")
         }
}


window.onload = function() {
    document.body.innerHTML = card
}

