var programmingTourVideo = document.getElementById("video-programming-tour");

programmingTourVideo.onended = function () {
  programmingTourVideo.webkitExitFullscreen()

};

function videoPlayPause() {
  if (programmingTourVideo.paused) {
    programmingTourVideo.play();
    programmingTourVideo.webkitRequestFullscreen();
  } else {
    programmingTourVideo.pause();
  }
};

function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
function setCookie() {
  var channel = getQueryString('channel');
  if (channel) {
    document.cookie = 'channel=' + channel;
  } else {
    document.cookie = 'channel=' + '';
  }
  var program = getQueryString('program');
  if (program) {
    document.cookie = 'program=' + program;
  }
}
setCookie();

function bling() {
  var imgs = document.getElementsByClassName('heavenly-body__light');
  for (var i = 0; i < imgs.length; i += 1) {
    if (imgs[i].style.visibility === 'visible') {
      imgs[i].style.visibility = 'hidden';
    } else {
      imgs[i].style.visibility = 'visible';
    }
  }
  setTimeout('bling()', 300);
}
bling();

function showLoading() {
  document.getElementById("over").style.display = "none";
  document.getElementById('layout').style.display = 'none';
  document.getElementById('main').style.opacity = '1';
}

setTimeout('showLoading()', 2000);