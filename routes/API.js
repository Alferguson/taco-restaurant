var reservationList = require("../data/reservationList.js");
var waitList = require("../data/waitList.js");

console.log(reservationList);
console.log(waitList);

module.exports = function(app) {

app.get("/api/tables", function(req, res) {

  	res.json(reservationList);
  	res.json(waitList);

}); 

app.post("/api/tables", function(req, res) {

	var newCustomer = req.body;
	//newCustomer.userID = newCustomer.name.replace(/\s+/g, "").toLowerCase();
	console.log(newCustomer);
	// if the reservation list is full
	if (reservationList.length >= 5) { 

	  	waitList.push(newCustomer);  	
	}  
	// if the reservation list is open
	else {

		reservationList.push(newCustomer);
	}	

	res.json(newCustomer);
});



};
