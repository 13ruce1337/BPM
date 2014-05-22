BPM = {
  bpm:0,
  firstsec:0,
  prevsec:0,
  count:0,
  timer:undefined,
  reset:function() {
    BPM.count = 0;
    $('.BPM').text(0);
  },
  init:function() {
    var sec,bpm,time;
    $('.BPM_led').css('background','green');
    time = new Date();
    sec = time.getTime();
    function light() {
      $('.BPM_prev').text(BPM.bpm);
      $('.BPM_led').css('background','red');
      $('.BPM').text(0);
    }
    clearTimeout(BPM.timer);
    BPM.timer = setTimeout(light,2000);
    if((sec - BPM.prevsec) > 1000 * 2) {
      BPM.count = 0;
    }
    if(BPM.count === 0) {
      $('.BPM').text(0);
      BPM.firstsec = sec;
      BPM.count = 1;
    } else {
      BPM.bpm = Math.round(60000 * BPM.count / (sec - BPM.firstsec));
      bpm = Math.round(BPM.bpm * 100) / 100;
      $('.BPM').text(bpm);
      BPM.count++;
    }
    BPM.prevsec = sec;
  }
};
