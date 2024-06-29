var menu = document.querySelector('.user-bar .menu') ;
var sidebar = document.querySelector(".sidebar");
var closeButton = document.querySelector(".sidebar #closed")

menu.onclick = function() {
    sidebar.style.transform = "translateX(0px)";
    closeButton.className = "fa-solid fa-circle-xmark";
    console.log(closeButton)
}

closeButton.onclick = function() {
    sidebar.style.transform = "translateX(-200px)"
}