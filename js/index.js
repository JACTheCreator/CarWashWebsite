function findTotal() {
    var total = 0;
    if (document.getElementById("bodywash").checked == true) {
        total += 875;
    }
    if (document.getElementById("interior").checked == true) {
        total += 740;
    }
    if (document.getElementById("vacuum").checked == true) {
        total += 525;
    }
    if (document.getElementById("trunk").checked == true) {
        total += 650;
    }

    document.getElementById("total").innerHTML =  "$" +  total + ".00";

    if (document.getElementById("None").checked == true) {
        total -= 0;
    }
    else if (document.getElementById("150").checked == true) {
        total -= 150;
    }
    else if (document.getElementById("250").checked == true) {
        total -= 250;
    }

    document.getElementById("finaltotal").innerHTML = "$" +  total + ".00";
}