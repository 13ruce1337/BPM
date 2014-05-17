BPM = {
  timer:undefined,
  init:function() {
    BPM.tempcount += 1;
    console.log(BPM.tempcount);
  },
  counter:function() {
  },
  tempcount:0,
  count:[],
  listen:function(a) {
    function f() {
      clearInterval(BPM.timer);
    }
    clearTimeout(t);
    var t = setTimeout(f,10000);
    if(a) clearTimeout(t);
  }
};
