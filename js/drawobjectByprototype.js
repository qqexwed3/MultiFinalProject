// drawobjectByprototype.js
function drawEnemy(delay,row,posX,posY,desWidth,desHeight){
	this.delay =delay;
	this.count =0;
	this.enable = true;
	this.keyframe = 1;
	this.row = row;
	this.posX=posX;    //positionX element
	this.posY=posY;	   //positionY element
	this.desWidth = desWidth;
	this.desHeight = desHeight;
	drawEnemy.prototype.setX=function(posX){     //method setX
		this.posX=posX;
	   }
	drawEnemy.prototype.setY=function(posY){     //method setY
		this.posY=posY;
	   }
	drawEnemy.prototype.setsrcX=function(srcX){  //method setsrcX
		this.srcX=srcX;
	   }
	drawEnemy.prototype.draw=function(){	     //method drawPlane
		this.count+=this.delay;
		if (this.count>=1){
			if (this.keyframe==1){this.keyframe=2}else{this.keyframe=1;}
			if (this.count>=1){this.count=0;}
		}
		imgEnemy.src = 'images/enemy.png';
		ctxP.drawImage(imgEnemy,(this.keyframe-1)*50,(this.row-1)*50,50,50,this.posX,this.posY,this.desWidth,this.desHeight);
	}
}