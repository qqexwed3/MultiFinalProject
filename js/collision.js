// collistion.js
function collision(posX1,posY1,width1,height1,posX2,posY2,width2,height2){
  if (posX1<=posX2+width2 && posX2<=posX1+width1 && posY1<=posY2+height2 && posY2<=posY1+height1){
		  return true;
	  }else{
		  return false;
	  }		
}