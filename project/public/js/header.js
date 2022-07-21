$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop) { // 140 é a distancia que vc rola antes da logo sumir
        $("#header").fadeOut();
    } else if(this.scrollTop != scrollTop) {
        $("#header").fadeIn();
    }
});