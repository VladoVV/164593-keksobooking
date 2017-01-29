'use strick';

var pinElements = document.querySelectorAll('.pin'); // выбираем все элементы с классом pin
var pinElement = document.querySelector('.pin'); // выбираем первый попавшейся элемент с классом pin

//---отслеживаем событие клик на первом попавшемся элементе с классом пин---//
pinElement.addEventListener('click', function () {
  for (var i = 0; i < pinElements.length; i++) {
    pinElements[i].classList.remove('pin--active'); // перебираем все элементы с классом pin и удаляем класс pin--active
  }
  this.classList.add('pin--active'); // элементу на котором произошло событие добавляем класс pin--active
  dialog.style.display = "block"; // открываем окно диалог 
});


//---закрываем окно диалог---//
var dialog = document.querySelector('.dialog'); // ищем окно диалог
var dialogClose = document.querySelector('.dialog__close'); // ищем эемент для закрытия окна диалог
var pinActive = document.querySelector('.pin--active'); // ищем элемент pin--active

//---закрываем окно диалог при клике на dialog__close ---//
dialogClose.addEventListener('click', function () {
  dialog.style.display = "none"; //добавляем окну диалог display: none
  pinActive.classList.remove('pin--active'); // удаляем класс pin--active у элемента с классом pin--active
});