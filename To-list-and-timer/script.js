//**********************************************************************************
// written by Ben Jones
//
// Demo of a complex JS application that intergrates a range of JS skills including
// - Arrays - Objects - Device alerts - JS CSS Control - JS SVG control
//
// Originally written 2018 and updated 25/6/2023
// License: https://github.com/TempeHS/2024SDD-WebJS-Ben.Jones/blob/main/LICENSE
//**********************************************************************************

var listItemArray = [];
var listItemArrayStrike = []
var arrayIndex = 0;
var newItem = 0;
var htmlString = "";
var taskDeleteType = false;
var toggleCountDown = false;
var endBell = true;
var warningBell = true;
var warningBellPlayed = true;
var drawTimerUpdate;
var showSettings = false;
var drawTimer;
var timePickerResult;
var countDownHour = "00";
var countDownMinutes = "00";
var legalInfo = false;
var timerStarted = false;
var timerEnded = false;
var timerPaused = false;
var buttonModified = false;
var toggleFont = false;
var timerView = false;
var listView = false;
var endDate;
var startDate;
var fullScreen = document.getElementById("fullscreenBody");
var n1 = true;
var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getUTCDate(),
    months = [ "January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var loader = document.getElementById('loader'),
   border = document.getElementById('border'),
   α = 0,
   π = Math.PI,
   t = 0;
var settingsTimeUpdate = setInterval(updateRemainingTime, 100);
   
document.getElementById("daymonth").innerHTML = months[month] + " " + day;
document.getElementById("year").innerHTML = year; 

function pauseTimer() {
	if (timerPaused) {
	document.getElementById("pauseButton").value = "Pause Timer"
	} else {
	document.getElementById("pauseButton").value = "Restart Timer"
	}
	timerPaused = !timerPaused
	
}

function openFullscreen() {
  if (fullScreen.requestFullscreen) {
    fullScreen.requestFullscreen();
  } else if (fullScreen.mozRequestFullScreen) { /* Firefox */
    fullScreen.mozRequestFullScreen();
  } else if (fullScreen.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    fullScreen.webkitRequestFullscreen();
  } else if (fullScreen.msRequestFullscreen) { /* IE/Edge */
    fullScreen.msRequestFullscreen();
  }
}

function toggleSansFont () {
	if (toggleFont) {
	document.getElementById('fullscreenBody').style.fontFamily = "Courier"		
	} else {
	document.getElementById('fullscreenBody').style.fontFamily = "Verdana"
	}
	toggleFont = !toggleFont
}

function hidelegalinfo() {
	if(legalInfo) {
	document.getElementById("legalinfo").style.display = "none";
	document.getElementById("settingsHide").style.display = "block";
	document.getElementById("hidelegalbutton").value = "Show legal information";
	} else {
	document.getElementById("legalinfo").style.display = "block";
	document.getElementById("settingsHide").style.display = "none";
	document.getElementById("hidelegalbutton").value = "Show Settings";
	}
	legalInfo = !legalInfo;
};

 if ((screen.width < 800) || (screen.height < 600)) {
    alert ("This application is designed for use on a Laptop and is not optimised for mobile devices");
};

function startTimer() {
	if (timerStarted || startDate.toLocaleTimeString() >= endDate.toLocaleTimeString())	{
		if (startDate.toLocaleTimeString() >= endDate.toLocaleTimeString() || document.getElementById("timePicker").value == "00:00" )	{
		document.getElementById("messageText").innerHTML = "Please pick a time in the future";
		}
		clearTimer ()
		return;
	}
	warningBellPlayed = true;
	timerPaused = true;
	pauseTimer();
	n1 = true;
	timerEnded = false;
	document.getElementById("messageText").innerHTML = "";
	document.getElementById("newListItemInput").value = "";
	openFullscreen();
	changeSettings();
	document.getElementById("startButton").value = "Stop Timer";
	timerStarted = true;
	timePickerTime ();
	startDate = new Date()
	endDate = new Date()
	endDate.setHours( countDownHour );
	endDate.setMinutes( countDownMinutes );
	endDate.setSeconds (0);
	warningBellPlayed = false;
		if (toggleCountDown) {
	var tt = endDate.getHours() - startDate.getHours()
	t = tt * 60 * 167
	tt = endDate.getMinutes() - startDate.getMinutes()
	t += tt * 167
	tt = endDate.getSeconds() - startDate.getSeconds()
	t+= tt / 60 * 167
	} else {
		t = countDownHour * 60 * 167.5
		t += countDownMinutes * 167.5
	}	
	draw()
}

function timePickerTime () {
	timePickerResult = document.getElementById("timePicker").value
	countDownMinutes = Number(timePickerResult.substring(3));
	countDownHour = Number(timePickerResult.substring(0,2));
	startDate = new Date()
	endDate = new Date()
	if (toggleCountDown) {
	endDate.setHours( countDownHour );
	endDate.setMinutes( countDownMinutes );
	endDate.setSeconds (0);
	} else {
	endDate.setHours( startDate.getHours() + countDownHour );
	endDate.setMinutes( startDate.getMinutes() + countDownMinutes );
	}
	
}
  
function draw() {
	if (!timerPaused) {
  α++;
	}
  α %= 361;
  var r = ( α * π / 180 )
    , x = Math.sin( r ) * 200
    , y = Math.cos( r ) * - 200
    , mid = ( α > 180 ) ? 1 : 0
    , anim = 'M 0 0 v -200 A 200 200 1 ' 
           + mid + ' 1 ' 
           +  x  + ' ' 
           +  y  + ' z';
  loader.setAttribute( 'd', anim );
  border.setAttribute( 'd', anim );
 
if ( α == 360) {
	if (endBell) {
		playEndBell()
	}
	clearTimer ()
} else {
 drawTimer = setTimeout(draw, t); // Redraw
 updateRemainingTime ();
}
};

function clearTimer () {
		document.getElementById("timeremaining").style.opacity = 0;
	setTimeout(function(){ 
		document.getElementById("timeremaining").innerHTML = "Finished";
		document.getElementById("timeremaining").style.opacity = 1;
	},500);
	clearTimeout(drawTimer);
	clearInterval(drawTimerUpdate);
	α = 359.99;
  var r = ( α * π / 180 )
    , x = Math.sin( r ) * 200
    , y = Math.cos( r ) * - 200
    , mid = ( α > 180 ) ? 1 : 0
    , anim = 'M 0 0 v -200 A 200 200 1 ' 
           + mid + ' 1 ' 
           +  x  + ' ' 
           +  y  + ' z';

 
  loader.setAttribute( 'd', anim );
  border.setAttribute( 'd', anim );
	α = 0
	timerEnded = true;
	timerStarted = false;
	if (toggleCountDown) {
	date = new Date()
	document.getElementById("timePicker").value = (date.getHours()).toLocaleString(undefined, {minimumIntegerDigits: 2}) + ":" + (date.getMinutes()).toLocaleString(undefined, {minimumIntegerDigits: 2})
	} else {	
	document.getElementById("timePicker").value = '00:00'
	}
	clearTimeout(drawTimer);
	clearInterval(drawTimerUpdate);
	document.getElementById("startButton").value = "Start Timer"
}

function playEndBell() {
	new Audio('endbell.mp3').play();	
}

function updateRemainingTime () {
	timePickerTime ()
	if (!timerStarted) {
	document.getElementById("htmlHour").innerHTML = endDate.toLocaleTimeString();
	}
	var timeR
		timeR = t / 167
		timeR *= 60
		timeR = 360 / timeR
		timeR = (360-α) / timeR
		timeR /= 60	
	var s;
	if(Math.ceil(timeR) > 1 || t == 0 ) {s = "s"}else{s = ""}	
	if (timerStarted) {
	var createString = "Time Remaining: " + Math.ceil(timeR) + " Minute" + s;
	if (createString != document.getElementById("timeremaining").innerHTML) {
	document.getElementById("timeremaining").style.opacity = 0;
	}
	setTimeout(function(){ 
	if (createString != document.getElementById("timeremaining").innerHTML) {
	document.getElementById("timeremaining").innerHTML = createString
	document.getElementById("timeremaining").style.opacity = 1;
	}
	},500);
	}
	if (timeR == document.getElementById("warningTime").value && warningBell && !warningBellPlayed) {
	warningBellPlayed = true;
	playWarningBell()
	}
}

function clearDraw() {
	clearTimeout(drawTimer);
	clearInterval(drawTimerUpdate);
	α = 0;
  var r = ( α * π / 180 )
    , x = Math.sin( r ) * 125
    , y = Math.cos( r ) * - 125
    , mid = ( α > 180 ) ? 1 : 0
    , anim = 'M 0 0 v -125 A 125 125 1 ' 
           + mid + ' 1 ' 
           +  x  + ' ' 
           +  y  + ' z';
  loader.setAttribute( 'd', anim );
  border.setAttribute( 'd', anim );
}

function updateTimer () {
	t = document.getElementById("finishTimeInput").value
}


function changeSettings() {
	if (showSettings) {
		document.getElementById("settings").style.display = "none";
	} else {
		document.getElementById("settings").style.display = "block";
	}
	showSettings = !showSettings;
};

function toggleTimer() {
	if (toggleCountDown) {
	document.getElementById('endSpecificTime').checked = false;
	document.getElementById('specificTime').checked = true;
	document.getElementById("timePicker").value = '00:00'
	document.getElementById("pauseButton").style.display = "inline";
	} else {
	document.getElementById("pauseButton").style.display = "none";
	document.getElementById('specificTime').checked = false;
	document.getElementById('endSpecificTime').checked = true;
	date = new Date()
	document.getElementById("timePicker").value = (date.getHours()).toLocaleString(undefined, {minimumIntegerDigits: 2}) + ":" + (date.getMinutes()).toLocaleString(undefined, {minimumIntegerDigits: 2})	
}
	toggleCountDown = !toggleCountDown;	
}

function addNewListItem () {
	listItemArray.push (document.getElementById("newListItemInput").value);
	listItemArrayStrike.push ("");
	generateHtml ();
	buttonModified = false;
}

function toggleEndBell() {
	endBell = !endBell
}

function toggleTimerView() {
	if (!timerView && listView) {
		hideAll ();
		timerView = !timerView
	} else {
	if (!timerView) {
		hideLeft ()
		timerView = !timerView
	} else {
		timerView = !timerView
		resetDisplay("keepLeft")	
	}
	}
}

function hideAll () {
		document.getElementById("left").style.width = "100vw"
		document.getElementById("listDiv").style.display = "none"
		document.getElementById("right").style.width = "0vw"
		document.getElementById("left").style.width = "100vw"
}


function resetDisplay (id) {
		document.getElementById("right").style.width = "53vw"
		document.getElementById("left").style.width = "43vw"
		document.getElementById("left").style.height = "100vh"
		document.getElementById("right").style.height = "100vh"	
		document.getElementById("listDiv").style.display = "block"
		if (listView) {
			hideRight ()
		}
		if (timerView) {
			hideLeft ()
		}
}

function hideLeft () {
	document.getElementById("right").style.width = "0vw"
	document.getElementById("left").style.width = "100vw"
}

function hideRight () {
		document.getElementById("right").style.height = "100vh"
		document.getElementById("right").style.width = "100vw"
		document.getElementById("left").style.width = "100vw"
		document.getElementById("left").style.height = "auto"
		document.getElementById("listDiv").style.display = "none"	
}



function toggleListView() {
if (timerView && !listView) {
	hideAll ();
	listView = !listView
} else {
	if (!listView) {
		hideRight ()
		listView = !listView
	} else {
		listView = !listView
		resetDisplay()
	}
	}
}

function toggleWarningBell() {
	warningBell = !warningBell
}

function playWarningBell() {
	new Audio('warningbell.mp3').play();
}

function generateHtml () {
	arrayIndex = 0;
	htmlString = "";
	while (arrayIndex < listItemArray.length) {
		newItem = "<li " + "class='" + listItemArrayStrike[arrayIndex] + "' onclick='removeListItem(" + arrayIndex + ")';>" + listItemArray[arrayIndex] + "</li>";
		htmlString = htmlString + newItem;
		arrayIndex = arrayIndex + 1;
	}
	document.getElementById("toDoList").innerHTML = htmlString;
}

function removeListItem (i) {
	if(taskDeleteType){
	listItemArrayStrike[i] = "strike";	
	generateHtml ();
	} else {
	listItemArray.splice(i,1);
	listItemArrayStrike.splice(i,1);
	generateHtml ();
	}
}

function modifyButton () {
	if (!buttonModified) {
	document.getElementById("newListItemInput").value = "";
	buttonModified = true;
	}
}

function deleteOrStrike(){
	taskDeleteType = !taskDeleteType
}