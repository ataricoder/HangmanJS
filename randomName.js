/* Function to select random names */
var facultyName = function() {
	var names = ["dany", "fany", "rony", "tamy", "sany"];
	var nameIndex = Math.floor(Math.random() * names.length);
	return names[nameIndex];
};
module.exports = facultyName;
