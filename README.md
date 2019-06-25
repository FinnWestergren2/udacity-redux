Welcome to the "Would You Rather" application!

- Setup -
To install, navigate to the root directory of the project in a terminal or command line and ...
# run "npm install"
    this will install necessary packages
# run "npm start" 
    this will start the application

(I'm assuming you have npm installed, but if you dont... https://www.npmjs.com/)

A browser window should open automatically, and the application should load just fine.

- Dashboard -
The Application is designed in a way such that the Dashboard component encapsulates the routed-to pages.
The dashboard contains a set of tabs for navigating, an indication of who is currently logged in, a logout button, and the title of the application.
The pages are rendered beneath the dashboard.
Appropriate elements are disabled on the login page.

- Login -
Select a member for the list! I used the same images that Tyler used :)
If you try to navigate to any page without logging in, it will redirect you to login before it sends you to the page.
If you are entering the application for the first time, it will direct you to the home page upon selecting a user.

- Home -
There are 3 tabs, 'All', 'Completed', and 'Incomplete'. Clicking any of these will display the corresponding set of would-you-rather questions.
Clicking on a question will take you to a question page.

- Question Page -
If you've completed this question already, it will show you the results of the poll so far.
If you haven't it will ask you to pick one, then it will take you to the results screen.
If the question does not exist (bad url), it will display a 404 error.

- New Question Page -
Contains 2 inputs and a submit button (would you rather {input 1} OR {input 2})
Upon submission, a new question is created and is visible by all members.
You will then be redirected to the Home Page.

- Leaderboard Page -
Display of all members and their stats in order by total submissions + answers

- Logout -
Upon logging out, the current page you were just on will be saved, and if you select another member, you will go back to that page as the new member.

- Important notes about my code -
## To spice up my application, I decided to employ react hooks, which was not covered in this course. However, I believe it was a worthwhile endeavor to learn both. ##
The Dashboard Component is a direct child of the App Component, not the Routes Component.
I had a fun time!

Enjoy my application,
Finn Westergren
