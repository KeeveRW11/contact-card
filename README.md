# contact-card


## toBeHonest

## Description
 Giglr is an application made for posting the most amazing memes to a close community of developers. The application is very interactive and secure and offers an amazing user interface as well as experience that will have users hooked and wanting to come back for more. The application is built with various technologies which can be found in the [Technologies Used](#technologies-used) section. This project utilizes RESTful API and authentication. It follows the concepts of Object-Oriented Programming, Object-Relational Mapping and Model-View-Controllers

## User Story
As a developer looking to share hilarious and sometimes outright stupid memes...
I WANT a secure application with a friendly user interface...
SO THAT I can post my feelings and thoughts using memes(uploaded or using weblinks), be able to vote and make comments on my post and the post of others.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Technologies Used](#technologies-used)
* [License](#license)
* [Contributors](#contributors)

## Installation
Run the following line of code in your terminal to install all the needed packages: 
```
npm i
```

Once all the packages have been installed, return to the terminal and run the following code on the command line : 
```
node server.js
```
This will run the server where you can find the page on localhost:3007. To end your server in your terminal type: control + c.
As this application uses MYSQL to store data to the database, you will need to load the database.
Type the following line to the command line and enter your MYSQL password:
```
mysql -u root -p
```
Once this step is done, proceed to load the database using the following command:
```
USE giglr_db
```
The next step will be to load the database using the following command:
```
source db/schema.sql
```

## Usage
This application is fully functional and can be [viewed here!](https://giglr.herokuapp.com/). Giglr is hosted by Heroku, therefore we advise that users give the page a moment to load. Once loaded users will be brought to the home page. In order to view and make post the user will need to sign-up or login using the link in the upper right hand corner of the webpage. Once logged in the user will be able to make uploads using the upload link and be able to view their own uploads from the dashboard link. The user will also be able to view their posts from the homepage as well as the posts of other users and will also be able to vote and comment on posts. 

## Technologies Used:
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Node Packages Used ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

- Express - The express NPM is used for performing robust routing. This package is required for starting the server.
- Mongoose - Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.




## License
![Unlicensed](https://img.shields.io/badge/license-Unlicense-blue.svg)

## URLs
1) GitHub Repository Link: (https://github.com/KeeveRW11/tobehonest)

## Contributors


## Screenshots


