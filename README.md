## Travlr Getaways Full Stack Application Journal ##

### Architecture: ###

#### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA). ####

For this project, I used an Express HTML application for the customer facing site, an Agular Single Page Application for the admin site, and JavaScript to code the logic for the site.  The Express portion uses the MVC technique to separate the views for each page, models to format the data for the site, and controllers to request the model data and return it to the view.  While the SPA uses a similar format, each portion of the SPA is either a component or a module that contains a TypeScript file, an HTML file, and CSS file.  The TypeScript file acts as the logic for the component and the HTML presents the view.  The CSS file could handle style choices but it is not utilizied individually for this project.  JavaScript ties the two parts of the project together by acting as language that handles all the logic.  

#### Why did the backend use a NoSQL MongoDB database? ####

A NoSQL database was used to store all the data that would be needed for the site.  Rather than hardcoding all the data that was needed, documents could be added to the database and pulled as needed.  MongoDB is a non-relational database so accessing documents, subdocuments, or other nested information inside of the document can be done easily without it having to be joined to another collection.

### Functionality: ###

#### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces? ####

JSON is essentially a JavaScript object while JavaScript is the actual scripting language.  JSON allows a program to easily pass data objects by storing the data as a key-value pair.  This is used to tie the frontend and backend together by being the format that the data from the backend will be passed to the front end.  

#### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components. ####

A major refactor that was done was altering the header and footer of each page of the Express site to be handle dynamically. The header and footer were made into partials for Handlebars and could simply be called in a file to have them display.  This saves a lot of redundant codes as without the partials, the header and footer would have had to be manually coded into every HTML page.  By dynamically calling aspects of the site, the site is more efficient and manageable.  Another refactor that took place was creating a loop in the "Trips" site to loop through all stored trips in the database, rather than manually coding each trip in an HTML file.  As with the partials, this saves a lot of unnecessary code and increases efficiency since any change to the trips in the database will automatically be displayed correctly in the view.

### Testing: ###

#### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application. ####

API endpoints are the point where one part of the program interacts with another part of the program.  For this program, an API was created for each site, the Express and the Angular, to interact with the database for either verification of the trips in the database or authentication of the user.  Since the end point is where requests will be sent and response received, it is an important area to secure.  For these sites, UAC was implemented to disable the methods that could alter information in the database unless a user was logged in correctly.  The methods are the logical functions that are the backbone of the program.  They can be called to complete a specific task. 

### Reflection ###

#### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field? ####

I intend to become a full stack developer so gaining the experience of building a full stack application has been very valuable.  I have worked on both frontend and backend applications so learning how to tie everything together was extremely helpful.  I have greatly improved my JavaScript skill and learned how to better incorporate the MVC method into my programs.  
