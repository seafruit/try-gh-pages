var coachActiveTurnIndex = 0;
var bookActiveTurnIndex = 0;

var coachElementClass = '.coaches__photos img';
var bookElementClass = '.books__covers img';

var numberOfCoachEachTurn = 5;
var numberOfBookEachTurn = 4;

var programmingTourVideo = document.getElementById("video-programming-tour");

function prevArrow(isCoach) {
  if (isCoach) {
    coachActiveTurnIndex += 3;
    coachActiveTurnIndex = coachActiveTurnIndex % 4;
    showPic(coachActiveTurnIndex, coachElementClass, numberOfCoachEachTurn)
  } else {
    showBook()
  }
}

function nextArrow(isCoach) {
  if (isCoach) {
    coachActiveTurnIndex += 1;
    coachActiveTurnIndex = coachActiveTurnIndex % 4;
    showPic(coachActiveTurnIndex, coachElementClass, numberOfCoachEachTurn)
  } else {
    showBook()
  }
}

function showBook() {
  bookActiveTurnIndex += 1;
  bookActiveTurnIndex = bookActiveTurnIndex % 2;
  showPic(bookActiveTurnIndex, bookElementClass, numberOfBookEachTurn)
}

function showPic(clickTimes, className, numberOfEachTurn) {
  var pics = document.querySelectorAll(className);
  for (var i = 0; i <= pics.length; i++) {
    if ((clickTimes) * numberOfEachTurn <= i && i < (clickTimes + 1) * numberOfEachTurn) {
      pics[i].style.display = 'block';
    } else {
      pics[i].style.display = 'none';
    }
  }
}

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
