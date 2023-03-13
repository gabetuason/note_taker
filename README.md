# note_taker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

An application called `Note Taker` that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file. With handling client side requests, it triggers corresponding requests on the server side: GET, POST, and DELETE. Specifically, GET requests retrieve data from JSON file in database, POST requests adds data to the database, and DELETE requests remove notes from database. Included in the files are the starter code for the htmls (public) and helpers (fsUtils.js) for read, write and append to JSON files. UUID (uuid.js) also is included to give unique identifiers for each notes in the database(db.json).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

There is no need for installation for this application since it is deployed on heroku. For testing purposes, with the console command line, you will need to type: `npm i` To run the application. Also include, these other packages for express `npm i express` and uuid `npm i uuid`. 

## Usage

Deployed link:

After running the application and when you click "Get Started." You will be directed to the note page where you can add/delete notes. On the top right `+` is to add new note and a SAVE icon will appear to save. Red trash to delete the corresponding note.


For more help on usage, please view screenshot.
![screenshot]()

## License

The project is licensed under: MIT License. To see the license permissions for commercial and non-commercial use, check the link https://opensource.org/licenses/MIT

## Contributing

This is an open source application, feel free to use this for any project. It is important to mention me as a contributor for distribution or modifications. Starter code here: https://github.com/coding-boot-camp/miniature-eureka and thanks to bootcamp UofT edx for providing fsUtils.js and uuid.js.
  
## Tests

During testing, ensure node_modules and package-lock.json are added in the correct file directory after following the installation process. To see if application processing accordingly, it should bring you to a HTML when `http://localhost:3001/` on your web browser after you type `npm start`. 

## Questions

For any questions about the application, please contact gabetuason24@gmail.com or view the github https://github.com/gabetuason to find me
