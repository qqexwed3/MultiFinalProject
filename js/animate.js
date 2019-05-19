// JavaScript Document
function drawObject(imgP,src,enable,maxkeyframe,keyframe,maxrow,row,posX,posY,width,height,drawWidth,drawHeight) //Class plane
	{
		this.imgP = imgP;
		this.src = src;		// file address 
		this.enable=true;    //display on/off
		this.maxkeyframe=maxkeyframe;	   //number of keyframes
		this.keyframe=keyframe;	   // keyframe
		this.maxrow = maxrow;
		this.row = row;				// row
		this.posX=posX;		// drawing positionX
		this.posY=posY;		// drawing positionY
		this.width = width;	// picture width
		this.height = height;	//picture height
		this.drawWidth=drawWidth;
		this.drawHeight=drawHeight;
		drawObject.prototype.setSrc=function(src){this.src= src;}
		drawObject.prototype.setEnable=function(enable){this.enable=enable;}
		drawObject.prototype.setKeyframe=function(keyframe){this.keyframe=keyframe;}
		drawObject.prototype.setRow=function(row){this.row = row;}
		drawObject.prototype.setX=function(posX){this.posX=posX;}
		drawObject.prototype.setY=function(posY){this.posY=posY;}
		drawObject.prototype.draw=function(){
			if (this.enable==true){	 
			this.imgP.src = this.src;
			ctxP.drawImage(this.imgP,((this.keyframe-1)*(this.width/this.maxkeyframe)),((row-1)*(this.height/this.maxrow)),(this.width/this.maxkeyframe),(this.height/this.maxrow),this.posX,this.posY,this.drawWidth,this.drawHeight);
			}
		}
	}

