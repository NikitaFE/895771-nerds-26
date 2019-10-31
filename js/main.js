"use strict";

var popup = document.querySelector('.write-us');
var openPopup = document.querySelector('.contacts__info-link');
var closePopup = document.querySelector('.write-us__close');


openPopup.addEventListener('click', function (e) {
	e.preventDefault();

	popup.classList.add('show');
})

closePopup.addEventListener('click', function (e) {
	popup.classList.remove('show');
})