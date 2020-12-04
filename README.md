<img src="./client/src/assets/logo/logo-artemis.jpg" alt="Logo of the project" align="right" width="150" height="150" >

# Artemis &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/AlexisRoe/Artemis/blob/master/LICENSE)

Function Sheets 2.0 - Dashboard like tool to use for hotels/ event staff.

**You can find the project here**: [Artemis on Heroku](https://dashboard-artemis.herokuapp.com/)

Artemis is dashboard like approach for replacing a tool called "Function Sheets". A function sheet is mostly a sheet of paper, which describes an event at a hotel for one day. It holdes information about the amount of people expected, the booked rooms, the setup, the ordered food & beverages and more.Its usally a big mess to spread the newest information to the colleagues. Why not using a tool, everyone have now. Your Phone.

***

In real its the **capstone project** of the Webdeveloper Bootcamp at Neue Fische Cologne in late 2020. Its for learning and recaping concepts and technologies. You can log in and se some live data. But of course all data are mocked. 

***

**My Personal Intention** was too learn more about authentication, protected routing, password encryption, building apis and working with data, send to the client.

## How to use

1. Login

use the following credentials:
**User**: John Doe
**Password**: Donnerstag

2. Daily Overview

The homescreen is actually the daily overview about all events happening on that day, highlighting the next todos on the shedule. Please be aware, that everything is mocked, including the date. Why? Because there is a limited amount of data at the database

3. Choose a specific event

The event is displayed in more details, like it would be on regular Function Sheet. Why? Because User know that format and are used to it, its a fast and convient way to display the information. The Advancement is to get rid of some clutter like metadata, which is not usefull for the operational departments.

4. The Logo is the Menu

Here you can find, some more details, information about changed documents, helpful tools like mise-en-place (preparation) lists and more.

--- still under construction ---

## The design

Because the prototyp would be used as part of an enterprise software, why not branding it for the company buying it. In my example IHG, one of the biggest hotel companies on the planet. Okay its not Marriott. But they are still huge.

Here (2020/10/10) the [https://xd.adobe.com/view/a7884a1f-4aa5-4b74-b2b1-1d4a6eed2c98-f2db/](XD Artemis Prototyp)


## Installing / Getting started

This project worked with a MongoDB instance. Without any changes on the code structure you will need an Account and the following databases with some data. Look at the database section

1. creating databases and fill it with data

2. Createa a **.env** file with the following credentials

```ènv
DB_URL=mongodb+srv://<user>:<password>@<your cluster>?retryWrites=true&w=majority
DB_NAME=<your database>
DB_COLLECTION_USER=users
DB_COLLECTION_EVENTS= events
````

## Developing
### Build with

[React](https://reactjs.org/), [styled-components](https://styled-components.com/), [express.js](https://expressjs.com/), [eslint](https://eslint.org/), [storybook](https://storybook.js.org/), [React Router](https://reactrouter.com/), [crypto-js](https://www.npmjs.com/package/crypto-js), [MongoDB](https://www.mongodb.com/)

### Prerequisites

You just need node.js installed. I personally used Visual Studio Code for writing code.

### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone git@github.com:AlexisRoe/Artemis.git
cd artemis/
npm install
```

## Tests

## Database

I used the last verison of MongoDB. Actually its a atlas instance with two databases in one collection.

1. users
````json
{   
  "_id":{"$oid":"***********"},
  "name":"John Doe",
  "password":"*******************",
  "email":"john@doe.de",
  "personalnr":"1000"
 }
````

2. events
````json
{}
`````
