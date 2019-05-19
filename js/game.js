// Game.js
var fps =50;		// กำหนดเฟรมเรต
var timing=0;
var ctxP=document.getElementById('myCanvas').getContext('2d');	//เชื่อมต่อ canvas โดยขอใช้การวาดเป็นแบบ 2 มิติ
var imgBg1 = 	new Image();	
var imgBg2 = 	new Image();
var imgBg3 = 	new Image();
var imgRocket = new Image();
var imgMissile = new Image();	//*สร้างตัวแปรชื่อ imgButton วาดปุ่ม
var imgBoss	=	new Image();
var imgEnemy = 	new Image();
var imgStatus = new Image();
var enemyPos1 ={x:Math.random()*320, y: 0};
var enemyPos2 ={x:Math.random()*320, y:-100};
var enemy1 = new drawEnemy(0.01,1,enemyPos1.x,enemyPos1.y,50,50);
var enemy2 = new drawEnemy(0.05,2,enemyPos2.x,enemyPos1.y,50,50);
var keyframeRocket=1;
var keyframeObject=1;
var rocketPos ={x:220, y:250};
var posBossX=100;
var enableMissile=false;
var missilePos={x:0, y:0};
var normalizing={deltaManitude:0, deltaX:0,deltaY:0};
var rocketMove={enableX:false, enableY:false, targetX:0, targetY:0};
var audioBoom = new Audio("sounds/shooting.ogg");
	setInterval(Update,1000/fps);		
function Update() {
	document.addEventListener('keydown',checkKeyDown,false); // เรียกใช้ฟังก์ชั่น checkKeydown เมื่อมีการกดปุ่ม
	window.addEventListener('click',clickReporter,false);
	// White your Code!!
	if(timing < 220){timing+=0.2;}
	drawBg(timing);	
	drawRocket(keyframeRocket,rocketPos.x,rocketPos.y);
	drawBoss(posBossX,0);
	drawText(Math.round(timing),10,30);
	if (enemyPos1.y<320){
		enemyPos1.y++;
		enemy1.setY(enemyPos1.y);
		enemy1.draw();
	}else{
		enemyPos1 ={x:Math.random()*320, y: -50};
		enemy1.setY(enemyPos1.y);
		enemy1.setX(enemyPos1.x);
	}
	if (enemyPos2.y<320){
		enemyPos2.y++;
		enemy2.setY(enemyPos2.y);
		enemy2.draw();
	}else{
		enemyPos2 ={x:Math.random()*320, y: -50};
		enemy2.setY(enemyPos2.y);
		enemy2.setX(enemyPos2.x);
	}
	if (rocketMove.targetX!=rocketPos.x && rocketMove.enableX ==true){rocketPos.x+=normalizing.deltaX/normalizing.deltaManitude*2;}
	if (rocketMove.targetY!=rocketPos.y && rocketMove.enableY ==true){rocketPos.y+=normalizing.deltaY/normalizing.deltaManitude*2;}
	if (Math.abs(rocketMove.targetX-rocketPos.x)<=1){rocketMove.enableX=false;keyframeRocket=1;}
	if (Math.abs(rocketMove.targetY-rocketPos.y)<=1){rocketMove.enableY=false;}
	collisionBoss_and_Missile=collision(missilePos.x,missilePos.y,25,25,posBossX,0,150,90);
	collisionEnemy1_and_Rocket=collision(rocketPos.x,rocketPos.y,50,50,enemyPos1.x,enemyPos1.y,40,40);
	collisionEnemy2_and_Rocket=collision(rocketPos.x,rocketPos.y,50,50,enemyPos2.x,enemyPos2.y,40,40);
	if (collisionBoss_and_Missile==true){drawStatus(true);}
	if (collisionEnemy1_and_Rocket || collisionEnemy2_and_Rocket ==true){drawStatus(false);}
	if (posBossX>rocketPos.x){posBossX=posBossX-0.5;}else{posBossX=posBossX+0.5;}
		if (enableMissile==true){
			drawMissile(keyframeObject,missilePos.x,missilePos.y);
			--missilePos.y;
			if (keyframeObject==1){keyframeObject=2;}else{keyframeObject=1;}
		}
	
	
}	
/*
function checkKeyDown(e){
	var key = e.keyCode;
	//alert(key);
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
*/


	