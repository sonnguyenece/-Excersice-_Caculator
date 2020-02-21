function input(value1) {
   document.getElementById("inputNumber").value+=value1;
}
function startButton() {
  document.getElementById("inputNumber").value= '';
}
function equal() {
    document.getElementById("inputNumber").value = eval(document.getElementById("inputNumber").value);

}
function percent() {
    document.getElementById("inputNumber").value=document.getElementById("inputNumber").value/100;
}
function sqrtFunction() {
    document.getElementById("inputNumber").value=Math.sqrt(document.getElementById("inputNumber").value);
}