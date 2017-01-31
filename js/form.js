'use strick';

var pinElements = document.querySelectorAll('.pin'); // выбираем все элементы с классом pin
var pinElement = document.querySelector('.pin'); // выбираем первый попавшейся элемент с классом pin

//---переменные для закрытия окна диалог---//
var dialog = document.querySelector('.dialog'); // ищем окно диалог
var dialogClose = document.querySelector('.dialog__close'); // ищем эемент для закрытия окна диалог

//переменные для синхронизации данных между временем заезда и временем выезда (time & timeout)
var timeSelect = document.getElementById('time');// получаем список вариантов для select time
var timeSelectOut = document.getElementById('timeout');// получаем список вариантов для select timeout

//переменные для синхронизации данных между кол-вом комнат и кол-вом гостей (time & timeout)
var roomNumber = document.getElementById('room_number');
var capacity = document.getElementById('capacity');

//переменные для синхронизации данных между типом жилья и стоимостью (type & price)
var typeApart = document.getElementById('type');
var price = document.getElementById('price');


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


//---синхронизации данных между типом жилья и стоимостью (type & price)---//
//изменяем стоимсть в зависимости от типа жилья
typeApart.addEventListener('change', function() {
  if (typeApart.selectedIndex == 0) {
    price.value = 1000;
  } else if (typeApart.selectedIndex == 1) {
    price.value = 0;
  } else if (typeApart.selectedIndex == 2) {
    price.value = 5000;
  }
});

//изменяем тип жилья в зависимости от стоимости
price.addEventListener('change', function() {
  if (price.value == 0) {
    typeApart.selectedIndex = 1;
  } else if (price.value >= 1000 && price.value < 5000) {
    typeApart.selectedIndex = 0;
  } else if (price.value >= 5000) {
    typeApart.selectedIndex = 2; 
  }
});


//синхронизация данных между кол-вом комнат и кол-вом гостей (room_number & capacity)//
//---функция проверки и синхронного изменения значения в списке capacity---//
roomNumber.addEventListener('change', function() {
  if (roomNumber.selectedIndex == 0) { 
    capacity.selectedIndex = 0; 
  } else if (roomNumber.selectedIndex == 1) {
    capacity.selectedIndex = 1;
  } else if (roomNumber.selectedIndex == 2) {
    capacity.selectedIndex = 1;
  }
});

//---функция проверки и синхронного изменения значения в списке room_number---//
capacity.addEventListener('change', function() {
  if (capacity.selectedIndex == 0) {
    roomNumber.selectedIndex = 0;
  } else if (capacity.selectedIndex == 1) {
    roomNumber.selectedIndex = 1;
  } 
});


//---синхронизация данных между временем заезда и временем выезда (time & timeout)---//
//функция проверки и синхронного изменения значения в списке timeout
timeSelect.addEventListener('change', function() {
  if (timeSelectOut.selectedIndex != timeSelect.selectedIndex) {
    timeSelectOut.selectedIndex = timeSelect.selectedIndex;
  }
});

//функция проверки и синхронного изменения значения в списке time
timeSelectOut.addEventListener('change', function() {
  if (timeSelect.selectedIndex != timeSelectOut.selectedIndex) {
    timeSelect.selectedIndex = timeSelectOut.selectedIndex;
  }
});


//console.log(document.getElementById('time').options.length); получаем длинну списка
//console.log(document.getElementById('type').options);
//var timeSelect = document.getElementById('time').options;// получаем список вариантов для select time
//var timeSelectOut = document.getElementById('timeout').options;// получаем список вариантов для select timeout