<>
<input type="text" placeholder="Введите текст" /><input name="mega_button" type="button" value="Вывести текст в консоль и удалить из формы" /></>
var nameInput = document.getElementById('name');<input name="guruweba_example_button" type="button" value="Лайкнуть статью" onclick="alert('Спасибо, нам приятно, что вам нравится наш справочник :-)');"></input>

document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log(nameInput.value);    
});