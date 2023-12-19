# note-taker

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Description
A full-stack application designed for small business owners who want to organize and keep track of tasks by writing and saving notes. The front end, which I was given as code already completed, features a simple UI where notes are written to a text area on the right hand side, and saved to a list of notes that persist on the left. The user can write a note title and note text in the text area and upon clicking the floppy disk icon can see it saved to the list on the left. When a note from the list is clicked, its title and text will be rendered to the text area. A note can also be deleted from the list by clicking its associated trash can icon. Clicking on the plus sign in the nav bar will clear the text area of any notes currently on display and invite the user to write a new note.  On the back end, which it was my task to design, the application uses an express.js server. The code is modularized so that requests are first delegated to either the apiRoutes module or the HTML module depending on their end-points.  Three api requests, providing the interactivity for the application, can be handled within the apiRoutes module for viewing, adding and deleting notes, whereas requests to serve up the static html for the landing page and the application page are handled within the htmlRoutes module. The notes reside within the db.json file where they are dynamically generated from the index.js file upon user input. The content of this array of objects is then managed by the add and delete functionality. When files need to be retrieved the readFile method of the fs module is employed, and when the data needs to be altered or deleted he changed json object is written again to the db file using the writeFile method of the fs module. Thus this application provides a front end, a server with a RESTFUL api created with express.js and a database file, making for a self-contained full stack of technologies. In development the greatest challenges of building this back end were in conceptualizing how to modularize the various files, the researching of modules that would generate a unique id for each note and figuring out how to use the database file in conjunction with the various kinds of requests, constantly parsing and stringifying from and into json. The front end index.js file was also quite complex, so it was somewhat difficult to understand the logic of the application as a whole, since I did not myself do the whole build. There is still a title from the db.json file showing at the top of the list in the UI, which cannot be deleted. I am not sure this is the intent of the client, looking at the mock-up, but I did not want to leave the db.json file completely empty on init. In future I think a widget allowing for the recording of a voice memo and the conversion of speech to text would be helpful, given that this kind of organizational app is designed for busy people who may be doing their note taking on the go.

This application has been deployed to Heroku and Render.  Here are the links:

Heroku:
https://mighty-peak-97705-5192cd0d820f.herokuapp.com/notes  
Render:
https://note-taker-656r.onrender.com/notes

Since Heroku no longer offers any free cloud hosting, I wanted to host this application long-term on a free platform -- hence the double deployment. Free accounts on Render spin down apps when they are idle for more than 15 minutes, so if accessing the app on Render, please expect it to take some time to load initially.  )

## Installation
Web deployment means that the app is ready to use if the user has access to any browser. The node_modules folder and package.json file which live within the Github repo to which deployment is linked, provide the necessary dependencies.

## Usage
On load the user will be brought to the landing page from which they need to click "Get Started". From the notes page of the application the user can always navigate back to the landing page by clicking "Note Taker" in the top left of the nav bar.  Otherwise, usage is as in the description.  Here are some screenshots which capture the application's flow, or watch the video walkthrough at the links below.

Landing page.  When a user opens the Note Taker, they are presented with a landing page with a link to a notes page.
![Screen Shot 2023-12-18 at 10 46 22 PM](https://github.com/kwubbenhorst/note-taker/assets/140316693/7d3dccdf-e57c-4ad5-af47-ad6d6f83e539)

The first time the application runs it will present a screen with no saved notes. Subsequently when a user clicks on the link to the notes page, they will be presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column. The saved notes in the left-hand column will persist from session to session, at least in the Heroku version of the app. 
![Screen Shot 2023-12-18 at 10 46 50 PM](https://github.com/kwubbenhorst/note-taker/assets/140316693/7905dafe-a1de-4743-992d-32c440aa69dc)

When a user enters a new note title and the note’s text, a Save icon appears in the navigation at the top of the page. 
![Screen Shot 2023-12-18 at 10 48 34 PM](https://github.com/kwubbenhorst/note-taker/assets/140316693/420b4f9a-c289-4054-a984-d75575cac521)

When a user clicks the Save icon, the new note they've entered is saved and appears in the left-hand column with the other existing notes
![Screen Shot 2023-12-18 at 10 50 28 PM](https://github.com/kwubbenhorst/note-taker/assets/140316693/848cb2a2-6352-4425-bcb3-241e1d5217ef)

When a user clicks on an existing note in the list in the left-hand column, that note appears in the right-hand column
![Screen Shot 2023-12-18 at 10 50 51 PM](https://github.com/kwubbenhorst/note-taker/assets/140316693/dcb79869-6397-4b05-9c7d-a8d3b30f0666)

The text area can always be cleared by clicking the write icon (+) at the top right of the navigation. Existing notes can also be deleted by clicking on their associated trash can icon.
![Screen Shot 2023-12-18 at 10 48 34 PM](https://github.com/kwubbenhorst/note-taker/assets/140316693/1e548772-6d27-4f41-b9c4-723b2b2afbab)

To see a dynamic presentation of the application's functionality, a walkthrough video may be viewed via this link on googledrive:
https://drive.google.com/file/d/1c5Olx2g36JbTn7ieL-g4XTkAO3F2P5Uo/view?usp=sharing
Or via this link in Bootcamp Spot's Studio library:
https://bootcampspot.instructuremedia.com/embed/6abe48b3-55e3-4178-8978-f367a477dc5d


## Credits
The back end of this project was a single author creation. The front end was provided in source code from EdX bootcamp's full-flex coding curriculum, module 11 challenge. So the content of the index.js, index.html, notes, html and styles.css files was not Karla Wubbenhorst's own work.

## License
This project is licensed under the [MIT License](./LICENSE-MIT).

## Contributions
Contributions are welcome. Please contact kwubbenhorst@gmail.com or reach out via Github to github.com/kwubbenhorst.

## Tests
N/A

## Questions
Please direct any questions or user feedback to kwubbenhorst@gmail.com or to kwubbenhorst on Github (github.com/kwubbenhorst)
