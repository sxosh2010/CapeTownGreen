var body = document.querySelector("body");
var taxiLocationCounter = 1;
taxiLocationCounter ++;
taxiLocationCounter --;

 
body.onkeydown = function(e){

 	//e.keycodedown -will capture the key codes
 	 var keyCode = e.keyCode

 	var keyName = keyCodeName(e.keyCode);
 	displayMessage(keyName);
  	var className = createLocationClass(taxiLocationCounter);	
	displayMessage(className);
	
	if(keyCodeName(e.keyCode) === "right"){

moveForward();
} 
else if(keyCodeName(e.keyCode)=== "left"){
movereverse();
}
};




 	 	


var keyCodeName = function(num){
	if(num=== 39){
	 		return "right";
	 	}
	  else if(num=== 37){
	 		return "left";
	 	}

	 	 else if(num=== 38){
	 		return "up";
	 	}
	 else if(num===40){
	 		return "down";
	 	}
	
	 else {
 		return "";
 	}
 }
 
var createLocationClass = function(number){
	if(number===1){
		return  "slot-one-of-nine";
	}
    else if(number===2){
		return  "slot-two-of-nine";
	}

    else if(number===3){
		return  "slot-three-of-nine";
	}

    else if(number===4){
		return  "slot-four-of-nine";
	}

    else if(number===5){
		return  "slot-five-of-nine";
	}

    else if(number===6){
		return  "slot-six-of-nine";
	}

    else if(number===7){
		return  "slot-seven-of-nine";
	}

     else if(number===8){
		return  "slot-eight-of-nine";
	}

    else if(number===9){
		return  "slot-nine-of-nine";
 	}
};

var createTrafficLightClass = function(num){

if(num===1){
	return ".one-of-nine";
}

if(num===2){
	return ".two-of-nine";
}
if(num===3){
	return ".three-of-nine";
}
if(num===4){
	return ".four-of-nine";
}
if(num===5){
	return ".five-of-nine";
}

if(num===6){
	return ".six-of-nine";
}
if(num===7){
	return ".seven-of-nine"
}

if(num===8){
	return ".eight-of-nine"
}

if(num===9){
	return ".nine-of-nine"
}


}

 

var moveForward = function(){
var currentLocation = createLocationClass(taxiLocationCounter);
taxiLocationCounter ++;
var  newLocation = createLocationClass(taxiLocationCounter);
moveTaxi(currentLocation , newLocation);
}



var movereverse = function(){
var currentLocation = createLocationClass(taxiLocationCounter);
taxiLocationCounter--;
var  newLocation = createLocationClass(taxiLocationCounter);
	moveTaxi(currentLocation , newLocation);
}







   
 