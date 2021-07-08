
var center = document.createElement("center")

var container = document.createElement("div");
container.setAttribute("class", "container");

var table = document.createElement("table");
table.setAttribute("class", "ml-3 mt-3");
table.setAttribute("border", "1");


var row = document.createElement("tr");

var td = document.createElement("td");
td.setAttribute("colspan", "4");
var display = document.createElement("input");
display.setAttribute("type", "text");
display.setAttribute("id", "number");
display.setAttribute("value", "");
display.style.borderRadius = "10px";
display.style.width = "100%";
display.style.height = "100%";
display.style.textAlign = "right";


var row1 = document.createElement("tr");

var td1 = document.createElement("td");
var button_clr = document.createElement("input");
button_clr.setAttribute("type", "button");
button_clr.setAttribute("class", "btn btn-block")
button_clr.setAttribute("value", "C");
button_clr.addEventListener("click", function(e){
    document.getElementById("number").value = '';
    
});
button_clr.setAttribute("id", "clear");
button_clr.style.background = "black";
button_clr.style.color = "White";

var td2 = document.createElement("td");
var button_op = document.createElement("input");
button_op.setAttribute("type", "button");
button_op.setAttribute("class", "btn btn-block");
button_op.setAttribute("value", "(");
button_op.addEventListener("click", function(e){
    document.getElementById("number").value += e.target.value;
    
});
button_op.style.background = "black";
button_op.style.color = "White";

var td3 = document.createElement("td");
var button_cp = document.createElement("input");
button_cp.setAttribute("type", "button");
button_cp.setAttribute("class", "btn btn-block");
button_cp.setAttribute("value", ")");
button_cp.addEventListener("click", function(e){
    document.getElementById("number").value += e.target.value;
});
button_cp.style.background = "black";
button_cp.style.color = "White";

var td4 = document.createElement("td");
var button_mod = document.createElement("input");
button_mod.setAttribute("type", "button");
button_mod.setAttribute("class", "btn btn-block");
button_mod.setAttribute("value", "%");
button_mod.addEventListener("click", function(e){
    document.getElementById("number").value += e.target.value;
    
});
button_mod.style.background = "black"
button_mod.style.color = "White";


var row2 = document.createElement("tr");

var td5 = document.createElement("td");
var button1 = document.createElement("input");
button1.setAttribute("type", "button");
button1.setAttribute("class", "btn btn-block event");
button1.setAttribute("value", "1");
button1.style.background = "black"
button1.style.color = "White";

var td6 = document.createElement("td");
var button2 = document.createElement("input");
button2.setAttribute("type", "button");
button2.setAttribute("class", "btn btn-block event");
button2.setAttribute("value", "2");
button2.style.background = "black"
button2.style.color = "White";

var td7 = document.createElement("td");
var button3 = document.createElement("input");
button3.setAttribute("type", "button");
button3.setAttribute("class", "btn btn-block event");
button3.setAttribute("value", "3");
button3.style.background = "black"
button3.style.color = "White";

var td8 = document.createElement("td");
var button_plus = document.createElement("input");
button_plus.setAttribute("type", "button")
button_plus.setAttribute("class", "btn btn-block");
button_plus.setAttribute("value", "+");
button_plus.addEventListener("click", function(e){
    document.getElementById("number").value += e.target.value;
    
});
button_plus.style.background = "black"
button_plus.style.color = "White";



var row3 = document.createElement("tr");

var td9 = document.createElement("td");
var button4 = document.createElement("input");
button4.setAttribute("type", "button");
button4.setAttribute("class", "btn btn-block event");
button4.setAttribute("value", "4");
button4.style.background = "black"
button4.style.color = "White";

var td10 = document.createElement("td");
var button5 = document.createElement("input");
button5.setAttribute("type", "button");
button5.setAttribute("class", "btn btn-block event");
button5.setAttribute("value", "5");
button5.style.background = "black"
button5.style.color = "White";

var td11 = document.createElement("td");
var button6 = document.createElement("input");
button6.setAttribute("type", "button");
button6.setAttribute("class", "btn btn-block event");
button6.setAttribute("value", "6");
button6.style.background = "black";
button6.style.color = "White";

