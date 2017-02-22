'use strict';

window.synchronizeFields = function (element1, element2, values1, values2, syncProperty) {

  document.getElementById(element1).addEventListener('change', function () {
    document.getElementById(element2)[syncProperty] = values2[values1.indexOf(document.getElementById(element1)[syncProperty])];
  });

  document.getElementById(element2).addEventListener('change', function () {
    document.getElementById(element1)[syncProperty] = values1[values2.indexOf(document.getElementById(element2)[syncProperty])];
  });
};
