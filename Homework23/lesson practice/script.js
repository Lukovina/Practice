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
