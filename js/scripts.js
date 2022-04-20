///////////////////////////////////////////////////////////
// Clock code from StackOverflow
//  https://stackoverflow.com/questions/28415178/
//
///////////////////////////////////////////////////////////


(function(){
	// reference to clock element
	var clockElement = document.getElementById( "clock" );

	// a function that will update the contents with the time:
	function updateClock ( clock ) {
	    clock.innerHTML = new Date().toLocaleTimeString();
	}

	// calling this every second to keep the clock up to date
	setInterval(function () {
	    updateClock( clockElement );
	}, 1000);

}());


new Date().toDateString() = "Sun Sep 13 2015";
