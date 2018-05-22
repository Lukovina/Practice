window.onload = function() {

    var obj = {
        id: '',
        name: 'fooo',
        value: 10
    }
    
    
    var myMethods = {
        setValueByProp: function(prop, value){
            this[prop] = value;
        },
        getValuesByType: function(type){
            for(var key in this) {
                if(key == type)
                return this[key]
            }
        } 
    }

    resultByType =  myMethods.getValuesByType.call(obj, 'value')
    console.log(resultByType)
}