'use strict';

function synchronizeFields(elementName1, elementName2, arrayElements1, arrayElements2, elementProperty) {
  var node1 = document.getElementById(elementName1);
  var node2 = document.getElementById(elementName2);

  node1.addEventListener('change', function () {
    node2[elementProperty] = arrayElements2[arrayElements1.indexOf(node1[elementProperty])];
  });

  node2.addEventListener('change', function () {
    node1[elementProperty] = arrayElements1[arrayElements2.indexOf(node2[elementProperty])];
  });
}
synchronizeFields;
