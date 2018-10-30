const fs = require('fs');


/**
 * Takes the data from the .gov site and maps the column to the data.
 */
function mapKeysToData(filePath) {
	const file = fs.readFileSync(filePath);
	const inStream = JSON.parse(file);

	console.log('fileData', Object.keys(inStream));
}

mapKeysToData('../src/data/crimes.json');