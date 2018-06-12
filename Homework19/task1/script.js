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
            showError(name, holder, 'Заполните поле "Имя"')
        }else if(name.value.match(/\d/g) !== null) {
            showError(name, holder, 'Поле "Имя" не может содержать цифры')
        }else if(age.value == "") {
            showError(age, holder, 'Заполните поле "Возраст"')
        }else if(isNaN(age.value) || age.value < 0 || age.value > 130 ) {
            showError(age, holder, 'Неверно заполнено поле "Возраст"')
        }else {
            var params = {
                "name": form.Name.value,
                "email": form.Age.value
            }

            name.classList.add("form_error");
            age.classList.add("form_error");
            holder.innerHTML = "Ваши данные успешно отправлены"
            doAjax("POST" , params)
        }
    }  

    function showError(area, holder, message ) {
            area.classList.add('form_error')
            holder.innerHTML = message;
    }
}

function postAjax (method ,params) {
    var xhr = new XMLHttpRequest;

    xhr.open(method , "/registration")
    xhr.send(JSON.stringify(params))
}