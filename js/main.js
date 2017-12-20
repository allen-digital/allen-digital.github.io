(function() {

  document.addEventListener("DOMContentLoaded", function(event) {
    var buttons = document.getElementsByClassName('print-button')
    Array.prototype.forEach.call(buttons, function(button) {
      button.addEventListener('click', function() {
        window.print();
      }, false);
    });
  });

})();
