const express = require('express');
const http = require('http');
const xml2js = require('xml2js');
const fs = require('fs');
var parser = new xml2js.Parser();

var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
	setTimeout(() => {
		liveReloadServer.refresh("/");
	}, 100);
});

// Initialize App
const app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(connectLiveReload());

const bodyParser = require("body-parser");
let nodeGeocoder = require('node-geocoder');

// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('assets'));

let options = {
	provider: 'openstreetmap'
};

app.get("/", (req, res) => {
	
	hotels = [];
	
	let southEuropeCountry = ["FR","PT","ES","IT","GR","AD","GF","IL","MT","MC","RE"];
	let northEuropeCountry = ["GB","DE","BE","AT","PL","RU","CH","SE","UA","RO","NL","LU","CZ","KZ","HU","AL","AM","AZ","BY","BA","BG","HR","DK","EE","GE","IE","KG","LV","LT","MD","MK","RS","SK","SI"];
	let northAmericaCountry = ["US","CA","MX","BS","BB","BM","CR","CU","PA","PR"];
	let southAmericaCountry = ["AR","BR","CO","CL","PY","PE","UY","BO","EC",""];
	let southEastAsiaCountry = ["VN","TH","KH","ID","JP","MY","SG","MM","KR","LA","MV","PH","TW"];
	let chinaCountry = ["CN","HK","MN","MO"];
	let pacificCountry = ["AU","FJ","NZ","PF"];
	let imeaCountry = ["TR","AE","DZ","CD","IN","MA","TN","ZA","SA","JO","EG","BH","BJ","BW","CM","GQ","GH","CI","KE","SH","KW","LB","MG","MU","NA","NG","OM","PK","QA","RW","SN","SC","LK","TZ","ZM"];
	
	// Code pour récupérer l'ensemble des hôtels existants 
	url="http://repos.accor.com/ota/content.xml";
	let HotelCodeXML = http.get(url, function(res2) {
		let data = '';
		res2.on('data', function(stream) {
			data += stream;
		});
		res2.on('end', function(){
			parser.parseString(data, function(error, result) {
				if(error === null) {
					
					result.repositoryContent.hotels[0].hotel.forEach((hotel) => {
						// console.log(hotel.hotelCode[0]);
						hotels.push(hotel);
					});
					console.log(hotels.length);
					res.render("find_hub_hotel.ejs", { hotels: hotels, imeaCountry: imeaCountry,pacificCountry:pacificCountry,chinaCountry:chinaCountry, southEastAsiaCountry:southEastAsiaCountry, northEuropeCountry:northEuropeCountry, southEuropeCountry: southEuropeCountry, northAmericaCountry: northAmericaCountry, southAmericaCountry: southAmericaCountry });
				}
				else {
					console.log(error);
				}
				
			});
		});
	});
});


app.get("/find_hub_hotel", (req, res) => {
	
	hotels = [];
	
	let southEuropeCountry = ["FR","PT","ES","IT","GR","AD","GF","IL","MT","MC","RE"];
	let northEuropeCountry = ["GB","DE","BE","AT","PL","RU","CH","SE","UA","RO","NL","LU","CZ","KZ","HU","AL","AM","AZ","BY","BA","BG","HR","DK","EE","GE","IE","KG","LV","LT","MD","MK","RS","SK","SI"];
	let northAmericaCountry = ["US","CA","MX","BS","BB","BM","CR","CU","PA","PR"];
	let southAmericaCountry = ["AR","BR","CO","CL","PY","PE","UY","BO","EC",""];
	let southEastAsiaCountry = ["VN","TH","KH","ID","JP","MY","SG","MM","KR","LA","MV","PH","TW"];
	let chinaCountry = ["CN","HK","MN","MO"];
	let pacificCountry = ["AU","FJ","NZ","PF"];
	let imeaCountry = ["TR","AE","DZ","CD","IN","MA","TN","ZA","SA","JO","EG","BH","BJ","BW","CM","GQ","GH","CI","KE","SH","KW","LB","MG","MU","NA","NG","OM","PK","QA","RW","SN","SC","LK","TZ","ZM"];
	
	// Code pour récupérer l'ensemble des hôtels existants 
	url="http://repos.accor.com/ota/content.xml";
	let HotelCodeXML = http.get(url, function(res2) {
		let data = '';
		res2.on('data', function(stream) {
			data += stream;
		});
		res2.on('end', function(){
			parser.parseString(data, function(error, result) {
				if(error === null) {
					
					result.repositoryContent.hotels[0].hotel.forEach((hotel) => {
						// console.log(hotel.hotelCode[0]);
						hotels.push(hotel);
					});
					console.log(hotels.length);
					res.render("find_hub_hotel.ejs", { hotels: hotels, imeaCountry: imeaCountry,pacificCountry:pacificCountry,chinaCountry:chinaCountry, southEastAsiaCountry:southEastAsiaCountry, northEuropeCountry:northEuropeCountry, southEuropeCountry: southEuropeCountry, northAmericaCountry: northAmericaCountry, southAmericaCountry: southAmericaCountry });
				}
				else {
					console.log(error);
				}
				
			});
		});
	});
});

