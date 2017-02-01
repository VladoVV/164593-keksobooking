'use strick';

var pinElements = document.querySelectorAll('.pin'); // выбираем все элементы с классом pin

//---переменные для закрытия окна диалог---//
var dialog = document.querySelector('.dialog'); // ищем окно диалог
var dialogClose = dialog.querySelector('.dialog__close'); // ищем эемент для закрытия окна диалог

//переменные для синхронизации данных между временем заезда и временем выезда (time & timeout)
var timeSelect = document.getElementById('time'); // получаем список вариантов для select time
var timeOutSelect = document.getElementById('timeout'); // получаем список вариантов для select timeout

//переменные для синхронизации данных между кол-вом комнат и кол-вом гостей (time & timeout)
var roomNumber = document.getElementById('room_number');
var capacity = document.getElementById('capacity');

//переменные для синхронизации данных между типом жилья и стоимостью (type & price)
var typeApart = document.getElementById('type');
var price = document.getElementById('price');


// перебираем все элементы с классом и удаляем класс//
function removeClass(collection, className) {
  for (var j = 0; j < collection.length; j++) {
    collection[j].classList.remove(className);
  }
}

//---создаем цикл для отслеживания события на каждом элементе из коллекции с классом пин---//
for (var i = 0; i < pinElements.length; i++) {
  pinElements[i].addEventListener('click', function () {
    removeClass(pinElements, 'pin--active');
    this.classList.add('pin--active'); // элементу на котором произошло событие добавляем класс pin--active
    dialog.style.display = "block"; // открываем окно диалог 
  });
}


//---закрываем окно диалог при клике на dialog__close ---//
dialogClose.addEventListener('click', function () {
  dialog.style.display = "none"; //добавляем окну диалог свойство display: none
  removeClass(pinElements, 'pin--active');
});

var prices = [1000, 0, 5000];
//---синхронизации данных между типом жилья и стоимостью (type & price)---//
//изменяем стоимсть в зависимости от типа жилья
typeApart.addEventListener('change', function () {
  price.value = prices[typeApart.selectedIndex];
});


//изменяем тип жилья в зависимости от стоимости
price.addEventListener('change', function () {
  if (price.value >= 1000 && price.value < 5000) {
    return typeApart.selectedIndex = 0;
  }
  if (price.value === 0) {
    return typeApart.selectedIndex = 1;
  }
  if (price.value >= 5000) {
    return typeApart.selectedIndex = 2;
  }
});


//синхронизация данных между кол-вом комнат и кол-вом гостей (room_number & capacity)//
//---функция проверки и синхронного изменения значения в списке capacity---//
roomNumber.addEventListener('change', function () {
  if (roomNumber.selectedIndex === 2) {
    return capacity.selectedIndex = 1;
  } else {
    capacity.selectedIndex = roomNumber.selectedIndex
  }
});

//---функция проверки и синхронного изменения значения в списке room_number---//
capacity.addEventListener('change', function () {
  return roomNumber.selectedIndex = capacity.selectedIndex; 
});


//---синхронизация данных между временем заезда и временем выезда (time & timeout)---//
//функция проверки и синхронного изменения значения в списке timeout
timeSelect.addEventListener('change', function () {
  timeOutSelect.selectedIndex = timeSelect.selectedIndex;
});

//функция проверки и синхронного изменения значения в списке time
timeOutSelect.addEventListener('change', function () {
  timeSelect.selectedIndex = timeOutSelect.selectedIndex;
});
