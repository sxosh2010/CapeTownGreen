 
 var keyCodeName = function(keyCode){
 if(keyCode=== 38){
 		return "up";
 	}
 if(keyCode=== 39){
 		return "right";
 	}
 if(keyCode===40){
 		return "down";
 	}
 if(keyCode=== 37){
 		return "left";
 	}
 else {
 		return "";
 	}
 };
 
 	var el = document.getElementById("keyCode");
 	if (el.addEventListener) {
 	        el.addEventListener("click", Function, false);
 	    } else {
 	        el.attachEvent('onclick', Function);
 	    }  

 	