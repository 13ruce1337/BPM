$(function() {
  $('.button').on('mousedown',function() {
    $('.button').css('box-shadow','none');
    BPM.init();
  });
  $('.button').on('mouseup',function() {
    $('.button').css('box-shadow','1px 1px 10px white');
  });
});
