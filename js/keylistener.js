// keylistener.js
function checkKeyDown(e){
	var key = e.keyCode;
	if(key == 32){
		enableMissile=true;
		audioBoom.play();
		missilePos.x=rocketPos.x;
		missilePos.y=rocketPos.y;
	}
	if (key==81 || key==27){	// กดปุ่ม q หรือ Esc ออกจากเกม
		alert("Exit Game!");
		window.location="index.html";
	}
	if(key == 87 || key == 38){	// ปุ่ม w หรือ ลูกศรขึ้น
		rocketPos.y=rocketPos.y-5;
	}
	if(key == 83 || key == 40){	// ปุ่ม s หรือ ลูกศรลง
		rocketPos.y=rocketPos.y+5;
	}
	if(key == 65 || key == 37){	// ปุ่ม a หรือ ลูกศรซ้าย
		rocketPos.x=rocketPos.x-5;
	}
	if(key == 68 || key == 39){	// ปุ่ม d หรือ ลูกศรขวา
		rocketPos.x=rocketPos.x+5;
	}
	
	if(key == 13 ){	// ปุ่ม enter
		if (keyframe==1){ window.location="howtoplay.html";}
		if (keyframe==2){ window.close();}
	}
}
function clickReporter(e) {
	  normalizing.deltaX =e.pageX-rocketPos.x;
	  normalizing.deltaY =e.pageY-rocketPos.y;
	  normalizing.deltaManitude = Math.sqrt(Math.pow(normalizing.deltaX,2)+Math.pow(normalizing.deltaY,2));
	  rocketMove.targetX=e.pageX;
	  rocketMove.targetY=e.pageY;
	  rocketMove.enableX =true;
	  rocketMove.enableY =true;
	  if (normalizing.deltaX>=0){keyframeRocket=3}else{keyframeRocket=2}
}
