/*Navbar Stuff*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        var h = -$('#navbar').height()-20;
        console.log(h);
        document.getElementById("navbar").style.top = h.toString() + "px";
    }
    prevScrollpos = currentScrollPos;
}

/*Other Stuff*/
function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView, offseter) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height() + offseter;

        console.clear()
        console.log(pageTop)
        console.log(pageBottom)
        console.log(elementTop)
        console.log(elementBottom)

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        }
          else {
        return((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();

function autoType(elementClass, typingSpeed) {
    var thhis = $(elementClass);
    thhis.css({
        "position": "relative",
        "display": "inline-block"
    });
    thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find(".text-js");
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    setTimeout(function () {
        thhis.css("opacity", 1);
        thhis.prev().removeAttr("style");
        thhis.text("");
        for (var i = 0; i < amntOfChars; i++) {
            (function (i, char) {
                setTimeout(function () {
                    newString += char;
                    thhis.text(newString);
                }, i * typingSpeed);
            })(i + 1, text[i]);
        }
    }, 500);
}

var von = false;
$(window).scroll(function () {
    isElementInView = Utils.isElementInView($('.text-js'), 1, 15);
    if (isElementInView && !von) {
        autoType(".type-js", 100);
        von = true;
    }
});

//$(document).ready(function(){
//  // Now to start autoTyping just call the autoType function with the
//  // class of outer div
//  // The second paramter is the speed between each letter is typed.
//  autoType(".type-js",200);
//});
