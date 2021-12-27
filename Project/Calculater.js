function forclear() {
      document.getElementById("output").innerHTML = "0";
}
<button id="r1-1" onclick="forclear()" style="width: 138px;">
     C
</button>
function removeZero() {
      var value = document.getElementById("output").innerHTML;
      if (value == "0") {
           value = " "
           document.getElementById("output").innerHTML = value;
      }
}
function perc() {
      var value = document.getElementById("output").innerHTML;
      value = value / 100;
      document.getElementById("output").innerHTML = value;
}
<button id="r1-3" onclick="perc()"> % </button>
function fordisplay(value) {
      removeZero()
      document.getElementById("output").innerHTML += value;
}
<button id="r3-1" value="4" onclick="fordisplay('4') ">4</button>
