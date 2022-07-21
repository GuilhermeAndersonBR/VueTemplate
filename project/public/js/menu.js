var submenu = document.querySelector('.sub-menu-content');
var openbtn = document.querySelector('#open-btn');
var closebtn = document.querySelector('#close-btn');

var open =  function() {
    submenu.style.right = "0";
}

var close = function() {
    submenu.style.right = "-20em";
}

openbtn.addEventListener("click", function() {
    open();
});

closebtn.addEventListener("click", function() {
    close();
});

var submenuBtn = document.querySelector('#submenu-btn');
var dropdownMenu = document.querySelector('.dropdown-menu');

var openSubmenu =  function() {
    dropdownMenu.style.display = "block";
}

var closeSubmenu = function() {
    dropdownMenu.style.display = "none";
}

submenuBtn.addEventListener("click", function() {
    if (dropdownMenu.style.display == "block") {
        closeSubmenu();
    } else {
        openSubmenu();
    }
});