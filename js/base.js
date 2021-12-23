
var body = document.body;
var ua = navigator.userAgent.toLowerCase();
var isMobile = ua.indexOf("windows nt") == -1 && ua.indexOf("macintosh") == -1 && ua.indexOf("pad") == -1 && ua.indexOf("x86_64") == -1;
var isAndroid = ua.indexOf("android") > -1;
var isPad = ua.indexOf("pad") > -1;
var isSafari = /Version[|\/]([0-9.]+)([^0-9a-zA-Z]+)Mobile[|\/]([0-9a-zA-Z]+)([^0-9a-zA-Z]+)Safari[|\/]([0-9.]+)$/i.test(ua);
body.addEventListener('touchstart', function () { });
window.baseready = (function () {
  var readyfn = [];
  var readyobj = function (fn) {
    if (!!fn && typeof fn == "function") {
      readyfn.push({
        fn: fn
      });
    }
  };
  readyobj.insert = function (fn) {
    if (!!fn && typeof fn == "function") {
      readyfn.push({
        fn: fn
      });
    }
  };
  readyobj.excute = function () {
    for (var i = 0; i < readyfn.length; i++) {
      if (typeof readyfn[i].fn == "function") {
        readyfn[i].fn();
      }
    }
  }
  return readyobj;
})();


var domain = '<a href="/"><span>五月天视频</span>' + getDomain() + '</a>';
getId('domain').innerHTML = domain;



(function () {
  var posterImages = document.querySelectorAll('.nature');
  setTimeout(function () { loadImg(posterImages); }, 100);
  addEvent(window, 'scroll', function () {
    loadImg(posterImages);
    if (getScrollTop() > 500) {
      getId('btnGotop').style.display = 'block';
    } else {
      getId('btnGotop').style.display = "none";
    }
  });
})();
var linkstr = "<li><a href=\"https://www.bluedh.wtf\" target=\"_blank\" rel=\"nofollow\"> 蓝色导航</a></li>" +
  "<li><a href=\"https://www.zavdh.co/\" target=\"_blank\" rel=\"nofollow\"> 找AV导航</a></li>" +
  "<li><a href=\"https://dizhi.buliangfabu.com/tiao/1.html\" target=\"_blank\" rel=\"nofollow\"> 不良研究所</a></li>" +
  "<li><a href=\"https://tianxianggedh.club\" target=\"_blank\"> 天香阁导航  </a></li>"+
    "<li><a href=\"https://linkslinks.icu\" target=\"_blank\"> 愛優社 </a></li>";
getId('playul').innerHTML = linkstr;

function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

/* LazyLoad */
function loadImg(arr) {
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i].getBoundingClientRect().top < document.documentElement.clientHeight && !arr[i].isLoad) {
      arr[i].isLoad = true;
      arr[i].style.cssText = 'transition:0;opacity:0;';
      if (arr[i].dataset) {
        aftLoadImg(arr[i], arr[i].dataset.original);
      } else {
        aftLoadImg(arr[i], arr[i].getAttribute('data-original'));
      }
      (function (i) {
        setTimeout(function () {
          arr[i].style.cssText = 'transition:1s;opacity:1;';
        }, 16)
      })(i);
    }
  }
}

function aftLoadImg(obj, url) {
  var oImg = new Image();
  oImg.onload = function () {
    obj.src = oImg.src;
  }
  oImg.src = url;
}

function getDomain() {
  var domain = document.domain.split('.').slice(-2).join('.');
  return domain;
}

function goTop() {
  var goTop = setInterval(scrollMove, 10);
  function scrollMove() {
    setScrollTop(getScrollTop() / 2);
    if (getScrollTop() == 0) clearInterval(goTop);
  }
}

