
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


    //homework task 1
//     var characters = [
//         { 'name': 'barney', 'age': 36 },
//         { 'name': 'fred', 'age': 40 }
//     ];

//     var pluck = function(arr, key) { 
//         return arr.map(function(item) { 
//             return item[key] 
//         }) 
//     }

//    console.log(pluck(characters, 'name'))

    // homework task 2

    
    // function isEven(x) { return x % 2 == 0; } 
    
    // var input = [1, 2, 3, 4, 5, 6];

    // function filter(arr , predicate) {
    //     return arr.filter(function(item){
    //             return isEven(item)
    //     })
    // }

    

    // console.log(filter(input, isEven));

    // homework task3
    
    
    var obj = {
        name: "Vasya",
        age: "18"
    }




    Object.prototype.count = function(){
        counter = 0;
      for(var key in this) {
          if(this.hasOwnProperty(key)){
            counter+=1;
          }
        }
        return counter
    }

    console.log(obj.count())

}
