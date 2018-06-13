window.onload = function () {
class Elem {
     constructor (elem) {
        this.elem = document.querySelector('.block')  
     }
    html(inner) {
        this.elem.textContent += inner;
        return this
     }
    append(inner) { 
        let textElement = document.createTextNode(inner);        
        this.elem.insertBefore(textElement, this.elem.firstChild);
        return this
    }
    prepend(inner) {       
        let textElement = document.createTextNode(inner);
        this.elem.appendChild(textElement);
        return this
    }
    attr(atr, title) {
        this.elem.setAttribute(atr,title);
        return this
    }
 }

 var elem = new Elem('.block');
 elem.html("INNER").append("before-").prepend("-after")
 elem.attr("name", "www").attr('title', 'hello')
 console.dir(elem)
}