(function(){

    var taxiLocationCounter = 1;
    var MAX_LOCATIONS = 9;

    var TrafficLight = function(className){

        var robot = document.querySelector(className);
        var classList = robot.classList;

        var removeAllStyles = function(){
            classList.remove("lights-go");
            classList.remove("lights-stop");
            classList.remove("lights-slowdown");
        };

        this.makeRed = function(){
            removeAllStyles();
            classList.add("lights-stop");
        };

        this.makeGreen = function(){
            removeAllStyles();
            classList.add("lights-go");
        };

        this.makeOrange = function(){
            removeAllStyles();
            classList.add("lights-slowdown");
        };

        this.color = function(){
            if (classList.contains('lights-stop')){
                return "red";
            }
            else if (classList.contains("lights-go")){
                return "green";
            }
            else {
                return "orange";
            }
            return "";
        };

    };

    var calculate_location = function(index){

        var mapping = {
            1 : "one",
            2 : "two",
            3 : "three",
            4 : "four",
            5 : "five",
            6 : "six",
            7 : "seven",
            8 : "eight",
            9 : "nine"
        };

        var result = "slot-" + mapping[index] + "-of-nine";
        return result;

    }

    var robot_location = function(index){

        var mapping = {
            1 : "one",
            2 : "two",
            3 : "three",
            4 : "four",
            5 : "five",
            6 : "six",
            7 : "seven",
            8 : "eight",
            9 : "nine"
        };

        return "." + mapping[index] + "-of-nine";

    }

    var moveTaxi = function(from, to) {
        var taxi = document.querySelector('.taxi');
        taxi.classList.remove(from);
        taxi.classList.add(to);
    };

    var moveForward = function(){

        if (taxiLocationCounter == MAX_LOCATIONS){
            taxiLocationCounter = 0;
        }

        var currentLocation = calculate_location(taxiLocationCounter);
        //alert(currentLocation);

        taxiLocationCounter++;
        var newLocation = calculate_location(taxiLocationCounter);
        moveTaxi(currentLocation, newLocation);

    };

    var moveBackward = function(){

        if (taxiLocationCounter == 1){
            return;
        }

        var currentLocation = calculate_location(taxiLocationCounter);
        taxiLocationCounter--;
        var newLocation = calculate_location(taxiLocationCounter);
        moveTaxi(currentLocation, newLocation);

    };

    var arriveAtRank = function(){

        displayMessage("at rank!");

        var tl = new TrafficLight(robot_location(taxiLocationCounter));
        tl.makeRed();

        var passengers = passengerList(40);
        displayQueueCount(passengers.length);

        setTimeout(function(){

            displayTaxiPassengerCount(passengers.length);
            displayQueueCount(0);
            tl.makeGreen();

        }, 3000);

    };

    arriveAtRank();

    var body = document.querySelector("body");

    body.onkeydown = function(e){
        //forward
        var tl = new TrafficLight(robot_location(taxiLocationCounter));

        if (taxiLocationCounter === 8){
            displayTaxiPassengerCount(0);
            displayMessage("Trip done!")
        }

        if (e.keyCode === 39){
            if (tl.color() === "green"){
                moveForward();
                if (taxiLocationCounter === 1){
                    arriveAtRank();
                }
            }
        }
        else if (e.keyCode === 37){
            moveBackward();
            if (taxiLocationCounter === 1){
                arriveAtRank();
            }
        }
        else if (e.keyCode === 38){
            tl.makeRed();

        }
        else if (e.keyCode === 40){
            tl.makeGreen();

        }
    };


})()
