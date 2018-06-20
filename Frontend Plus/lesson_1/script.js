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
               { title: 'Owl', size: 4, img: 'https://www.version2.dk/sites/v2/files/topillustration/2017/07/5927758528a2060423e7b.jpg' },
               { title: 'Seagull', size: 35, img: 'https://www.samcodes.co.uk/project/geometrize-haxe-web/assets/images/xseagull.jpg.pagespeed.ic.iK66EGA15-.jpg' }, 
               { title: 'Bear', size: 22, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-WXtjHQNadRCsA0EWNNe_QyzX-jGpi83_zKg3seOAF6-2bupYbQ' }          
        ]


class ViewController {
    constructor(model) {
        this.model = model
    }
    get render () {
        return  `<div class = "container">
                    <div class = "row">
                        ${this.model.map(item=>
                            `<div class = "col s12 m6 l3">
                                <div class = "card ">
                                    <div class = "card-image">
                                    <img src = "${item.img}" >
                                    </div>
                                    <div class = "card-content">
                                        <p class = "card-title"> ${item.title}</p>
                                        <span>size: ${item.size}</span>
                                    </div>
                                </div>
                             </div>`
                        ).join("")}
                    </div>    
                </div>`
    }

    get sortBySize () {
        this.model.sort((a,b) => a.size-b.size)
        return this
    }     
}
var viewHolder = new ViewController(objList);



window.onload = function() {
    document.body.innerHTML = viewHolder.sortBySize.render
}


