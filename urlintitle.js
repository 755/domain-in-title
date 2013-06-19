
var changeTitle = function() {
 	var protoDelimIndex = document.URL.indexOf("://");
 	
 	if(protoDelimIndex != -1) {
        if(document.title.indexOf(' - ' + document.domain) == -1) {
            document.title=document.title + ' - ' + document.domain;
        }
  	}
}

setInterval(changeTitle, 100);