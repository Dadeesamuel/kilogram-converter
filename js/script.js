// convertion from kilogram to gram
function weightConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputGram").innerHTML=(valNum)/1000;
}
