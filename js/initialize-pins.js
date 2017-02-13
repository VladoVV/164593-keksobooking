'use strict';

var initializePins = function () {

  //  перебираем все элементы с классом и удаляем класс//
  function removeClass(collection, className) {
    for (var j = 0; j < collection.length; j++) {
      collection[j].classList.remove(className);
    }
  }

  // ---Делегируем для отслеживания события на каждом элементе из коллекции с классом пин---//
  var tokyoPinMap = document.querySelector('.tokyo__pin-map');

  var hzName = function (event) { // ХЗ как назвать эту функцию?
    var target = event.target;
    if (target.tagName === 'IMG') { // проверяем, если событие произошло на картинке, то
      target = target.parentNode; // переопределяем таргет на родителя картинки (именно в заданной разметке)
    }
    removeClass(pinElements, 'pin--active');
    target.classList.add('pin--active'); //  элементу на котором произошло событие добавляем класс pin--active
    dialog.classList.remove('dialog-hidden'); //  открываем окно диалог
    dialogClose.setAttribute('aria-pressed', 'true'); // добавляем атрибут тру, при открытии окна
  };

  tokyoPinMap.addEventListener('click', function (event) {
    hzName(event);
  });

  tokyoPinMap.addEventListener('keydown', function (event) {
    if (event.keyCode === ENTER_KEYCODE) {
      hzName(event);
    }
  });

  // ---закрываем окно диалог при клике на dialog__close ---//
  function closingDialog() {
    dialog.classList.add('dialog-hidden'); // добавляем окну диалог свойство display: none
    removeClass(pinElements, 'pin--active');
    dialogClose.setAttribute('aria-pressed', 'false');
  }

  dialogClose.addEventListener('click', closingDialog);

  dialogClose.addEventListener('keydown', function (event) {
    if (event.keyCode === ENTER_KEYCODE) {
      closingDialog();
      dialogClose.setAttribute('aria-pressed', 'false');
    }
  });
};
