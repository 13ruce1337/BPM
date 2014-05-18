BPM = {
  bpm:function() {
    var bpm,sum;
    sum = 0;
    for(var i=0;i<BPM.count.length;i++) {
      if(BPM.count[i] !== null) {
        sum += BPM.count[i];
      }
    }
    bpm = Math.floor((120/BPM.count.length)*sum,1) || 0;
    return bpm;
  },
  timer:undefined,
  init:function() {
    BPM.tempcount += 1;
    if(!BPM.timer) {
      BPM.counter();
      BPM.listen();
    }
    $('.BPM').text(BPM.bpm());
  },
  state:undefined,
  counter:function() {
    function f() {
      BPM.count.push(BPM.tempcount);
      BPM.tempcount = 0;
    }
    BPM.timer = setInterval(f,500);
  },
  tempcount:0,
  count:[],
  listen:function() {
    var t;
    clearTimeout(t);
    t = setTimeout(f,5000);
    $('.BPM_led').attr('style','background:green;');
    BPM.state = 1;
    function f() {
      clearInterval(BPM.timer);
      $('.BPM_led').attr('style','background:red;');
      $('.BPM_prev').text(BPM.bpm());
      BPM.timer = undefined;
      BPM.state = undefined;
      BPM.count = [];
    }
  }
};
