let ourForm = document.getElementById('ourForm');
let ourField = document.getElementById('ourField');
let ourList = document.getElementById('ourList');

ourForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createItem(ourField.value);
})

function createItem(userValue) {
    ourList.insertAdjacentHTML("beforeend", `<ul id="tasks">
	<li class="task" id="disdiv" onclick="myFunction()">
	  <input type="checkbox">
	  <a id="tyt">${userValue}</a>
	  <button onclick="deleteItem(this)">
		<i class="fa fa-trash"></i>
	  </button>
	</li>
	<div class="opis" id="cat">
	  <div id="category">
		<input type="checkbox" id="one" onclick="green()"> <a id="one">Easy</a>
		<input type="checkbox" id="two" onclick="orange()"> <a id="two">Medium</a>
		<input type="checkbox" id="three" onclick="red()"> <a id="three">Hard</a>
	  </div>
	  <textarea id="area" placeholder="Opis" maxlength="300"></textarea>
	</div>
  </ul>`);
	ourField.value = '';
	ourField.focus();
}

function deleteItem(element) {
  element.parentElement.remove();
  ourList.remove();
}

/*Pokaz div/ukryj div*/
document.getElementsByClassName("disdiv").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("cat").classList.toggle("opis");
}

/*Nadawanie koloru kategorii*/
document.getElementsByClassName("one").onclick = function() {green()};
function green() {
	document.getElementById("tyt").classList.toggle("one");
}
document.getElementsByClassName("two").onclick = function() {orange()};
function orange() {
	document.getElementById("tyt").classList.toggle("two");
}
document.getElementsByClassName("three").onclick = function() {red()};
function red() {
	document.getElementById("tyt").classList.toggle("three");
}

let addItem = function () {
    let lastElement = document.getElementById('ourList').lastElementChild;
    let li = document.createElement('li');
    li.setAttribute('class', 'item');
    liText = document.createTextNode('Item');
    li.appendChild(liText); 
    lastElement.appendChild(li)
}
 
 
document.querySelector('button').addEventListener('click', addItem)
