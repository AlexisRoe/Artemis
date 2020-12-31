<img src="./client/src/assets/logo/logo-artemis.jpg" alt="Logo of the project" align="left" width="150" height="150" >

# Artemis &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/AlexisRoe/Artemis/blob/master/LICENSE)

Function Sheets 2.0 - Dashboard like tool to use for hotels/ event staff.

**You can find the project here**: [Deployment on Heroku](https://dashboard-artemis.herokuapp.com/)

Artemis is a dashboard like approach for replacing classic "Function Sheets". A function sheet is just a sheet of paper, which describes an event at a hotel for one day. It holdes information about the amount of people expected, the booked rooms, the setup, the ordered food & beverages and more. It is usually a big mess to spread the newest information to the colleagues. Why not using a tool, everyone have now. Your Phone.

---

Artemis is my **capstone project** for the Webdeveloper Bootcamp at Neue Fische Cologne in late 2020. The capstone project is meant to learn and recaping concepts, which you are interested the most. You can log in and see some live data. But of course all data are mocked.

What topics I covered with that project?

- hashing and storing passwords
- protected routing in the client & server
- building middleware
- Authentication with json web token and middleware
- building API´s

## How to use

### 1. Login

use the following credentials: <br />
**User**: Martin McFly <br />
**Password**: DeLorian

### 2. Daily Overview

The homescreen is actually the daily overview about all events happening on that day, highlighting the next todos on the shedule. Please be aware, that everything is mocked, including the date.

### 3. Choose a specific event

The event is displayed in more details, like it would be on regular Function Sheet. Why? Because users are used to it. It´s a fast and convenient way to display the information. The advancement is to get rid of some clutter like metadata, which is not usefull for the operational departments.

### 4. The logo is the menu 😉

Here you can find, some more details, information about changed documents, helpful tools like mise-en-place (preparation) lists and more. Be aware, its still under construction.

## The design

The design is meant to look luxurious, simple and concentrated on the information itself. I used two main colors and a sans-serif font. You can find all informations in the file below.

[XD Artemis Prototyp](https://xd.adobe.com/view/a7884a1f-4aa5-4b74-b2b1-1d4a6eed2c98-f2db) (created in 2020/10)

## Installing / Getting started

For this project you need a MongoDB instance. For more information go to the database section

1. Create the two databases and fill it with data<br />
   [the mocked database as a json file](./lib/data/database.json)

2. Createa a **.env** file with the following credentials

```ènv
DB_URL=mongodb+srv://<user>:<password>@<your cluster>?retryWrites=true&w=majority
DB_NAME=<your database>
DB_COLLECTION_USER=users
DB_COLLECTION_EVENTS= events
AUTH_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.5b0YUvXu9IFCI4kqzNAfrnuA2lSMp8XtezIZTfQYH4k
TOKEN_SECRET=<jwt token_secret>
```

3. Install node.js and use the following commands

```shell
git clone git@github.com:AlexisRoe/Artemis.git
cd artemis/
npm install
```

4. standard commands

for development

```shell
npm run dev
```

for styling components

```shell
npm run storybook
```

4. Create a token_secret for the JSON web token. You can use the cli tools in the ./lib/cli folder for creating the token and hashing passwords for the user database.

- [cli tool for hashing password using crypto.js](./lib/cli/hashingMaster.js)
- [cli tool for creating secret tokens, used with jwt](./lib/cli/tokenGenerator.js)

### Build with

[React](https://reactjs.org/), [styled-components](https://styled-components.com/), [express.js](https://expressjs.com/), [eslint](https://eslint.org/), [storybook](https://storybook.js.org/), [React Router](https://reactrouter.com/), [crypto-js](https://www.npmjs.com/package/crypto-js), [MongoDB](https://www.mongodb.com/)

## Tests

...in progress

## Database

For this project, I used a Atlas Cluster of MongoDB. I created two collections, which you can find here. The collection events with the data I used can be found in the [./lib/data/database.json](./lib/data/database.json) file.

1. users

```json
{
  "name": "Martin McFly",
  "password": "DeLorian",
  "lastModified": 2020-12-21T09:10:29.164+00:00,
  "auth_token": "jwt_token",
  "personalnr": "2015"
}
```

2. events

```json
[
  {
    "title": "string",
    "sign": "string",
    "Customer-ID": 1,
    "event-ID": 1,
    "start": "2020-10-01T10:00:00",
    "end": "2020-10-01T16:00:00",
    "pax": 1,
    "rooms": [
      {
        "location": "string",
        "title": "string",
        "start": "2020-10-01T10:00:00",
        "end": "2020-10-01T10:00:00",
        "default": true,
        "role": "string",
        "pax": 1,
        "setup": "string icons",
        "equipment": {
          "flipchart": 1,
          "pinnboard": 2,
          "beamer": 1
        },
        "notes": [""]
      }
    ],
    "event": [
      {
        "title": "string",
        "location": "string",
        "pax": 0,
        "start": "2020-10-01T10:00:00",
        "end": "2020-10-01T10:00:00",
        "foods": ["string", "string", "string"],
        "beverages": ["string", "string", "string"]
      }
    ]
  },
  {
    "icons": {
      "iconClassRoom": "iconClassRoom",
      "iconUForm": "iconUForm",
      "iconBoard": "iconBoard",
      "iconBanquet": "iconBanquet",
      "iconChairCircle": "iconChairCircle"
    }
  }
]
```
