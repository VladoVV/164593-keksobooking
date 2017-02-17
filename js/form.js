'use strict';

var initializePins;
var synchronizeFields;

// переменные для синхронизации данных между типом жилья и стоимостью (type & price)

var price = document.getElementById('price');
var maxValuePrice = 1000000;
var minValuePrice = 1000;
var titleAd = document.getElementById('title');
var titleMinLength = 30;
var titleMaxLength = 100;
var adressApart = document.getElementById('address');


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

synchronizeFields('time', 'timeout', ['После 12', 'После 13', 'После 14'], ['Выезд до 12', 'Выезд до 13', 'Выезд до 14'], 'value');
synchronizeFields('room_number', 'capacity', ['1 комната', '2 комнаты', '100 комнат'], ['не для гостей', 'для 3 гостей', 'для 3 гостей'], 'value');
synchronizeFields('type', 'price', ['Квартира', 'Лачуга', 'Дворец'], ['1000', '0', '10000'], 'value');
