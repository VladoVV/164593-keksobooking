'use strict';

//synchronizeFields('time', 'timeout', ['12', '13', '14'], ['12', '13', '14'], 'value');

function synchronizeFields(elementName1, elementName2, arrayElements1, arrayElements2, elementProperty) {
  var domElementName1 = document.getElementById(elementName1);
  var domElementName2 = document.getElementById(elementName2);

  domElementName1.addEventListener('change', function () {
    domElementName2.elementProperty = arrayElements1[domElementName1.selectedIndex];
    console.log(domElementName2.elementProperty);
    console.log(arrayElements1[domElementName1.selectedIndex]);
    console.log(elementProperty);
  
  });

  domElementName2.addEventListener('change', function () {
    domElementName1.elementProperty = arrayElements2[domElementName2.selectedIndex];
  });
  
};

//// переменные для синхронизации данных между временем заезда и временем выезда (time & timeout)
//var timeSelect = document.getElementById('time'); //  получаем список вариантов для select time
//var timeOutSelect = document.getElementById('timeout'); //  получаем список вариантов для select timeout
//
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



//synchronizeFields('roomNumber', 'capacity', ['1 комната', '2 комнаты', '100 комнат'], ['не для гостей', 'для 3 гостей', 'для 3 гостей'], 'value');
// переменные для синхронизации данных между кол-вом комнат и кол-вом гостей (roomNumber & capacity)
var roomNumber = document.getElementById('room_number');
var capacity = document.getElementById('capacity');

//// синхронизация данных между кол-вом комнат и кол-вом гостей (room_number & capacity)//
//// ---функция проверки и синхронного изменения значения в списке capacity---//
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




// переменные для синхронизации данных между типом жилья и стоимостью (type & price)
var typeApart = document.getElementById('type');
var price = document.getElementById('price');

var minPriceApart = 1000;
var minPricePalace = 10000;
var minPriceShack = 0;
var prices = [minPriceApart, minPriceShack, minPricePalace];

var maxValuePrice = 1000000;
var minValuePrice = 1000;

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