// drawboject.js
function drawBg(timing) {
	imgBg1.src = 'images/bg1.png';	// โหลดฉากหลัง 
	imgBg2.src = 'images/bg2.png';	// โหลดฉากหลัง 
	imgBg3.src = 'images/bg3.png';	// โหลดฉากหลัง 
	ctxP.drawImage(imgBg1,0,320-timing/2,480,320,0,0,480,320);
	ctxP.drawImage(imgBg2,0,320-timing,480,320,0,0,480,320);
	ctxP.drawImage(imgBg3,0,320-timing*1.5,480,320,0,0,480,320);
}
function drawStatus(status) {
	if (status==true){
		imgStatus.src = 'images/win.png';	
	}else{
		imgStatus.src = 'images/lost.png';	
	}
	ctxP.drawImage(imgStatus,0,0);
}
function drawRocket(keyframe,posX,posY){		//
	imgRocket.src = 'images/rocket.png';	// โหลดรูป bg1.png
	ctxP.drawImage(imgRocket,((keyframe-1)*100),0,100,100,posX,posY,50,50);	
}
function drawMissile(keyframe,posX,posY){		//
	imgMissile.src = 'images/missile.png';	// โหลดรูป missile.png
	ctxP.drawImage(imgMissile,((keyframe-1)*25),0,25,25,posX,posY,25,25);	
}
function drawBoss(posX,posY){		//
	imgBoss.src = 'images/boss.png';	// โหลดรูป boss.png
	ctxP.drawImage(imgBoss,posX,posY);	
}	