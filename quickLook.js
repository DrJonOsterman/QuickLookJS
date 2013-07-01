var quickLook = function(inputEl, outputEl, btnElem, customFlags, tableEl){

var reader =  null;
var files = [];
var filenames = [];
var fileStrings = [];
var inputElem = null;
var outputElem = null;
var customWords = null;
var badWords = [
		'\u0066\u0075\u0063\u006B', '\u0073\u0068\u0069\u0074', '\u0061\u0073\u0073\u0068\u006F\u006C\u0065', '\u0064\u006F\u0075\u0063\u0068\u0065'];

function setUp(){
	if 	(!(window.File && window.FileList && window.FileReader))
	{
		return "Sorry, your browser does not support the necessary features.";
	}

	else
	{
		inputElem = document.getElementById(inputEl);
		outputElem = document.getElementById(outputEl);
		document.getElementById(btnElem).onclick = btnOnClick;
		customWords = ((!customFlags === undefined) && (typeof customFlags === Array)) ? customFlags : null ;
		if (tableEl !== undefined)
		{
			inputElem.onchange = redrawTable;
		}
		reader = new FileReader();
		reader.onload = readerOnLoad;
	}
}

function  btnOnClick(){
	for (var i = 0; i < inputElem.files.length ; i++) 
		{
			files.push(inputElem.files[i]);
			filenames[i] = files[i].name;
		}
	reader.readAsText(files[0]);
}

 function readerOnLoad(file){
	fileStrings.push(file.target.result);
	if ((reader.readyState === 2) && (files.length > 0))
	{
		files.splice(0,1);
		reader.readAsText(files[0]);
	}
	if ((reader.readyState === 2) && (files.length === 0))
	{
		scanStuff();
	}
}

function redrawTable(){
	for (var i = 0 ; i < inputElem.files.length ; i++)
	{
		var tempEl = document.getElementById(tableEl).insertRow(-1);
		tempEl.insertCell(-1).innerHTML = inputElem.files[i].name;
		tempEl.insertCell(-1).innerHTML = inputElem.files[i].size / 1000;
		tempEl.insertCell(-1).innerHTML = inputElem.files[i].type;
	}
}

function scanStuff()
{
	//String.split by by new lines
	//this makes each aray index a line number
	fileStrings.forEach(function(fileText, index)
	{
		badWords.forEach(function(word)
		{

			if (fileText.indexOf(word) > -1)
			{
				outputElem.innerHTML += '<br /><b>' + word + '</b> found in ' + filenames[index] + '.';
			}
			else
			{
				outputElem.innerHTML += '<br />' + filenames[index] + ' is clean of ' + word + '.';
			}
		});
	});
}

setUp();
}

quickLook('fl', 'results', 'tst', undefined, 'tbl');