window.onload = function () {


    var form = document.forms.form,
        name = document.forms.form.Name,
        email = document.forms.form.Email,
        button = document.forms.form.checkAndSend,
        result = document.getElementById("result")
        button.addEventListener("click" , formCheck)

    function formCheck() {
        if(name.value == "") {
           name.style.border = "2px solid red"
           result.innerHTML = 'Заполните поле "Имя"'
        }else if(email.value == "") {
           email.style.border = "2px solid red"
           result.innerHTML = 'Заполните поле "Email"'
        }else {
            var params = "name " + name.value & "email" + email.value
            result.innerHTML = "Ваши данные успешно отправлены"
            postAjax(JSON.stringify(params))
        }
    }  
}



function postAjax (params) {
    var xhr = new XMLHttpRequest;

    xhr.open("POST" , "/registration")
    xhr.send(params)
}