# AngularJS assignment

## Overview

This application contains a search page to search results from the List of cities. 
It contains an another grid to hols selected cities data. User can simply click buttons to move city form one grid to
another.

There is a button in selected list grid named 'Show Details', by click on this button user can see more details of
selected cities.

## Prerequisites

### Node.js and Tools

I've used node to create local server to run application. You will have to dowload node if you run it in
node server.
- Install the tool dependencies ('npm install').


## Workings of the application

- The application filesystem layout structure is based on the single page application.
- There is no dynamic backend (no application server) for this application. We have used a static JSON file to read
  data.

### Installing dependencies

The application relies upon node.js tools, such as express.  You can
install these by running:

```
npm install express
```

This will also run express, which will download files needed.

### Running the app during development

- Run `node app.js`
- navigate your browser to `http://localhost:8888` to see the app running in your browser.

## Application Directory Layout

      node_modules         -->  express and node dependency files
      scripts/             --> javascript files
        angular.min.js     --> angularjs library file
        angular-route.js   --> angular routing library file
      styles/              --> css files
        bootstrap.min.css  --> bootstrap css file
      app.js               --> the main application module
      dataList.json        --> static json data file
      detail.html          --> detail page to display selected items and it's description
      home.html            --> search page
      index.html           --> app layout file (the main html template file of the app)
      package.json         --> node dependcies and project's description are here
      

## Contact
Dheeraj Jaiswal
jdheeraj32@yahoo.com
9810550702

