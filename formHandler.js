console.log(document.forms);

function send(e) {
    console.log(document.forms);

    // let xml = new XMLHttpRequest();
    // var dataForm = new FormData(document.forms.test_form);
    // var xhr = new XMLHttpRequest(); //создаем объект
    // xhr.onreadystatechange = function() {
    //        if (this.readyState == 4 && this.status == 200) { //проверяем ответ на ошибки 
    //            // если норм то выводим
    //            console.log(this.responseText) 
    //        }
    //        else
    //        {
    //            // если нет сообщаем об ошибке
    //            console.log('error')
    //        }	
    //    };
    // xhr.open("POST", "/cont.php"); 
    // xhr.send(formData);

}

let btn = document.getElementById('btn');


btn.onclick = function(event) {
    event.preventDefault();
    console.log(document.forms);
}