// HEYHACK JAVASCRIPT COLLECTOR V 0.01
// Currently, only collecting URLs
var heyhackdatainsight = sessionStorage.getItem("HeyHackInsightsData");

if(heyhackdatainsight == null) {
 sessionStorage.setItem('HeyHackInsightsData', btoa(window.location.href));
} else if(heyhackdatainsight.search(btoa(window.location.href)) == -1) {
  sessionStorage.setItem('HeyHackInsightsData', btoa(window.location.href) + ";" + heyhackdatainsight);
}

if(Math.floor(Math.random() * 10)%10==0) {
  var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://insights.heyhack.com/col?d=" + sessionStorage.getItem("HeyHackInsightsData"), true);
	xhr.send();
	sessionStorage.removeItem('HeyHackInsightsData');
}
