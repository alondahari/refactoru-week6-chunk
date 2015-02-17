var chunk = function(input, num, arr){
	arr = arr || [];
	var chunkSize;

	while (input.length) {
		chunkSize = Math.ceil(input / num--);
		arr.push(input.splice(0, chunkSize));
	}

	return arr;

};

