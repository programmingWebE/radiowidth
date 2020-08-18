$(document).ready(function() {

  $(window).resize(function() {
    if ($(window).width() >= 650) {
      $('.main-header__list').attr('style', '');
      $('.line-burger').removeClass('line-active');
    }
    radioWidth();

  });

  function radioWidth() {

    var indicator = document.querySelector(".cart__mask");
    var items = document.querySelectorAll(".cart__label");

    function handleIndicator(el) {
      el.removeAttribute("style");
      el.closest('.cart__element').querySelector(".cart__mask").style.width = "".concat(el.offsetWidth, "px");
      el.closest('.cart__element').querySelector(".cart__mask").style.left = "".concat(el.offsetLeft, "px");
      el.classList.add("is-active");
    }

  
    items.forEach(function(item, index) {
      item.addEventListener("click", function(e) {
        
        handleIndicator(e.target);
      });
      item.classList.contains("is-active") && handleIndicator(item);
    });
  }

  radioWidth();

  
 $('select').styler();


});