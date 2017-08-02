// REQUIRED PACKAGES
	var yelpKeys = require("../config.js");
	var yelp = require("yelp-fusion");

		console.log("CLIENT ID: ", yelpKeys.clientId);
		console.log("CLIENT SECRET: ",  yelpKeys.clientSecret);

	



// VERSION 2 of YELP FUSION

	// USER SEARCH TERMS
	var searchRequest = {

		term: "Four Barrel Coffee",
		location: "san francisco, ca"
	};

	// CREATING YELP ACCESS TOKEN
	yelp.accessToken(yelpKeys.clientId, yelpKeys.clientSecret)
	.then(response => {

		var client = yelp.client(response.jsonBody.access_token);

		// SEARCH REQUEST
		client.search(searchRequest)
		.then((response => {

			var firstResult = response.jsonBody.businesses[0];
			var prettyJson = JSON.stringify(firstResult, null, 4);
			console.log(prettyJson);

		}));// close client search .then func
	})
	.catch(error => {

		console.log("ERROR w/ TOKEN & SEARCH: ", error);

	});// close access token error catch func



// --------------------------
// --------------------------

// VERSION 1 of YELP FUSION

	// YELP CONNECTION TOKEN
// 	var token = yelp.accessToken(yelpKeys.clientId, yelpKeys.clientSecret)
// 	.then(response => {

// 		console.log("JSON RESPONSE: ",response.jsonBody.access_token);


// 	})
// 	.catch(error => {

// 		console.log("ERROR CONNETING TO YELP TOKEN: " + error);

// 	});// close token var

// 	console.log("YELP TOKEN: ", token);

	

// // CREATE CLIENT TOKEN
// 	var client = yelp.client(token);



// // GET SEARCH TERMS FROM USER
// 	client.search({

// 		term: "Four Barrel Coffee",
// 		location: "san francisco, ca"

// 	}).then(response => {

// 		console.log(response.jsonBody.businesses[0].name);

// 	}).catch(error => {

// 		console.log("YELP SEARCH ERROR: ", error);

// 	});// close client search


