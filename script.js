document.addEventListener("DOMContentLoaded", function() {
    var navigate = document.getElementsByClassName('navigation')
    for (var i = 0; i < navigate.length; i++) {
        let nl = navigate[i]
        nl.onclick = function() {
            for (var j = 0; j < navigate.length; j++) {
                if (navigate[j] == nl) {
                    navigate[j].classList.add("active")
                } 
                else {
                    navigate[j].classList.remove("active")
                }
            }
        }
    }

    var circle = document.getElementsByClassName('grey_circle')
    for (var i = 0; i < circle.length; i++) {
        let ac = circle[i]
        ac.onclick = function() {
            for (var j = 0; j < circle.length; j++) {
                if (circle[j] == ac) {
                    circle[j].classList.add("active_circle")
                } 
                else {
                    circle[j].classList.remove("active_circle")
                }
            }
        }
    }
        var icon_back = document.getElementsByClassName('icon_background')
    for (var i = 0; i < icon_back.length; i++) {
        let gc = icon_back[i]
        gc.onclick = function() {
            for (var j = 0; j < icon_back.length; j++) {
                if (icon_back[j] == gc) {
                    icon_back[j].classList.add("active_green")
                } 
                else {
                    icon_back[j].classList.remove("active_green")
                }
            }
        }
    }

});
// var bell = document.getElementById('icon_1')
// var calendar = document.getElementById('icon_2')
// var growth = document.getElementById('icon_3')
// var heart = document.getElementById('icon_4')
// var table = document.getElementById('icon_5')
// bell.onclick =function(){
// 	bell.classList.add("active_green")
// 	document.getElementsByClassName("grey_circle").classList.add("active_circle")

// }