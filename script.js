var interval;
var timer = setInterval(timer, 1000);
var currentCountRows = 0;
const startCountRows = 99;
const oneSecond = 1000;
var things = ['Решка', 'Орел', 'Орел', 'Решка', 'Решка', 'Орел', 'Орел', 'Решка', 'Ребро ;)', 'Решка', 'Орел', 'Орел', 'Решка', 'Решка', 'Орел', 'Орел', 'Решка',];

var addBtn = document.querySelector('.add-row');
var stopBtn = document.querySelector('.stop-row');

function timer() {
	var d = new Date();
	var t = d.toLocaleTimeString();
	document.getElementById("timer").innerHTML = t;
}

function addTableRow() {
	if(startCountRows == currentCountRows){
		stopAddingRows();
	}


	var table = document.getElementById("myTable");
	currentCountRows = table.rows.length - 1;
	var tableLength =  table.rows.length;
	var newRow = table.insertRow(tableLength);

	var cell1 = newRow.insertCell(0);
	cell1.innerHTML = tableLength;

	var cell2 = newRow.insertCell(1);
	cell2.innerHTML = things[Math.floor(Math.random() * things.length)];
}

addBtn.onclick = function startAddingRows() { 
	var seconds = document.getElementById('secondAdd').value;
	interval = setInterval(addTableRow, seconds * oneSecond);
};

stopBtn.onclick = function stopAddingRows() {
	clearInterval(interval);
}