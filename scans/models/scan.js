const mongoose = require('mongoose');

// scan Schema
const scanSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String
	},
	pages:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Scan = module.exports = mongoose.model('Scan', scanSchema);

// Get scans
module.exports.getScans = (callback, limit) => {
	Scan.find(callback).limit(limit);
}

// Get scan
module.exports.getScanById = (id, callback) => {
	Scan.findById(id, callback);
}

// Add scan
module.exports.addScan = (scan, callback) => {
	Scan.create(scan, callback);
}

// Update scan
module.exports.updateScan = (id, scan, options, callback) => {
	var query = {_id: id};
	var update = {
		title: scan.title,
		genre: scan.genre,
		description: scan.description,
		author: scan.author,
		publisher: scan.publisher,
		pages: scan.pages,
		image_url: scan.image_url,
		buy_url: scan.buy_url
	}
	Scan.findOneAndUpdate(query, update, options, callback);
}

// Delete scan
module.exports.removescan = (id, callback) => {
	var query = {_id: id};
	Scan.remove(query, callback);
}
