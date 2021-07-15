const enterBtn = document.getElementById("enter");
const input = document.getElementById("userinput");
let borrar = document.getElementsByClassName("delete");
let hecho = document.getElementsByClassName("hecho")
let listContainer = document.getElementsByClassName("list-container");
let listDiv = document.getElementsByClassName("list");
let listText = document.getElementsByClassName("list-text")

const eventListener = (index=0, funcion, lista) => {
	lista[index].addEventListener("click", funcion)
}

const inputLength = () => input.value.length;

const eliminar = (event) => {
	console.log(event)
	event.target.parentNode.parentNode.classList.add("deletee");
	setTimeout(function(){event.target.parentNode.parentNode.remove()}, 500);
};

const itemDone = (event) => event.target.parentNode.parentNode.childNodes[0].classList.toggle("done");

const newElement = (tag) => document.createElement(tag);
const addClass = (elemento, clase) => elemento.classList.add(clase);

const createListElement = () => {
	let span = newElement("span");
	let doneBtn = newElement("button");
	let deleteBtn = newElement("button");
	let listDiv = newElement("div");
	let btnDiv = newElement("div");
	let textDiv = newElement("div");
	let imgDelete = newElement("img");
	let imgDone = newElement("img");
	span.appendChild(document.createTextNode(input.value));
	doneBtn.appendChild(imgDone);
	deleteBtn.appendChild(imgDelete);
	imgDelete.src="./svg/eliminar.png";
	imgDone.src="./svg/garrapata.png"
	btnDiv.appendChild(doneBtn);
	btnDiv.appendChild(deleteBtn);
	textDiv.appendChild(span);
	listDiv.appendChild(textDiv);
	listDiv.appendChild(btnDiv);
	listContainer[0].appendChild(listDiv);
	addClass(deleteBtn, "delete");
	addClass(doneBtn, "hecho");
	addClass(textDiv, "list-text");
	addClass(btnDiv, "div-btn");
	addClass(listDiv, "list");
	borrar = document.getElementsByClassName("delete");
	hecho = document.getElementsByClassName("hecho");
	eventListener(borrar.length-1, eliminar, borrar);
	eventListener(hecho.length-1, itemDone, hecho);
	input.value = "";
}

const createListAfterClick = () => {
	if (inputLength()>0){createListElement()}
};
const createListAfterKeypress = (event) => {
	if (inputLength()>0 && event.keyCode === 13){createListElement()}
};

enterBtn.addEventListener("click", createListAfterClick);

input.addEventListener("keypress", createListAfterKeypress);


for (let i=0; i<hecho.length;i++) {
	eventListener(i, itemDone, hecho)
}

for (let i=0; i<borrar.length;i++) {
	eventListener(i, eliminar, borrar)
}