function getScrollTop() {
  var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  if (body) {
    bodyScrollTop = body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}

function setScrollTop(value) {
  if (document.documentElement.scrollTop) {
    document.documentElement.scrollTop = value;
  } else {
    body.scrollTop = value;
  }
}

function addEvent(obj, type, fn) {
  if (obj.addEventListener) obj.addEventListener(type, fn, false);
  else if (obj.attachEvent) {
    obj["e" + type + fn] = fn;
    obj[type + fn] = function () { obj["e" + type + fn](window.event); }
    obj.attachEvent("on" + type, obj[type + fn]);
  }
}


function random() {
  return parseInt(Math.random() * 10);
}

function randomsort(a, b) {
  return random() > 5 ? -1 : 1;
}

function getRandomNumberByRange(start, end) {
  return Math.round(Math.random() * (end - start) + start)
}

function getImage(idName, num) {
  return document.getElementById(idName).getElementsByTagName('img')[num].clientHeight;
}


function getId(idName) {
  if (document.getElementById(idName) !== null) {
    return document.getElementById(idName);
  }
  return { 'innerHTML': '' };
}


function getStyle(dom, attr) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(dom, null)[attr];
  } else {
    return dom.currentStyle[attr];
  }
}

function getClass(clsName, oParent) {
  var oParents = (typeof (oParent) == "object") ? oParent : (!!oParent ? document.getElementById(oParent) : document);
  var boxArr = new Array();
  var oElements = oParents.getElementsByTagName('*');
  for (i = 0; i < oElements.length; i++) {
    var classname = oElements[i].className || '';
    var classNameArr = (classname + "").split(/\s+/);
    for (j = 0; j < classNameArr.length; j++) {
      if (classNameArr[j] === clsName) {
        boxArr.push(oElements[i]);
      }
    }
  }
  return boxArr;
}

function prefixInteger(num, length) {
  return (Array(length).join('0') + num).slice(-length);
}


function goUrl(url) {
  window.open(url, "_blank");
}

baseready.excute();

//{imgs:["https://cdn.jsdelivr.net/gh/gcjxdz/wytzy/images/4545.gif"],url:'https://www.pg888555.com/?yt111'} 
var img322data = [
	{imgs:["https://cdn.jsdelivr.net/gh/gcjxdz/wytzy/images/4545.gif"],url:'https://www.pg888555.com/?yt111'},
	{imgs:["https://cdn.jsdelivr.net/gh/gcjxdz/wytzy/images/4545.gif"],url:'https://www.pg888555.com/?yt111'} 
];
if (img322data.length > 0) {
  var linkstr2 = '';
  linkstr2 += '<div class="wrap mod">';
  for (var i = 0; i < img322data.length; i++) {
    var img = img322data[i].imgs[0]
    linkstr2 += '			<a href="' + img322data[i].url + '" target="_blank" rel="nofollow"><img  src="' + img + '"/></a>';
  }
  linkstr2 += '</div>';
  getId('img322').innerHTML = linkstr2;
}

function setTagsDiv() {
    var showMoreSpan = $('.ztk .show-more span');
    if (showMoreSpan.html() == '展开') {
		$('.ztk a.hidezt').attr('class','show');
        $('.ztk .show-more i').attr('class', 'close-arrow');
        showMoreSpan.html('收起');
    } else {
        showMoreSpan.html('展开');
		$('.ztk a.show').attr('class','hidezt');
        $('.index-tags .show-more i').attr('class', 'open-arrow');
    }
}

var site_notice = {
    "is": "1",
    "auto": "1",
    "color": "#f73838",
    "html": "<div class=\"notify-content\"><h3>五月天视频公告<\/h3><div>失效视频,图片已恢复，感谢大家的支持<br>\r\n请收藏邮箱wytshipin@gmail.com<br>\r\n发送任意内容获取最新地址<br>\r\n如有无法播放请刷新或邮件<br>\r\n安卓使用:谷歌,火狐浏览器<br>\r\n联通,电信网络更顺畅<br><\/div><\/div>"
};

function site_notify() {
  "use strict";
  if (0 == site_notice.is) return !1;
  (null == Cookies.get("ripro_notice_cookie") || t) &&
    Swal.fire({
      html:site_notice.html,
      background:site_notice.color,
      showConfirmButton: !1,
      width: 560,
      padding: 0,
      allowOutsideClick: 1,
      showCloseButton: !0,
    }).then((t) => {
      Cookies.set("ripro_notice_cookie", 1);
    });
}
  jQuery(function () {
    "use strict";
      1 == site_notice.auto && site_notify();
  });
