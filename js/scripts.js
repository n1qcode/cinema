'use strict'

const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const menuButton = document.querySelector('.m-menu-logo');
const menuFull = document.querySelector('.menu')
let cost = 300;
let totalPrice = 0;

schemeSvg.addEventListener('click', (event) => {
    event.target.classList.toggle('active') ? !event.target.classList.contains('booked') : false;
    let totalSeats = schemeSvg.querySelectorAll('.active').length;
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
})

menuButton.addEventListener('click', (event) => {
menuFull.classList.toggle('is-open');
})