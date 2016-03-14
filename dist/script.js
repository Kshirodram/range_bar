'use strict';

function Slider() {
  this.setConfig = function () {};
  this.init = function () {
    var pointer = document.getElementById('slider-pointer');
    var rangeBar = document.getElementById('range-bar');
    var selectedSegment = document.getElementById('range-active-segment');

    rangeBar.addEventListener('click', function (event) {
      console.log(24242);
      var offsetX = event.offsetX;
      pointer.style.transform = "translateX(" + offsetX + "px)";
      selectedSegment.style.width = offsetX;
      selectedSegment.style.backgroundColor = '#ccc';
    }, false);

    pointer.addEventListener('click', function (event) {
      event.stopPropagation();
      return false;
    }, false);
  };
}

var obj = new Slider();
obj.init();