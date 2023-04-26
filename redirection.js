



let params = new URLSearchParams(window.location.search)
let type = params.get('type')
let id = params.get('id')
var el_up = document.getElementById("GFG_UP");
var el_down = document.getElementById("GFG_DOWN");
el_up.innerHTML = "Click on the button to get the OS of User's System.";
var Name = "Unknown OS";
if (navigator.userAgent.indexOf("Win") != -1) window.location.href="http://localhost:63342/Flashup/index.html"
if (navigator.userAgent.indexOf("Mac") != -1) window.location.href="http://localhost:63342/Flashup/index.html"
if (navigator.userAgent.indexOf("Linux") != -1) window.location.href="http://localhost:63342/Flashup/index.html"
if (navigator.userAgent.indexOf("Android") != -1) window.location.href="wonder:///"+type+"/"+id
if (navigator.userAgent.indexOf("like Mac") != -1) window.location.href="wonder:///"+type+"/"+id
    
var iOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    !window.MSStream;
if (iOS) window.location.href="wonder:///"+type+"/"+id

