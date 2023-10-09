window.onload = pageLoad;

function pageLoad(){
	document.getElementById('start').onclick = startGame;
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart() {
	var TIMER_TICK = 1000;
	var timer = null;
	var seconds = 10; // Set the game timer to 10 seconds
	var x = document.getElementById('clock');
	var remainingTime = seconds;

	//setting timer using setInterval function
	timer = setInterval(function () {
	
	// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		var allbox = document.querySelectorAll("#layer div");
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		if (allbox.length === 0 && remainingTime > 0 )
		{
			clearInterval(timer);
			x.innerHTML = "You win" ;
			clearScreen();
		} 
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
		else if (remainingTime === 0 && allbox.length > 0) 
		{
			clearInterval(timer);
			x.innerHTML = "You lose";
			clearScreen();
		}
		else 
		{
			x.innerHTML = remainingTime + "s";
			remainingTime -- ;
		} 
	},  TIMER_TICK);
}

function addBox()
{
	clearScreen();
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = parseInt(document.getElementById('numbox').value);
	var gameLayer = document.getElementById('layer');
	var colorDrop = document.getElementById('color').value;

	for (var i = 0; i < numbox; i++)
	{
		var tempbox = document.createElement('div');
		tempbox.className = 'square';
		tempbox.id = "box" + i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.style.backgroundColor = colorDrop;
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	};
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#layer div");
	//delete all  div
	for (var i=0; i  <  allbox.length; i++){
		allbox[i].parentNode.removeChild(allbox[i]);
	}
}




