# Megaventory project

### to start locally:
1. clone the repo
2. run 'npm install'
3. run 'npm start'

### to view online follow the link https://eager-hamilton-b0ec5e.netlify.app/ 

## Project structure

It's a simple Create React App project. In the src folder I made a directory called "Pages" for two pages task requires.
Since it's SPA (Single Page App) I used react-router-dom to handle the routing on the browser.
The task says, I should get the data from json file, First I thought I was supposed to fetch the data from a remote server, but then I figured that there was no access to the API from the given URL, which was hosted in Firebase as I understood, I couldn't fetch the data due to CORS policy. That's why I decided to download the file, and read it locally. I also changed the name of the file into 'data.json' for comfort sake.

The project is hosted on Netlify, so that you can easelly access it online. 

Why I chose to do this project with react is simply because I like thinking in react way. It makes development process easy and more productive.

This project resembles with many of my projects from real life and from my previous experiences. In my  projects I often fetched the data from a json file and developed data driven apps.
