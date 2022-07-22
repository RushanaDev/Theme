var elBox = document.querySelector('.box');
var elAll = document.querySelector('.all');
var elDiv = document.querySelector('.div');
var elHead = document.querySelector('.head5');
var elBox2 = document.querySelector('.box2');

elBox.addEventListener('click', function (){
	elBox.classList.toggle('newbox');
	elAll.classList.toggle('newall');
	elDiv.classList.toggle('newdiv');
	elHead.classList.toggle('newhead5');
	elBox2.classList.toggle('newbox2');
});