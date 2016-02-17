 // var body = document.querySelector("body");
 // body.onkeydown = function(e){
 // 	//e.keycodedown -will capture the key codes
 // });


 var keyCodeName = function(keyCode){
 if(keyCode=== 37){
 		return "left";
 	}
  else if(keyCode=== 39){
 		return "right";
 	}
 else if(keyCode===40){
 		return "down";
 	}
 else if(keyCode=== 38){
 		return "up";
 	}
 else {
 		return "";
 	}
 };
 
//  	var str = document.getElementById("keyCode");
//  	if (str.addEventListener) {
//  	        str.addEventListener("click", myFunction(){
//  	    } else {
//  	        str.attachEvent('onclick', myFunction);
//  	    } 
 	    
// });

//  .onkeydown = function(e){
//  	var str = mykeycodes(e.keyCode);
//  	display Message(str);
//  }
//  