var submit = document.querySelector("button");
submit.addEventListener("click", submitted);
var count = 0;

//function
function submitted(event) {
  event.preventDefault();
  var text = document.querySelector("#newtodo").value;
  var nothing = document.querySelector(".nothing");
  nothing.classList.add("hidden");
  addTodo(text);
}

function addTodo(string) {
  var items = string.split(",");
  for (var i = 0; i < items.length; i++) {
    var list = document.querySelector("ul");
    var li = document.createElement("li");
    list.appendChild(li);
    var label = document.createElement("label");
    var input = document.createElement("input");
    input.setAttribute("type","checkbox");
    li.appendChild(label);
    label.appendChild(input);
    var item = document.createElement("span");
    item.textContent = items[i].trim();
    label.appendChild(item);
    count = count + 1;
  }
  document.querySelector("#newtodo").value = "";
  document.querySelector(".header2").textContent = count + " todos";
}
