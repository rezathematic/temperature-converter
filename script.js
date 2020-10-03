// defining the function - convert Celcius to Fahrenheit
function convert(degree) {
    let temp;
    if (degree == 'C') {
        temp = document.getElementById("celsius").value * 9/5 + 32;
        document.getElementById("fahrenheit").value = Math.round(temp);
    } else {
        temp = (document.getElementById("fahrenheit").value -32) * 5/9;
        document.getElementById("celsius").value = Math.round(temp);
    }
}