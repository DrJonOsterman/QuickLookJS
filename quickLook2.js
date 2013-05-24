var QL_inputObj = {
	inputFileElementId: 'inputFileId',
	beginButtonId: 'btnStart',
	outputId: 'resultsDiv',
	customBadWords : []
}


var quickLook = {

reader: null,
filenames: [],
fileStrings: [],
inputElem : null,
outputElem : null,
customWords : null,
badWords : [
		'\u0066\u0075\u0063\u006B', '\u0073\u0068\u0069\u0074',
		'\u0063\u0075\u006E\u0074', '\u0061\u0073\u0073\u0068\u006F\u006C\u0065', '\u0064\u006F\u0075\u0063\u0068\u0065'],

isSupported : function() { return (window.File && window.FileList && window.FileReader) ? true : false},

construct: function(inputEl, outputEl, startBtn, customFlags){


this.inputElem = inputEl;
this.outputElem = outputEl;
customWords = ((!customFlags === undefined) && (typeof customFlags === Array)) ? customFlags : null ;},

setUp: function(){},


id : function(elemId){return document.getElementById(elemId);}



this.id('tst').onclick 

btnClicked: function(){
		for (var i = 0; i < id('fl').files.length ; i++) 
			{
				files.push(id('fl').files[i]);
				filenames[i] = files[i].name;
			}
		reader.readAsText(files[0]);
	}


};



	var files = [];
	var filenames = [];
	var strings = [];
	var reader = new FileReader();
	reader.onload = readerOnLoad;



	function readerOnLoad(file){
		strings.push(file.target.result);
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


	function scanStuff()
	{
		strings.forEach(function(fileText, index)
		{
			badWords.forEach(function(word)
			{
				if (fileText.indexOf(word) > -1)
				{
					id('results').innerHTML += '<br /><b>' + word + '</b> found in ' + filenames[index] + '.';
				}
				else
				{
					id('results').innerHTML += '<br />' + filenames[index] + ' is clean of ' + word + '.';
				}
			});
		});
	}


	// id('fl').onchange = function(){
	// 	for (var i = 0 ; i < id('fl').files.length ; i++)
	// 	{
	// 		var tempEl = id('tbl').insertRow(-1);
	// 		tempEl.insertCell(-1).innerHTML = id('fl').files[i].name;
	// 		tempEl.insertCell(-1).innerHTML = id('fl').files[i].size / 1000;
	// 		tempEl.insertCell(-1).innerHTML = id('fl').files[i].type;
	// 	}
	// }


