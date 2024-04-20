let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

celToFar = () => {
    let outputF = (parseFloat(celsius.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(outputF.toFixed(2));
}

farToCel = () => {
    let outputC = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
    celsius.value = parseFloat(outputC.toFixed(2));
}