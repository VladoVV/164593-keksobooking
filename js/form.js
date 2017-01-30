'use strick';

var pinElements = document.querySelectorAll('.pin'); // выбираем все элементы с классом pin
var pinElement = document.querySelector('.pin'); // выбираем первый попавшейся элемент с классом pin
//---переменные для закрытия окна диалог---//
var dialog = document.querySelector('.dialog'); // ищем окно диалог
var dialogClose = document.querySelector('.dialog__close'); // ищем эемент для закрытия окна диалог


//---создаем цикл для отслеживания события на каждом элементе из коллекции с классом пин---//
for (var i = 0; i < pinElements.length; i++) {
  
  pinElements[i].addEventListener('click', function () {

    for (var j = 0; j < pinElements.length; j++) {
      pinElements[j].classList.remove('pin--active'); // перебираем все элементы с классом pin и удаляем класс pin--active
    }

    this.classList.add('pin--active'); // элементу на котором произошло событие добавляем класс pin--active

    dialog.style.display = "block"; // открываем окно диалог 
    
  });
}


//---закрываем окно диалог при клике на dialog__close ---//
dialogClose.addEventListener('click', function () {
  
  dialog.style.display = "none"; //добавляем окну диалог свойство display: none
  
  for (var j = 0; j < pinElements.length; j++) {
      pinElements[j].classList.remove('pin--active'); // перебираем все элементы с классом pin и удаляем класс pin--active
    }
  
});