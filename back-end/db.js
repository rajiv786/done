const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: 'pestotech',
	};
	try {
		mongoose.connect('mongodb+srv://Rajiv_787:Rajiv_787@pesto.79uxvke.mongodb.net/?retryWrites=true&w=majority', connectionParams); // database ki value kya h jaise atlas local pr h konsa database connected
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		
	}
};