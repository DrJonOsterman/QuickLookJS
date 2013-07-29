# QuickLookJS #

## Overview ##
Script scans selected files for objectionable words that one may not wish to submit.

## Dependencies ##
File API support (supported on latest IE, FF, Chrome, Opera, Safari) 

## Use ##
It's a self-executing function which takes an object with the following properties.

	var qlObj = {
		inputEl : document.getElementById('fileUploadId'),
		outputEl: document.getElementById('resultDivId'),
		btnEl: document.getElementById('btnStartId'),
		customTerms: undefined,
		tableEl: document.getElementById('tableFileListId')
	};
###Properties###
 - `inputEl`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - __reference__ to ``input`` element. with ``type`` attribute being ``file``.
 - `outputEl` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- __reference__ to element which can accept output, through ``innerHTML``.
 - `btnEl` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- __reference__ to button user will click to begin scanning.
 - `customTerms` - __optional__,  __array__ of custom words you want additionally check your files against. 
 - `tableEl` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-  __optional__, __reference__ to empty table, which will display file info upon selection via file upload.

## Notes ##
 - Reference of bad words used from ___[shutterstock - List of Dirty Naughty Obscene and Otherwise Bad Words](https://github.com/shutterstock/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words)___ repository.

##Documentation for scan function##
     __________________________________________________________
    |forEach file |fileText, fileIndex|                        |
    |     var isFileClean = true                               |
    |      ______________________________________________      |
    |     |forEach line |lineContent, lineNumber|        |     |
    |     |     _________________________________        |     |
    |     |    |forEach badWord |word|           |       |     |
    |     |    |    if lineContent.contains(word)|       |     |
    |     |    |           print('match found')  |       |     |
    |     |    |           isFileClean = false   |       |     |
    |     |    |      end if                     |       |     |
    |     |    |end forEach                      |       |     |
    |     |     ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯        |     |
    |     |    if customWords NOT empty                  |     |
    |     |         ___________________________________  |     |
    |     |        |forEach customWord |Uword|         | |     |
    |     |        |    if lineContent.contains(Uword) | |     |
    |     |        |        print('match found')       | |     |
    |     |        |        isFileClean = false        | |     |
    |     |        |    end if                         | |     |
    |     |        |end forEach                        | |     |
    |     |         ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯  |     |
    |     |    end if                                    |     |
    |     |end forEach                                   |     |
    |      ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯      |
    |     if isFileClean IS true                               |
    |          print('file clean')                             |
    |     end if                                               |
    |end forEach                                               |
     ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯*/