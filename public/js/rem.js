// JavaScript Document
	!(function(win, doc, orw) {
    	var docEle = doc.documentElement;
    	fnResetHtmlFontSize();
   	 	function fnResetHtmlFontSize() {
        var width = docEle.clientWidth;
        if (width >= orw) {
            docEle.style.fontSize = '100px';
        } else {
            docEle.style.fontSize = (width / orw) * 100 + 'px';
        }
    }
    win.addEventListener('resize', fnResetHtmlFontSize, false);
})(window, document, 750);

