window.onload = function () {


    var form = document.forms.form,
        button = document.forms.form.checkAndSend,
        userMessage = document.getElementById("userMessage")
        
        button.addEventListener("click" , function() {
            formValidate(form, userMessage)
        })
 
    function formValidate(form, holder) {
        var name = document.forms.form.Name,
            age = document.forms.form.Age

            name.classList.remove("form_error")
            age.classList.remove("form_error")
            


        if(name.value == "") {
            return showError(name, holder, 'Заполните поле "Имя"')
        }
        if(age.value == "") {
            return showError(age, holder, 'Заполните поле "Возраст"')
        }
        if(name.value.match(/\d/g) !== null) {
            return showError(name, holder, 'Поле "Имя" не может содержать цифры')
        }
        if(isNaN(age.value) || age.value < 0 || age.value > 130 ) {
            return showError(age, holder, 'Неверно заполнено поле "Возраст"')
        }
            var params = {
                "name": form.Name.value,
                "email": form.Age.value
            }

            name.classList.add("form_error");
            age.classList.add("form_error");
            holder.innerHTML = "Ваши данные успешно отправлены"
            doAjax("POST", "/registration", params)
    
    }  

    function showError(area, holder, message ) {
            area.classList.add('form_error')
            holder.innerHTML = message;
    }
}


function doAjax(method, url, params){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    
    return new Promise(function(resolve, reject){
        xhr.send(JSON.stringify(params));

        xhr.onreadystatechange = function(){
            if (xhr.readyState != 4) {
                return;
            }

            if (xhr.status != 200) {
                reject(xhr);
            }

            resolve(JSON.parse(xhr.responseText));
        }
    });
}