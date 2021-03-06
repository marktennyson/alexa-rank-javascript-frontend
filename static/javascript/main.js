"use strict";

function fetchAPI(){
	const endpoint = "https://alexa-rank.vercel.app/api/getrank?domain="
	const domainName = document.getElementById("domain_name").value;
	document.getElementById("domain_name").value = "";
	if (!domainName){
		alert("Please enter a valid domain name.");
		location.reload();
	}
	const finalEndpoint = endpoint+domainName;
	fetch(finalEndpoint).then(res=>res.json()).then(body=>{
		const domainAlexaRank = body.alexa_rank;
		const timeTaken = body.time_taken;
		const domainEngagementinS = body.engagement;
		const domainEngagementinM = (parseFloat(domainEngagementinS)/60).toString().split(".")[0];
		const domainEngagementinSf = (parseFloat(domainEngagementinS)%60);
		document.getElementById("alexaRankSpan").innerHTML = domainAlexaRank;
		document.getElementById("domainEngagementSpan").innerHTML = domainEngagementinM+" Minutes "+domainEngagementinSf+" Seconds";
		document.getElementById("domainNameSpan").innerHTML = domainName;
		document.getElementById("timeTakenSpan").innerHTML = timeTaken+" seconds";
	})
}

function modalClose(){
	document.getElementById("alexaRankSpan").innerHTML = "Fetching...";
	document.getElementById("domainEngagementSpan").innerHTML = "Fetching...";
	document.getElementById("domainNameSpan").innerHTML = "Fetching...";
	document.getElementById("timeTakenSpan").innerHTML = "Fetching...";
}

$('#heroPage').click(function(){
	modalClose();
})

superplaceholder({
	el: domain_name,
	sentences: [ 'google.com', 'facebook.com', 'youtube.com', 'linkedin.com', 'googleplus.com', 'baidu.com',
				 'microsoft.com', 'twitter.com', 'whatsapp.com', 'nasa.gov', 'wikipedia.org', 'nginx.org'],
	options: {
		letterDelay: 80,
		loop: true,
		startOnFocus: false
	}
  })

// setTimeout(function() {
// 	$('#firstHeadingId').css('color','#000');
// }​,500);​

// while (true) {
// 	$('#firstHeadingId').css('color','#000');
// 	setTimeout(500);
// 	$('#firstHeadingId').css('color','#0070f3');
// }