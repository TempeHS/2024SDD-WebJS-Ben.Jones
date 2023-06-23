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