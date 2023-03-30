# <Bored-of-Your-Job-Board-App>

## Description
***
The Board of your Job Board app is a platform that enables users to view job postings, create new job postings, and manage their job postings. Upon visiting the site, users are presented with the job postings dashboard and a login button. When the user clicks on the login button, they are taken to a login/signup form where they can enter their credentials or sign up to create a new account. Once logged in, users can view job postings or create new ones. Navigation links for the homepage, the dashboard, and the option to log out are available for signed-in users.

The homepage displays existing jobs, including the post title, requirements, salary, and date created. Users can create a new job post by clicking on the "create new post" button, which prompts them to enter both a title and contents for the job. Once the title and contents are saved, the user is taken back to an updated dashboard with their new post. Users can also manage their job postings by accessing the dashboard, which displays any job posts they have already created and allows them to create new ones.

Overall, the Board of your Job Board app provides a simple and easy-to-use interface for users to view and manage job postings, making it a valuable tool for job seekers and employers alike.
***
## Challenges we faced include: 
- Getting the routes to go to the right places
- Learning how to use handlebars
- Merge conflicts
***
## Successes we are proud of include: 
- Finally figuring out the routes & models!
- Collaborating as a team to get everything done from start to finish
- Working together to debug each others issues
***
## Table of Contents
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Future Development](#future-development)
***
## USER STORY
```
AS A recruiter who needs to share available developer jobs,
I WANT a site where I can post about job opportunities,
SO THAT I can find candidates to fill open roles. 
```

## ACCEPTANCE CRITERIA
```
GIVEN an interactive job board site
WHEN I visit the site for the first time
THEN I am presented with the job postings dashboard and a login button
WHEN I click on the login button
THEN I am taken to a form to either login or signup to create an account
WHEN I put my credentials into the login form
THEN I am taken to the dashboard where I can view job postings or create a new one
WHEN I put my information into the signup form and create an account
THEN my user credentials are saved and I am logged into the site
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing jobs that include the post title, requirements, salary and the date created
THEN I am taken to the dashboard and presented with any job posts I have already created and the option to create a new post
WHEN I click on the button to add a new job post
THEN I am prompted to enter both a title and contents for the job
WHEN I click on the button to create a new job post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new  post
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
```
***
## Installation
Here are installation instructions for the job board app:

Make sure you have Node.js and npm installed on your machine. You can download them from the official Node.js website: https://nodejs.org/en/.

Clone the project repository to your local machine using Git or download the ZIP file and extract it.

Open a terminal or command prompt and navigate to the project directory.

Run the following command to install the app's dependencies:

Copy code
```
npm install
```
Create a .env file in the project root directory and add the following environment variables:

makefile
Copy code
DB_NAME=your_database_name
DB_USER=your_database_username
DB_PASSWORD=your_database_password
Replace "your_database_name", "your_database_username", and "your_database_password" with your actual database information.

Run the following command to create the database tables:

arduino
Copy code
npm run db:create
Run the following command to start the server:
```
mysql -u root -p
```
source the database
```
npm start
```
***
## Usage
To use the job board app, you must first follow the installation instructions, then once you've done an npm start"

Open a web browser and navigate to http://localhost:3001. You should be presented with the job postings dashboard and a login button.

Click on the login button to either login or signup to create an account.

Once you are logged in, you can view job postings or create a new one. You can also logout by clicking on the logout option in the navigation.
***
## A screenshot of the MVP
![screenshot](./assets/Screenshot%202023-03-30%20175045.png)

## Credits
Contributors to this project are:
Contributors to this project are:  
Dannika [GitHub](https://github.com/dannikaml) 
Bailey [GitHub](https://github.com/skyeflier)  
Alex [GitHub](https://github.com/alexandramunn)   
John [GitHub](https://github.com/johnrklink)   
Eeann [GitHub](https://github.com/Eibon64) 
***
## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
***
## Future Deployment
For future iterations of this website, we would improve it by adding:
- Create additional tagging and filtering options to provide a better, more organized user experience
- Improving the overall design and user interface 
- Creating a log in state for job seekers to save jobs and communicate with employers
- Allow for employers to create profiles for job seekers to use
- Add DELETE route so employers can delete job descriptions when positions are filled
- Add a space where users could submit a resume to the job postings email within the site
- Create more complex interactivity with the job posts
