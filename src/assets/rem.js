(function(doc, win) {
  let docEl = doc.documentElement,
    // 获取移动屏幕是否翻转
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth > 750) {
        clientWidth = 750;
      }
      docEl.style.fontSize = 20 * (clientWidth / 320) + "px";
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
