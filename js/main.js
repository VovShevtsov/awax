"use strict";
"use strict";

var t;

function up() {
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

  if (top > 0) {
    window.scrollBy(0, (top + 100) / -10);
    t = setTimeout('up()', 20);
  } else clearTimeout(t);

  return false;
}

;
var burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu__list');
burger.addEventListener('click', function (e) {
  e.currentTarget.classList.toggle('burger--active');
  menu.classList.toggle('menu__list--active');
});
var popup = document.getElementById('mypopup'),
    popupToggle = document.getElementById('mybtn'),
    popupClose = document.querySelector('.popup__close');

popupToggle.onclick = function () {
  popup.style.opacity = "1";
  popup.style.visibility = "visible";
};

popupClose.onclick = function () {
  popup.style.opacity = "0";
  popup.style.visibility = "hidden";
};

window.onclick = function (e) {
  if (e.target == popup) {
    popup.style.opacity = "0";
    popup.style.visibility = "hidden";
  }
};

var inputs = document.querySelectorAll('input[type="tel"]');
var im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

function validateForms(selector, rules) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function submitHandler(form, values, ajax) {
      console.log(form);
      var formData = new FormData(form);
      fetch("mail.php", {
        method: "POST",
        body: formData
      }).then(function (data) {
        console.log(data);
        console.log('Отправлено');
        form.reset();
      });
    }
  });
}

;
validateForms('.popup__form', {
  name: {
    required: true,
    name: true
  },
  tel: {
    required: true
  }
});
$(function () {
  $('.hiro__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
});
//# sourceMappingURL=main.js.map
