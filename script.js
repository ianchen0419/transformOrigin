let isDragging=false;
var lastX=0;
var lastY=0;

movedElement.onmousedown=function(e){
	isDragging=true;
	lastX=e.clientX;
	lastY=e.clientY;
}

movedElement.onmousemove=function(e){
	if(isDragging==true){
  // 兩點距離為(X2-X1)^2+(Y2-Y1)^2再開根號
  var changeValue=Math.floor(Math.sqrt(Math.pow(lastX-e.clientX, 2)+Math.pow(lastY-e.clientY, 2))*0.8);
  // var changeValue=lastX-e.clientX;
  console.log(changeValue);
  rotate.textContent=changeValue;
  movedElement.style.transform=`rotate(${changeValue}deg)`;
}
}


movedElement.onmouseup=function(){
	isDragging=false;
}

movedElement.onmouseout=function(){
	isDragging=false;
}

inputX.oninput=function(){
	var value=this.value;
	originX.textContent=value;
	var another=movedElement.style.transformOrigin.split(' ').pop();
	movedElement.style.transformOrigin=`${another} ${value}`;
	
	if(value=='center'){
		target.style.left=`50%`;
	}else if(value=='left'){
		target.style.left=`0%`;
	}else if(value=='right'){
		target.style.left=`100%`;
	}else if(value.indexOf('px')!==-1){
		target.style.left=value;
	}else if(value.indexOf('%')!==-1){
		target.style.left=value;
	}else if(value==0){
		target.style.left=value;
	}
}

inputY.oninput=function(){
	var value=this.value;
	originY.textContent=value;
	var another=movedElement.style.transformOrigin.split(' ').shift();
	movedElement.style.transformOrigin=`${another} ${value}`;
	
	if(value=='center'){
		target.style.top=`50%`;
	}else if(value=='top'){
		target.style.top=`0%`;
	}else if(value=='bottom'){
		target.style.top=`100%`;
	}else if(value.indexOf('px')!==-1){
		target.style.top=value;
	}else if(value.indexOf('%')!==-1){
		target.style.top=value;
	}else if(value==0){
		target.style.top=value;
	}
}