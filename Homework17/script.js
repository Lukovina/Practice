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
    var characters = [
        { 'name': 'barney', 'age': 36 },
        { 'name': 'fred', 'age': 40 }
    ];

    var pluck = function(arr, key) { 
        return arr.map(function(item) { 
            return item[key] 
        }) 
    }

   console.log(pluck(characters, 'name'))
}
