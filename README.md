# QuickLookJS #

## Overview ##
Script scans selected files for objectionable words that one may not wish to submit.

## Dependencies ##
- File API support (supported on latest IE, FF, Chrome, Opera, Safari) 

## Use ##

It's a self-executing function which takes an object with the following properties.

	var qlObj = {
		inputEl : document.getElementById('fl'),
		outputEl: document.getElementById('resultBox'),
		btnEl: document.getElementById('tst'),
		customTerms: undefined,
		tableEl: document.getElementById('tbl')
	};
###Properties###
 + `inputEl` - __reference__ to ``input`` element. with ``type`` attribute being ``file``.

 + `outputEl` - __reference__ to element which can accept output, through ``innerHTML``

 + `btnEl` - __reference__ to button user will click to begin scanning

 + `customTerms` - __optional__,  __array__ of custom words you want additionally check your files against. 

 + `tableEl` -  __optional__, __reference__ to empty table, which will display file info upon selection via file upload.


