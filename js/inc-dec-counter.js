let nbr = 0;
const inc = () => {
    nbr++;
    display(nbr);
}
const dec = () => {
    nbr--;
    display(nbr);
}
const display = (nbr) => {
    let nbrCrtl = document.getElementById("nbr");
    nbrCrtl.value = nbr;
    nbrCrtl.style.color = (nbr % 2 == 0) ? "red" : "black";
    nbrCrtl.style.fontStyle = (nbr % 5 == 0) ? "italic" : "normal";
    nbrCrtl.style.fontWeight = (nbr % 7 == 0) ? "bold" : "normal";
}
const loaded = () => {
    display(nbr);
}