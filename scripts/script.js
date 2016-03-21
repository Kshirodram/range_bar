function Slider() {
  this.setConfig = function() {

  };
  this.init = function() {
    var pointer = document.getElementById('slider-pointer');
    var rangeBar = document.getElementById('range-bar');
    var selectedSegment = document.getElementById('range-active-segment');
    var currentValSpan = document.getElementById('current-val');

    //initial values for the range calculation
    var widthOfRangebar = rangeBar.offsetWidth;
    var maxVal = 20000;
    var currentVal = 0;

    currentValSpan.innerHTML = currentVal;

    rangeBar.addEventListener('click', function(event) {
      var offsetX = event.offsetX;
      pointer.style.transform = "translateX("+ offsetX +"px)";
      selectedSegment.style.width = offsetX;
      selectedSegment.style.backgroundColor = '#ccc';

      //calculate for the offset and change the value accordingly
      currentVal = Math.floor((offsetX/widthOfRangebar) * maxVal);
      currentValSpan.innerHTML = currentVal;

    }, false);

    pointer.addEventListener('click', function(event) {
      event.stopPropagation();
      return false;
    }, false);

  };
}

var obj = new Slider();
obj.init();
