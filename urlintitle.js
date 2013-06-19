// UserScript
// @name                URL in title
// @namespace	        http://jean-francois.im/
// @description	        Script that changes pages' titles to include their domain
// @include		*
// /UserScript


var changeTitle = function() {
 	var protoDelimIndex = document.URL.indexOf("://");
 	
 	if(protoDelimIndex != -1) {
        if(document.title.indexOf(' - ' + document.domain) == -1) {
            document.title=document.title + ' - ' + document.domain;
        }
  	}
}

setInterval(changeTitle, 100);