app.get("/find_hub_table", (req, res) => {
	
	hotels = [];
	
	let southEuropeCountry = ["FR","PT","ES","IT","GR","AD","GF","IL","MT","MC","RE"];
	let northEuropeCountry = ["GB","DE","BE","AT","PL","RU","CH","SE","UA","RO","NL","LU","CZ","KZ","HU","AL","AM","AZ","BY","BA","BG","HR","DK","EE","GE","IE","KG","LV","LT","MD","MK","RS","SK","SI"];
	let northAmericaCountry = ["US","CA","MX","BS","BB","BM","CR","CU","PA","PR"];
	let southAmericaCountry = ["AR","BR","CO","CL","PY","PE","UY","BO","EC",""];
	let southEastAsiaCountry = ["VN","TH","KH","ID","JP","MY","SG","MM","KR","LA","MV","PH","TW"];
	let chinaCountry = ["CN","HK","MN","MO"];
	let pacificCountry = ["AU","FJ","NZ","PF"];
	let imeaCountry = ["TR","AE","DZ","CD","IN","MA","TN","ZA","SA","JO","EG","BH","BJ","BW","CM","GQ","GH","CI","KE","SH","KW","LB","MG","MU","NA","NG","OM","PK","QA","RW","SN","SC","LK","TZ","ZM"];
	
	// Code pour récupérer l'ensemble des hôtels existants 
	url="http://repos.accor.com/ota/content.xml";
	let HotelCodeXML = http.get(url, function(res2) {
		let data = '';
		res2.on('data', function(stream) {
			data += stream;
		});
		res2.on('end', function(){
			parser.parseString(data, function(error, result) {
				if(error === null) {
					
					result.repositoryContent.hotels[0].hotel.forEach((hotel) => {
						console.log(hotel.hotelCode[0]);
						hotels.push(hotel);
					});
					console.log(hotels.length);
					
					res.render("hub_table.ejs", { hotels: hotels, imeaCountry: imeaCountry,pacificCountry:pacificCountry,chinaCountry:chinaCountry, southEastAsiaCountry:southEastAsiaCountry, northEuropeCountry:northEuropeCountry, southEuropeCountry: southEuropeCountry, northAmericaCountry: northAmericaCountry, southAmericaCountry: southAmericaCountry });
				}
				else {
					console.log(error);
				}
				
			});
		});
	});
	
});

