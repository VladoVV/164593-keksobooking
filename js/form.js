'use strick';

var pinElements = document.querySelectorAll('.pin'); // выбираем все элементы с классом pin
var pinElement = document.querySelector('.pin'); // выбираем первый попавшейся элемент с классом pin
//---переменные для закрытия окна диалог---//
var dialog = document.querySelector('.dialog'); // ищем окно диалог
var dialogClose = document.querySelector('.dialog__close'); // ищем эемент для закрытия окна диалог
//переменные для синхронизации данных между временем заезда и временем выезда (time & timeout)
var timeSelect = document.getElementById('time').options;// получаем список вариантов для select time
var timeSelectOut = document.getElementById('timeout').options;// получаем список вариантов для select timeout
var timeSelected = timeSelect.selectedIndex;// получаем индекс выбранного элемента селекта для time
var timeSelectedOut = timeSelectOut.selectedIndex;// получаем индекс выбранного элемента селекта для timeout



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


//синхронизация данных между временем заезда и временем выезда (time & timeout)//

//---функция проверки и синхронного изменения значения в списке timeout---//
function changeTime(event) {
  if (timeSelected == timeSelectedOut) {
    timeSelectOut.selectedIndex = timeSelect.selectedIndex; //устанавливаем в селект timeOut такое же значение какое выбрали в time
  }
}

//---функция проверки и синхронного изменения значения в списке time---//
function changeTimeOut(event) {
  if (timeSelectedOut == timeSelected) {
    timeSelect.selectedIndex = timeSelectOut.selectedIndex; //устанавливаем в селект timeOut такое же значение какое выбрали в time
  }
}

//console.log(document.getElementById('time').options.length); получаем длинну списка

//переменные для синхронизации данных между кол-вом комнат и кол-вом гостей (time & timeout)
var roomNumber = document.getElementById('room_number').options;
var capacity = document.getElementById('capacity').options;
var roomNumberSelected = roomNumber.selectedIndex;
var capacitySelected = capacity.selectedIndex;

//синхронизация данных между кол-вом комнат и кол-вом гостей (room_number & capacity)//

//---функция проверки и синхронного изменения значения в списке capacity---//
function changeRoomNumber(event) {
 if (roomNumberSelected == capacitySelected) { 
    capacity.selectedIndex = roomNumber.selectedIndex; 
  }
}

//---функция проверки и синхронного изменения значения в списке room_number---//
function changeCapacity(event) {
  if (capacitySelected == roomNumberSelected) { 
    roomNumber.selectedIndex = capacity.selectedIndex; 
  } 
}



//переменные для синхронизации данных между типом жилья и стоимостью (type & price)
var typeApart = document.getElementById('type').options;
var price = document.getElementById('price');
var typeApartSelected = typeApart.selectedIndex;



  
  function changeEventHandler(event) {
  alert('You like ' + event.target.value + ' ice cream.');
  
  if (document.getElementById('type').options[i] == 0) { 
    console.log(document.getElementById('type').options[i]);
    price.value = 1000; 
  } else if (document.getElementById('type').options[i] == 1) {
    price.value = 0;
  } else if (document.getElementById('type').options[i] == 2) {
    price.value = 5000;
  }


  
}


//????синхронизация данных между типом жилья и стоимостью (type & price)//

//---????функция проверки и изменения значения price---//

console.log(document.getElementById('type').options.length);
console.log(document.getElementById('type').options);

//function changeType(event) {
// if (typeApartSelected == 0) { 
//    price.value = 1000; 
//  } else if (typeApartSelected == 1) {
//    price.value = 0;
//  } else if (typeApartSelected == 2) {
//    price.value = 5000;
//  }
//}
//  changeType(event);
