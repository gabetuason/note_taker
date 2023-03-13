// Exports three functions that can be used to read from, write to, and append to JSON files
// From the excersize modules: 22-Stu_Modular-Routing in helpers. day-3 express.

const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */

// Accepts a file path and some content, and writes the content to the file in JSON format. 
// If an error occurs while writing to the file, an error message is logged to the console. Otherwise, a success message is logged to the console.
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */

// appends new data to JSON file. It first reads the existing data from the file, appends new data to it, and then writes the updated data back to the file.
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

// Exports an object that contains three functions
module.exports = { readFromFile, 
  writeToFile, 
  readAndAppend };
