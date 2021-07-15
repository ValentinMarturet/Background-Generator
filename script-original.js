var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liItems = document.querySelectorAll("li");
var borrar = document.getElementsByClassName("delete");

function eventListener(index, funcion, lista) {
	lista[index].addEventListener("click", funcion)
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	var div = document.createElement("div")
	li.appendChild(document.createTextNode(input.value));
	btn.appendChild(document.createTextNode("Borrar!"));
	btn.classList.add("delete")
	div.appendChild(li);
	div.appendChild(btn);
	ul.appendChild(div);
	liItems = document.getElementsByTagName("li");
	borrar = document.getElementsByClassName("delete");
	eventListener(liItems.length-1, itemDone, liItems);
	eventListener(borrar.length-1, eliminar, borrar);
	input.value = "";	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();	
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function itemDone(event) {
	console.log(event);
	event.target.classList.toggle("done")
}

function eliminar(event) {
	event.target.parentNode.classList.add("deletee")
	setTimeout(function(){event.target.parentNode.remove()}, 500);
	
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


for (var i=0; i<liItems.length; i++){
	eventListener(i, itemDone,liItems);
}

for (var i=0; i<borrar.length; i++){
	eventListener(i, eliminar, borrar);
}



