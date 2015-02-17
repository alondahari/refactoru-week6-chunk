var chunk = function(input, num, arr){
	arr = arr || [];
	var chunkSize = Math.ceil(input.length / num);;

	while (input.length >= chunkSize) {
		chunkSize = Math.ceil(input.length / num--);
		arr.push(input.splice(0, chunkSize));
	}

	return arr;

};

