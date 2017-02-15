'use strict';

var pinElements = document.querySelectorAll('.pin'); //  выбираем все элементы с классом pin

//  ---переменные для закрытия окна диалог--- //
var dialog = document.querySelector('.dialog'); //  ищем окно диалог
var dialogClose = dialog.querySelector('.dialog__close'); //  ищем эемент для закрытия окна диалог



// переменные для синхронизации данных между кол-вом комнат и кол-вом гостей (roomNumber & capacity)
var roomNumber = document.getElementById('room_number');
var capacity = document.getElementById('capacity');

// переменные для синхронизации данных между типом жилья и стоимостью (type & price)
var typeApart = document.getElementById('type');
var price = document.getElementById('price');
var minPriceApart = 1000;
var minPricePalace = 10000;
var minPriceShack = 0;
var prices = [minPriceApart, minPriceShack, minPricePalace];
var maxValuePrice = 1000000;
var minValuePrice = 1000;
var titleAd = document.getElementById('title');
var titleMinLength = 30;
var titleMaxLength = 100;
var adressApart = document.getElementById('address');
var ENTER_KEYCODE = 13;

// задаем ограничения для полей формы
function setValues() {
  price.required = true;

  price.addEventListener('blur', function maxMinPrice() {
    if (price.value > maxValuePrice) {
      price.value = maxValuePrice;
    }
    if (price.value < minValuePrice) {
      price.value = minValuePrice;
    }
  });

  titleAd.minLength = titleMinLength;
  titleAd.maxLength = titleMaxLength;
  titleAd.required = true;

  adressApart.required = true;
}
setValues();

initializePins();


// ---синхронизации данных между типом жилья и стоимостью (type & price)---//
// изменяем стоимсть в зависимости от типа жилья
typeApart.addEventListener('change', function () {
  price.min = price.value = prices[typeApart.selectedIndex];
});


// изменяем тип жилья в зависимости от стоимости
price.addEventListener('change', function () {
  if (price.value >= minPriceApart && price.value < minPricePalace) {
    typeApart.selectedIndex = 0;
  }
  if (price.value >= minPriceShack && price.value < minPriceApart) {
    typeApart.selectedIndex = 1;
  }
  if (price.value >= minPricePalace) {
    typeApart.selectedIndex = 2;
  }
});


// синхронизация данных между кол-вом комнат и кол-вом гостей (room_number & capacity)//
// ---функция проверки и синхронного изменения значения в списке capacity---//
//roomNumber.addEventListener('change', function () {
//  if (roomNumber.selectedIndex === 2) {
//    capacity.selectedIndex = 1;
//  } else {
//    capacity.selectedIndex = roomNumber.selectedIndex;
//  }
//});
//
//// ---функция проверки и синхронного изменения значения в списке room_number---//
//capacity.addEventListener('change', function () {
//  roomNumber.selectedIndex = capacity.selectedIndex;
//});
//var synchronizeFields;

synchronizeFields('time', 'timeout', ['12', '13', '14'], ['12', '13', '14'], 'selectedIndex');
//synchronizeFields('room_number', 'capacity', ['1 комната', '2 комнаты', '100 комнат'], ['не для гостей', 'для 3 гостей', 'для 3 гостей'], 'value');
//// переменные для синхронизации данных между временем заезда и временем выезда (time & timeout)
//var timeSelect = document.getElementById('time'); //  получаем список вариантов для select time
//var timeOutSelect = document.getElementById('timeout'); //  получаем список вариантов для select timeout
//
//// ---синхронизация данных между временем заезда и временем выезда (time & timeout)---//
//// функция проверки и синхронного изменения значения в списке timeout
//timeSelect.addEventListener('change', function () {
//  timeOutSelect.selectedIndex = timeSelect.selectedIndex;
//});
//
//// функция проверки и синхронного изменения значения в списке time
//timeOutSelect.addEventListener('change', function () {
//  timeSelect.selectedIndex = timeOutSelect.selectedIndex;
//});
