function convertToUpper(string) {
	var oldArray = string.split(' '),

		newArray = [];

	

	for(var i = 0; i < oldArray.length; i++){

		// newArray.push(word.charAt(0).toUpperCase() + word.slice(1));

		newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1));
	}

	return newArray.join(' ');
}

console.log(convertToUpper('mohmad gamal ali'));

