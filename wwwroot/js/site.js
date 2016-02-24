// site.js

(function () {
    
    
    var ele = $("#username");
    ele.text("Mathew Kurian");
    //var ele = document.getElementById("username");
    //ele.innerHTML = "Mathew Kurian";

    var main = $("#main");
    main.on("mouseenter", function () {
        main.style = "background-color: #888;";
    });
    main.on("mouseleave",  function () {
        main.style["background-color"] =  "";
    });
    
    var menuItems = $("ul.menu li a");
    menuItems.on("click", function (){
       alert("Hello"); 
    });
})();
