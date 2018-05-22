window.onload = function() {

    // class practice

    // var obj = {
    //     id: '',
    //     name: 'fooo',
    //     value: 18
    // }
    
    
    // var myMethods = {
    //     setValueByProp: function(prop, value){
    //         this[prop] = value;
    //     },
    //     getValuesByType: function(type){
    //         for(var key in this) {
    //             if(key == type)
    //             return this[key]
    //         }
    //     } 
    // }

    // resultByType =  myMethods.getValuesByType.call(obj, 'name')
    // console.log(resultByType)

//     var characters = [
//         { 'name': 'barney', 'age': 36 },
//         { 'name': 'fred', 'age': 40 }
//     ];
   
//     function pluck (prop) {
//         this.forEach(function(item,pos,source){
//             console.log(source[pos])
//         });

//     }

//     pluck.call(characters, 'name')
   
// }



var arr = [5,1,43,-4]

res = arr.reduce(function(prev,item,pos,arr){
    if (pos == 2) {
        console.log(prev)
    }
   return prev+item
},)

console.log(res)
}