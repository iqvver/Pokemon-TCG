# Ultra Super Pokemon 5G Pro


# Front End Installation Guide

The Ultra Super Pokemon 5G Pro is easy to use and run. Just open up the client in your favorite web browser and sign in to a unique account to create your own decks. If you want to run locally, fork and clone this repo and through your terminal run npm install and then npm start to run a local host version.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

dfda


### `Technologies Used`
- JavaScript
- React
- CSS/SCSS
- materialUi
- Node

### `Problem Solving`
Though the process was largely smooth, it was not without it's issues. Whenever the app behaved in error (which happened plenty in develpoment) I would stop progress and try to debug from the root, starting from component mounting and following the life cylce events on the front end or from model to routes on the back end. Reading terminal errors and console error messages typically got me to the root of the problem easily. If that was not enough, Google and Stack Overflow typically yielding good results for strange errors. If all else failed, I had a few senior team members to take questions to, where I could voice my concerns and receive guidance to lead me to a solution. All in all, the parts that went poorly were just as helpful to learning as the parts that went well.

--------------------------------------------------------------
Tasks:
1. Implementation of the application pages and the transition between them (Route).
 1. "Home page" ('/home'). 
 1. All the cards that came from the API are located.
 2. There are types and subtypes of the cathodes. types and subtypes come from the API.
 2. The page of the selected card ('/card'). Detailed information about the selected card is located here.
 3. The application login page ('/login'). Authorization in the application by entering a username and password.
The execution time is approximately 20h.
2. Design and filling of the application pages.
The execution time is approximately 25h.
3. Tasks with an asterisk*
 -Card pagination
 -Animation of buttons, cards on hover
 -Adaptive design
The execution time is approximately 5 hours.
During the execution of the task, there were problems with transitions between pages (Route),
due to a conflict of versions of 'react-router-dom'
And also when working with the API, it was not clear how to log in.