app.post("/find_hub_hotel", (req, res) => {
	
	console.log(req.body.hotel_code)
	codeHotel = req.body.hotel_code;
	
	hotels = [];
	hotelInfo = {};
	hotelsCode = [];
	
	messageErreur = "";
	
	let southEuropeCountry = ["FR","PT","ES","IT","GR","AD","GF","IL","MT","MC","RE"];
	let northEuropeCountry = ["GB","DE","BE","AT","PL","RU","CH","SE","UA","RO","NL","LU","CZ","KZ","HU","AL","AM","AZ","BY","BA","BG","HR","DK","EE","GE","IE","KG","LV","LT","MD","MK","RS","SK","SI"];
	let northAmericaCountry = ["US","CA","MX","BS","BB","BM","CR","CU","PA","PR"];
	let southAmericaCountry = ["AR","BR","CO","CL","PY","PE","UY","BO","EC",""];
	let southEastAsiaCountry = ["VN","TH","KH","ID","JP","MY","SG","MM","KR","LA","MV","PH","TW"];
	let chinaCountry = ["CN","HK","MN","MO"];
	let pacificCountry = ["AU","FJ","NZ","PF"];
	let imeaCountry = ["TR","AE","DZ","CD","IN","MA","TN","ZA","SA","JO","EG","BH","BJ","BW","CM","GQ","GH","CI","KE","SH","KW","LB","MG","MU","NA","NG","OM","PK","QA","RW","SN","SC","LK","TZ","ZM"];
	
	// Code pour récupérer l'ensemble des hôtels existants 
	url="http://repos.accor.com/ota/content.xml";
	let HotelCodeXML = http.get(url, function(res2) {
		let data = '';
		res2.on('data', function(stream) {
			data += stream;
		});
		res2.on('end', function(){
			parser.parseString(data, function(error, result) {
				if(error === null) {
					
					result.repositoryContent.hotels[0].hotel.forEach((hotel) => {
						if(hotel.hotelCode == codeHotel){
														
								hotelInfo.hotelCode=hotel.hotelCode;
								hotelInfo.hotelName=hotel.hotelName,
								hotelInfo.file=hotel.file,
								hotelInfo.lastModified=hotel.lastModified,
								hotelInfo.creationTime=hotel.creationTime,
								hotelInfo.latitude=hotel.latitude,
								hotelInfo.longitude=hotel.longitude,
								hotelInfo.brandCode=hotel.brandCode,
								hotelInfo.brandName=hotel.brandName,
								hotelInfo.cityName=hotel.cityName,
								hotelInfo.countryCode=hotel.countryCode,
								hotelInfo.countryName=hotel.countryName,
								hotelInfo.hotelStatus=hotel.hotelStatus
							// hotelInfo.push(hotel);
						}
						
						hotels.push(hotel);
						hotelsCode.push(hotel.hotelCode);
					});
					
					if(hotelsCode.includes(codeHotel)){
						messageErreur = "Hotel Not in the Database";
						res.render("find_hub_hotel.ejs", { hotels: hotels, messageErreur: messageErreur, imeaCountry: imeaCountry,pacificCountry:pacificCountry,chinaCountry:chinaCountry, southEastAsiaCountry:southEastAsiaCountry, northEuropeCountry:northEuropeCountry, southEuropeCountry: southEuropeCountry, northAmericaCountry: northAmericaCountry, southAmericaCountry: southAmericaCountry });
					}
					console.log(hotels.length);
					console.log(hotelInfo);
					res.render("find_hub_hotel.ejs", { hotels: hotels, hotelInfo: hotelInfo, messageErreur: messageErreur, imeaCountry: imeaCountry,pacificCountry:pacificCountry,chinaCountry:chinaCountry, southEastAsiaCountry:southEastAsiaCountry, northEuropeCountry:northEuropeCountry, southEuropeCountry: southEuropeCountry, northAmericaCountry: northAmericaCountry, southAmericaCountry: southAmericaCountry });
				}
				else {
					console.log(error);
				}
				
			});
		});
		res2.on('error', function (err) {
			//do some thing , error  handling
			console.log(err);
			
			hotels = [];
			hotelInfo = {};
			hotelsCode = [];
			
			messageErreur = "Fiche Hotel Not in the Database";
			res.render("find_hub_hotel.ejs", { hotels: hotels, hotelInfo: hotelInfo, messageErreur: messageErreur });

        });
	});
	
	
});


// Start server
app.listen(5000, () => {
	console.log('App listening on port 5000');
});