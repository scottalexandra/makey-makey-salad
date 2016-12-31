import 'jquery';
import { Vegetable } from './classes/vegetable.js';


$(function() {
  window.counter = 0;
  $('svg').on('click', function(e) {
    $('.container__outer').outerWidth('90%');
    $(e.currentTarget).css('display','none');
    $('.instructions').css('display', 'block');
    $('.veggies').css('display', 'inline-block');


    $('.vegetable').on('click', function(e) {
      counter++;
      let vegClass = e.target.dataset.veg
      let veggie = new Vegetable(vegClass, counter);
      veggie.addToSalad();
      $('.salad-vegetable').css('transform', 'translateY(73vh)');
    });
  });
});
