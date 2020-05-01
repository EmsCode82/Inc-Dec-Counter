let nbr = 0;

const dec = () => {
    nbr = nbr -1;
    document.getElementById("nbr").value = nbr;
}
const inc = () => {
    nbr = nbr +1;
    document.getElementById("nbr").value = nbr;
}
const display = () => {
    document.getElementById("nbr").value = nbr;
}
const loaded = () => {
    display();
}