$(document).ready(function(){

  window.questionSlider = function(){
    $('.question').addClass('hide');

    var active = $('.question').first();

    active.clone()
      .removeClass('active')
      .appendTo('.questions-slider');

    active
      .addClass('animated fadeOutLeft')
      .next()
        .removeClass('hide')
        .addClass('animated fadeInRight');

    active.remove();

    setTimeout(questionSlider, 5000)
  }

  window.questionSlider();

});
