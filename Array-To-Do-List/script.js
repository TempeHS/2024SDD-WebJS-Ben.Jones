//**********************************************************************************
// written by Ben Jones
//
// Demo of a simple JS application that intergrates a range of JS skills including
// - Array - String Methods - DOM.innerHTML
//
// Written 2018
// License: https://github.com/TempeHS/2024SDD-WebJS-Ben.Jones/blob/main/LICENSE
//**********************************************************************************

var listItemArray = [];
var arrayIndex = 0;
var newItem = 0;
var htmlString = "";

function addNewListItem () {
	listItemArray.push (document.getElementById("newListItemInput").value);
	generateHtml ();
}

function generateHtml () {
	arrayIndex = 0;
	htmlString = "";
	while (arrayIndex < listItemArray.length) {
		newItem = "<li onclick='removeListItem(" + arrayIndex + ")';>" + listItemArray[arrayIndex] + "</li>";
		htmlString = htmlString + newItem;
		arrayIndex = arrayIndex + 1;
	}
	document.getElementById("toDoList").innerHTML = htmlString;
	localStorage.mySavedList = listItemArray.join();
}

function removeListItem (i) {
	listItemArray.splice(i,1);
	generateHtml ();
}

function modifyButton () {
	document.getElementById("newListItemInput").value = "";
}

function loadSavedList () {
	var str = localStorage.mySavedList;
	listItemArray = str.split(",");
	generateHtml ();
}