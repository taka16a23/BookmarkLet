function(){ var regexp = /https?:\\/\\/[^&?#]+?\\.(?:jpe?g|png|gif|bmp)(?:$|\\b)/i; var array = Array.prototype.slice.call(document.querySelectorAll( 'a[href*=\".png\"], a[href*=\".gif\"], a[href*=\".jpg\"], a[href*=\".jpeg\"], a[href*=\".bmp\"],' + 'a[href*=\".PNG\"], a[href*=\".GIF\"], a[href*=\".JPG\"], a[href*=\".JPEG\"], a[href*=\".BMP\"]' )); for (var i = 0, l = array.length; i \u003C l; i++) { var m = regexp(array[i].href); if (!m) continue; var a = document.createElement('a'); a.href = m; dispatchMouseEvents({ type:'click', altKey:true, target:a, button:0 }); } function dispatchMouseEvents(opt) { var evt = document.createEvent('MouseEvents'); evt.initMouseEvent(opt.type, opt.canBubble||true, opt.cancelable||true, opt.view||window, opt.detail||0, opt.screenX||0, opt.screenY||0, opt.clientX||0, opt.clientY||0, opt.ctrlKey||false, opt.altKey||false, opt.shiftKey||false, opt.metaKey||false, opt.button||0, opt.relatedTarget||null); opt.target.dispatchEvent(evt); return evt; } }
