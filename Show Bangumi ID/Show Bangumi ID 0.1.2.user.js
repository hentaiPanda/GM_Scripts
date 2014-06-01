// ==UserScript==
// @name           Show Bangumi ID
// @description    在昵称旁显示用户名
// @version        0.1.2
// @include        http://bangumi.tv/*
// @include        http://bgm.tv/*
// @include        http://chii.in/*
// ==/UserScript==



function getLastChildNode(node) {
  var i;
  var ln = node.lastChild;
  while (ln.nodeType != 1) {
    ln = ln.previousSibling;
  }
  return ln;
}

function showId() {
  var links = document.getElementsByClassName("l");
  var id = "";
  var replybtn = "";
  for (var i = 0; i < links.length; i++) {
    if (links[i].tagName.toLowerCase() == "a"
      && links[i].parentNode.tagName.toLowerCase() == 'strong'
      && links[i].href.split('/')[3] == 'user') {
      id = links[i].href.split("/")[4];
      links[i].innerHTML = links[i].innerHTML + "(id: " + id + ")";
    }
  }
}


showId();