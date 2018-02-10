function letter(value){
	this.value = value;
	this.show = false;
	if (this.value === ' ')
		this.show = true;
}

letter.prototype.placeHolder = function() {
	if (this.show) {
		return this.value;
	}
	return "_ ";
}

exports.letter = letter;
