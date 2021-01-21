// "use strict";

function fetchAPI(){
	const endpoint = "https://alexa.uurl.xyz/getrank?url=";
	const domainName = document.getElementById("domain_name").value;
	const finalEndpoint = endpoint+domainName;
	fetch(finalEndpoint).then(res=>res.json()).then(body=>{
		const domainAlexaRank = body.alexa_rank;
		const timeTaken = body.time_taken;
		// const timeTaken = body.
		console.log(domainAlexaRank);
		document.getElementById("alexaRankId").innerHTML = "Alexa Rank: "+domainAlexaRank;
		document.getElementById("domainNameId").innerHTML = "Your Domain Name: "+domainName;
		document.getElementById("timeTakenId").innerHTML = "Total Time Taken: "+timeTaken+" seconds";
	})
}

function modalClose(){
	document.getElementById("alexaRankId").innerHTML = "Alexa Rank: Fetching...";
	document.getElementById("domainNameId").innerHTML = "Your Domain Name: Fetching...";
	document.getElementById("timeTakenId").innerHTML = "Total Time Taken: Fetching...";
}