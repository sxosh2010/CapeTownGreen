var body = document.querySelector("body");
 var taxiLocationCounter = 1;
// taxiLocationCounter ++;
// taxiLocationCounter --;
// var className = createTrafficLightClass(3);


body.onkeydown = function(e){

 	//e.keycodedown -will capture the key codes
 	var keyCode = e.keyCode
  var keyName = keyCodeName(e.keyCode);
  var trafficLight = new TrafficLight(taxiLocationCounter);
       		if(e.keyCode === 38) {
      			trafficLight.makeRed();
      		}
      		if(e.keyCode === 40) {
      			trafficLight.makeGreen();
      		}
      		// if(e.keyCode === 37){
      		// 	trafficLight.makeOrange();
      		// }

if(keyName === "right"){
		if(taxiLocationCounter<9){
      if(trafficLight.color() === "green"){
              moveForward();
           }
    }
}

if(keyName === "left"){
	if(taxiLocationCounter > 1){
    if(trafficLight.color() === "red"){
    moveReverse();
  }
  }
}

var className = createLocationClass(taxiLocationCounter);
  displayMessage(className);
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
};

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

var moveForward = function(){
var currentLocation = createLocationClass(taxiLocationCounter);
taxiLocationCounter ++;
var  newLocation = createLocationClass(taxiLocationCounter);
moveTaxi(currentLocation , newLocation);
};

var moveReverse = function(){
var currentLocation = createLocationClass(taxiLocationCounter);
taxiLocationCounter--;
var  newLocation = createLocationClass(taxiLocationCounter);
	moveTaxi(currentLocation , newLocation);
};

var createTrafficLightClass = function(number){
 	if(number===1){
    return ".one-of-nine";
  }
  if(number===2){
    return ".two-of-nine";
  }
  if(number===3){
	  return ".three-of-nine";
  }
  if(number===4){
	  return ".four-of-nine";
  }
  if(number===5){
	  return ".five-of-nine";
  }
  if(number===6){
	  return ".six-of-nine";
  }
  if(number===7){
	  return ".seven-of-nine";
  }
  if(number===8){
	  return ".eight-of-nine";
  }
  if(number===9){
   	return ".nine-of-nine";
  }
};

function TrafficLight(taxiLocationCounter){
  var className = createTrafficLightClass(taxiLocationCounter);
  var trafficLightElement = document.querySelector(className);

    this.makeGreen = function(){
	    trafficLightElement.classList.remove("lights-slowdown");
      trafficLightElement.classList.remove("lights-stop");
      trafficLightElement.classList.add("lights-go");
    }

    this.makeOrange = function(){
    	trafficLightElement.classList.remove("lights-go");
    	trafficLightElement.classList.remove("lights-stop");
    	trafficLightElement.classList.add("lights-slowdown");
    }

    this.makeRed = function(){
    	trafficLightElement.classList.remove("lights-slowdown");
    	trafficLightElement.classList.remove("lights-go");
    	trafficLightElement.classList.add("lights-stop");
    }

    this.color = function(){
      if (trafficLightElement.classList.contains("lights-go")){
        return "green";
      }
      if (trafficLightElement.classList.contains("lights-slowdown")){
        return "orange";
      }
      if (trafficLightElement.classList.contains("lights-stop")){
        return "red";
      }

    }
}
