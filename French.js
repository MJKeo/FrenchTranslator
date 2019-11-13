const english = document.getElementById("english");
const french = document.getElementById("french");
const possibleWords = ["baguette", "croissant", "oui", "snails", "monseiur", "eiffel tower", "guillotine", "french fries", "nutella", "soufflés", "ratatouille"];

function doStuff() {
    var eng = english.value;
    var arr = eng.split(" ");
    var numwords = arr.length;
    console.log(numwords);
    for (var i = 0; i < numwords; i++) {
        arr[i] = possibleWords[Math.floor(Math.random() * possibleWords.length)]
    }
    french.innerHTML = arr.join(" ");
}