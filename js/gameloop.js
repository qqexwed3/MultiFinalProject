// JavaScript Document
	var fps =50;		// กำหนดเฟรมเรต
	var posX=0
	var posY=0; 	// ประกาศตำแหน่งของ (x,y) =(0,0)
	var ctxP=document.getElementById('myCanvas').getContext('2d');	//เชื่อมต่อ canvas โดยขอใช้การวาดเป็นแบบ 2 มิติ
	var imgBg = new Image();	//สร้างตัวแปรชื่อ imgBg เป็นตัวแปรชนิดภาพ
	var imgButton = new Image();	//*สร้างตัวแปรชื่อ imgButton วาดปุ่ม
	addEventListener("load",initGame,false);	//เรียกใช้ฟังก์ชัน initGame
	function initGame(){
		setInterval(Update,1000/fps);		
	}									// กำหนดให้เีรียกใช้ฟังก์ชั่น Update โดยใน 1 วินาทีจะเรียกใช้ 50 ครั้ง
	function drawBg(posBGX,posBGY) {
		imgBg.src = 'images/menubg.png';	// โหลดฉากหลัง menubg.png
		ctxP.drawImage(imgBg,0,0);
	}
	// Write Your function
	function drawButton(keyframe){		//* สร้างฟังก์ชั่นสำหรับวาด button
		imgButton.src = 'images/button.png';	// โหลดรูป button.png
		ctxP.drawImage(imgButton,((keyframe-1)*480),0,480,320,0,0,480,320);	
	}
	var keyframe=1;
	function Update() {
		document.addEventListener('keydown',checkKeyDown,false); // เรียกใช้ฟังก์ชั่น checkKeydown เมื่อมีการกดปุ่ม
	 	// White your Code!!
		drawBg(0,0);	//เรียกใช้ฟังก์ชั่น drawBG()
		drawButton(keyframe);	//* เรียกใช้ฟังก์ชั่น drawButton()
	}	
	function checkKeyDown(e){
		var key = e.keyCode;
		//alert(key);
		if(key == 87 || key == 38){	// ปุ่ม w หรือ ลูกศรขึ้น
			keyframe=1;
		}
		if(key == 83 || key == 40){	// ปุ่ม s หรือ ลูกศรลง
			keyframe=2;
		}
		if(key == 13 ){	// ปุ่ม enter
			if (keyframe==1){ window.location="howtoplay.html";}
			if (keyframe==2){ window.close();}
		}
	}