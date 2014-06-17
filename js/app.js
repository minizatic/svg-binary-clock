$(function(){
	function leftPad(number, targetLength) {
		var output = number + '';
		while (output.length < targetLength) {
			output = '0' + output;
		}
		return output;
	}

	var display = function(input, name){
		if(Math.floor(input / 8) != 0){
			input = input - 8;
			Lunar.addClass(document.querySelector("." + name + " .\\38"), "on");
		}
		if(Math.floor(input / 4) != 0){
			input = input - 4;
			Lunar.addClass(document.querySelector("." + name + " .\\34"), "on");
		}
		if(Math.floor(input / 2) != 0){
			input = input - 2;
			Lunar.addClass(document.querySelector("." + name + " .\\32"), "on");
		}
		if(Math.floor(input / 1) != 0){
			input = input - 1;
			Lunar.addClass(document.querySelector("." + name + " .\\31"), "on");
		}
		return;
	}

	setInterval(function(){

		for(i=0; i<document.querySelectorAll("g circle").length; i++){
			Lunar.removeClass(document.querySelectorAll("g circle")[i], "on");
		}

		var dateTime = new Date();
		var hours = dateTime.getHours();
		var minutes = leftPad(dateTime.getMinutes(), 2);
		var seconds = leftPad(dateTime.getSeconds(), 2);
		var minutesOne = Number(String(minutes).charAt(0));
		var minutesTwo = Number(String(minutes).charAt(1));
		var secondsOne = Number(String(seconds).charAt(0));
		var secondsTwo = Number(String(seconds).charAt(1));
		if(hours > 12){
			hours = hours - 12;
		}
		hours = leftPad(hours, 2);
		var hoursOne = Number(String(hours).charAt(0));
		var hoursTwo = Number(String(hours).charAt(1));

		display(hoursOne, "hours-1");
		display(hoursTwo, "hours-2");

		display(minutesOne, "minutes-1");
		display(minutesTwo, "minutes-2");

		display(secondsOne, "seconds-1");
		display(secondsTwo, "seconds-2");

	}, 1000);
});