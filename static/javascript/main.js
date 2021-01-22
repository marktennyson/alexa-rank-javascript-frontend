"use strict";

function fetchAPI(){
	const endpoint = "https://alexa-rank.vercel.app/api/getrank?domain="
	const domainName = document.getElementById("domain_name").value;
	if (!domainName){
		alert("Please enter a valid domain name.");
		location.reload();
	}
	const finalEndpoint = endpoint+domainName;
	fetch(finalEndpoint).then(res=>res.json()).then(body=>{
		const domainAlexaRank = body.alexa_rank;
		const timeTaken = body.time_taken;
		// const timeTaken = body.
		console.log(domainAlexaRank);
		document.getElementById("alexaRankSpan").innerHTML = domainAlexaRank;
		document.getElementById("domainNameSpan").innerHTML = domainName;
		document.getElementById("timeTakenSpan").innerHTML = timeTaken+" seconds";
	})
}

function modalClose(){
	document.getElementById("alexaRankSpan").innerHTML = "Fetching...";
	document.getElementById("domainNameSpan").innerHTML = "Fetching...";
	document.getElementById("timeTakenSpan").innerHTML = "Fetching...";
}