var td12 = document.createElement("td");
var button_minus = document.createElement("input");
button_minus.setAttribute("type", "button");
button_minus.setAttribute("class", "btn btn-block");
button_minus.setAttribute("value", "-");
button_minus.addEventListener("click", function(e){
    document.getElementById("number").value += e.target.value;
   
});
button_minus.style.background = "black"
button_minus.style.color = "White";


var row4 = document.createElement("tr");

var td13 = document.createElement("td");
var button7 = document.createElement("input");
button7.setAttribute("type", "button");
button7.setAttribute("class", "btn btn-block event");
button7.setAttribute("value", "7");
button7.style.background = "black"
button7.style.color = "White";

var td14 = document.createElement("td");
var button8 = document.createElement("input");
button8.setAttribute("type", "button");
button8.setAttribute("class", "btn btn-block event");
button8.setAttribute("value", "8");
button8.style.background = "black"
button8.style.color = "White";

var td15 = document.createElement("td");
var button9 = document.createElement("input");
button9.setAttribute("type", "button");
button9.setAttribute("class", "btn btn-block event");
button9.setAttribute("value", "9");
button9.style.background = "black";
button9.style.color = "White";

var td16 = document.createElement("td");
var button_mul = document.createElement("input");
button_mul.setAttribute("type", "button");
button_mul.setAttribute("class", "btn btn-block");
button_mul.setAttribute("value", "*");
button_mul.addEventListener("click", function(e){
    document.getElementById("number").value += e.target.value;
    
});
button_mul.style.background = "black";
button_mul.style.color = "White";


var row5 = document.createElement("tr");
var td17 = document.createElement("td");
var button_dot = document.createElement("input");
button_dot.setAttribute("type", "button")
button_dot.setAttribute("class", "btn btn-block");
button_dot.setAttribute("value", ".");
button_dot.addEventListener("click", function(e){
    document.getElementById("number").value += e.target.value;
    
});
button_dot.style.background = "black"
button_dot.style.color = "White";

var td18 = document.createElement("td");
var button0 = document.createElement("input");
button0.setAttribute("type", "button")
button0.setAttribute("class", "btn btn-block event");
button0.setAttribute("value", "0");
button0.style.background = "black"
button0.style.color = "White";

var td19 = document.createElement("td");
var button_div = document.createElement("input");
button_div.setAttribute("type", "button");
button_div.setAttribute("class", "btn btn-block");
button_div.setAttribute("value", "/");
button_div.addEventListener("click", function(e){
    document.getElementById("number").value += e.target.value;

});
button_div.style.background = "black";
button_div.style.color = "White";

var td20 = document.createElement("td");
var button_equal = document.createElement("input");
button_equal.setAttribute("type", "button");
button_equal.setAttribute("class", "btn btn-block");
button_equal.onclick = function () { result(); };
button_equal.setAttribute("value", "=");
button_equal.style.background = "black"
button_equal.style.color = "White";




td.append(display);
row.append(td);

td1.append(button_clr);
td2.append(button_op);
td3.append(button_cp);
td4.append(button_mod)
row1.append(td1, td2, td3, td4)

td5.append(button1);
td6.append(button2);
td7.append(button3);
td8.append(button_plus);
row2.append(td5, td6, td7, td8);


td9.append(button4);
td10.append(button5);
td11.append(button6);
td12.append(button_minus);
row3.append(td9, td10, td11, td12);

td13.append(button7);
td14.append(button8);
td15.append(button9);
td16.append(button_mul);
row4.append(td13, td14, td15, td16);

td17.append(button_dot);
td18.append(button0);
td19.append(button_div);
td20.append(button_equal);
row5.append(td17, td18, td19, td20);


table.append(row, row1, row2, row3, row4, row5);
container.append(table);

center.append(container);

document.body.append(center);

var keyBoard = document.querySelectorAll(".event");
function eve(e) {

    if (e.keyCode >= 48 && e.keyCode <= 57)    // only for numbers if any keys pressed otherthan number it will show alert
    {
        document.getElementById("number").value += e.key;
    }
    else {
        alert("Only numbers are allowed");
    }
}
for (var i = 0; i < keyBoard.length; i++) {
    keyBoard[i].addEventListener('keypress', eve);
}

function result() {
    let a = document.getElementById("number").value;
    let b = eval(a);
    document.getElementById("number").value = b;
}