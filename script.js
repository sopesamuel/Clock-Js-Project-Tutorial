(function(){
  var time = new Date(),
  second = time.getSeconds() / 60 * 360,
  minute = time.getMinutes() / 60 * 360 + time.getSeconds() / 60 * 6,
  hour = time.getHours() / 12 * 360 + time.getMinutes() / 60 * 30,

  animation = [

    "@keyframes hand-seconds{from{transform: rotate(" + second + "deg);}to{transform: rotate(" + (second  + 360) + "deg);}}",
    "@keyframes hand-minute{from{transform: rotate(" + minute + "deg);}to{transform: rotate(" + (minute + 360) + "deg);}}",
    "@keyframes hand-hour{from{transform: rotate(" + hour + "deg);}to{transform: rotate(" + (hour + 360) + "deg);}}"
  ].join("");
  document.querySelector('#clock-animate').innerHTML = animation;
})();