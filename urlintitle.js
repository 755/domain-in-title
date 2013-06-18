// UserScript
// @name                URL in title
// @namespace	        http://jean-francois.im/
// @description	        Script that changes pages' titles to include their domain
// @include		*
// /UserScript


var changeTitle = function() {
 	var protoDelimIndex = document.URL.indexOf("://");
 	
 	if(protoDelimIndex != -1) {
  		var domainDelimIndex = document.URL.indexOf("/", protoDelimIndex + 4);
  		if(domainDelimIndex != -1) {
  			if(document.title.indexOf('[' + document.URL.slice(0, domainDelimIndex + 1) + ']') == -1) {
   	            document.title=document.title + ' [' + document.URL.slice(0, domainDelimIndex + 1) + ']';
  			}
   		}
  	}
}

setInterval(changeTitle, 100);