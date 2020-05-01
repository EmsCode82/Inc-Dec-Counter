let nbr = 0;

const dec = () => {
    nbr = nbr - 1;
    if ((nbr >= -1 && nbr <= 1)) {
        document.getElementById("nbr").style.color = "black"
    } else if (nbr <= -2 && nbr % 2 === 0) {
        document.getElementById("nbr").style.color = "red";
    }
    if
        (nbr % 5 === 0) {
        document.getElementById("nbr").style.fontStyle = "italic";
    }
    if (nbr >= -4 && nbr <= 4) {
        document.getElementById("nbr").style.fontStyle = "normal";
    } 
    if (nbr % 7 === 0) {
        document.getElementById("nbr").style.fontWeight = "bold";
    }
    if (nbr >= -6 && nbr <= 6) {
        document.getElementById("nbr").style.fontWeight = "normal";
    }
    document.getElementById("nbr").value = nbr;
}
const inc = () => {
    nbr = nbr + 1;
    if ((nbr >= -1 && nbr <= 1)) {
        document.getElementById("nbr").style.color = "black";
    } else if (nbr >= 2 && nbr % 2 === 0) {
        document.getElementById("nbr").style.color = "blue";
    } 
    if (nbr % 5 === 0) {
        document.getElementById("nbr").style.fontStyle = "italic";
    }
    if (nbr >= -4 && nbr <= 4) {
        document.getElementById("nbr").style.fontStyle = "normal";
    } 
    if (nbr % 7 === 0) {
        document.getElementById("nbr").style.fontWeight = "bold";
    }
    if (nbr >= -6 && nbr <= 6) {
        document.getElementById("nbr").style.fontWeight = "normal";
    }
    document.getElementById("nbr").value = nbr;
}
const display = () => {
    document.getElementById("nbr").value = nbr;
}
const loaded = () => {
    display();
}