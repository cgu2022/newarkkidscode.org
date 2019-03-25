/*Navbar Stuff*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        var h = -$('#navbar').height() - 20;
        console.log(h);
        document.getElementById("navbar").style.top = h.toString() + "px";
    }
    prevScrollpos = currentScrollPos;
}