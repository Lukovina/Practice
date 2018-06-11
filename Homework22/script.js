window.onload = function () {
// Реализуйте класс Elem, который параметром принимает селектор одного HTML элемента и затем может выполнять с ним различные операции. Класс должен работать следующим образом:



//  elem.html('!'); //запишет в текст элемента '!'
//  elem.append('!'); //запишет в начало элемента '!'
//  elem.prepend('!'); //запишет в конец элемента '!'
//  elem.attr('class', 'www'); //запишет в атрибут class значение www

 //Должны работать цепочки методов:
//  elem.html('hello').append('!').prepend('!');
//  elem.attr('class', 'www').attr('title', 'hello');

 class Elem {
     constructor (elem) {
        this.elem = document.querySelector('.btn')
     }

    html(inner) {

         this.elem.innerHTML = inner
         return this
     }
    append(inner) {
        this.elem.innerHTML += inner
        return this.elem
    }
    prepend(inner) {
        this.elem.innerHTML = inner + this.elem.innerHTML
        return this.elem
    }
 }


 var elem = new Elem('.btn');

 elem.html("Hell").append('kuku').prepend('koko')
}