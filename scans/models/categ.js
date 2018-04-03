const mongoose = require('mongoose');

// categ Schema
const categSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Categ = module.exports = mongoose.model('Categ', categSchema);

// Get categs
module.exports.getCategs = (callback, limit) => {
	Categ.find(callback).limit(limit);
}

// Add categ
module.exports.addcateg = (categ, callback) => {
	Categ.create(categ, callback);
}

// Update categ
module.exports.updateCateg = (id, categ, options, callback) => {
	var query = {_id: id};
	var update = {
		name: categ.name
	}
	Categ.findOneAndUpdate(query, update, options, callback);
}


// Delete categ
module.exports.removeCateg = (id, callback) => {
	var query = {_id: id};
	Categ.remove(query, callback);
}
