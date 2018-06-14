// ----------Lesson practice
// ----------task1
// let data = {

//     set model (value) {
//         if(!this.buffer) {
//             this.buffer = value   
//             return     
//         }
//            this.str = this.buffer.split(value),
//            this.separator = value 
//     },

//     get model () {
//         let result = {
//             symbol: this.separator,
//             count: this.str.length - 1
//         }
//         return result
//     }
// }

// data.model = "Hello, how, are you?"
//----------task2

// const object = {
//     x: 10,
//     y: 20,
// set model (obj) {

//     var actions = {
//         "*" : (a,b) => a * b,
//         "+" : (a = 0,b = 0) => a + b
//     }
   
//     for(var key in obj) {
//         this[key] =  actions[obj[key].operation](this[key], obj[key].value)
//         } 
//     }
// }

// const obj2 = {
//     x: {value: 33,
//     operation: "*"
//     },
//     z: {value: 75,
//     operation: '+'
//     }
// }

// object.model = obj2

//---------Homework

//---------task1

// const obj = {
//     list_1: [10, 20, 30, 40, 50, 60],
//     list_2: [15, 30, 45, 60, 75, 90, 105],
//     get collision () {
        
//         return this.list_1.filter(function(item) {
//             for(var key of obj.list_2) {
//                 if(item == key) {
//                     return item
//                 }
//             } 
//         })
//     }  
// }

//--------task2

Array.prototype.get = function () {

}

