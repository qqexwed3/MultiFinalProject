// howtoplay.js
var fps =50;		// กำหนดเฟรมเรต
var ctxP=document.getElementById('myCanvas').getContext('2d');	//เชื่อมต่อ canvas โดยขอใช้การวาดเป็นแบบ 2 มิติ
var imgBg = new Image();	//สร้างตัวแปรชื่อ imgBg เป็นตัวแปรชนิดภาพ
var imgButton = new Image();	//*สร้างตัวแปรชื่อ imgButton วาดปุ่ม
	setInterval(Update,1000/fps);	// กำหนดให้เีรียกใช้ฟังก์ชั่น Update โดยใน 1 วินาทีจะเรียกใช้ 50 ครั้ง
function drawBg() {
	imgBg.src = 'images/howtoplay.png';	// โหลดฉากหลัง menubg.png
	ctxP.drawImage(imgBg,0,0);
}
// Write Your function
function Update() {
	document.addEventListener('keydown',checkKeyDown,false); // เรียกใช้ฟังก์ชั่น checkKeydown เมื่อมีการกดปุ่ม
	drawBg();	//เรียกใช้ฟังก์ชั่น drawBG()
}	
function checkKeyDown(e){
	var key = e.keyCode;
		window.location="game.html";
}