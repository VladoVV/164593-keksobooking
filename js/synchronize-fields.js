'use strict';

window.synchronizeFields = function (elementName1, elementName2, arrayElements1, arrayElements2, elementProperty) {

  document.getElementById(elementName1).addEventListener('change', function () {
    document.getElementById(elementName2)[elementProperty] = arrayElements2[arrayElements1.indexOf(document.getElementById(elementName1)[elementProperty])];
  });

  document.getElementById(elementName2).addEventListener('change', function () {
    document.getElementById(elementName1)[elementProperty] = arrayElements1[arrayElements2.indexOf(document.getElementById(elementName2)[elementProperty])];
  });
};
