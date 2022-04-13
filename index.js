/*
This script will endeavor to do these things:
~ Create a function that uses a fetch command to pull NASA's picture of the day 
    API and updates the relevent div elements in the DOM.
~ Creates a function for a mouse over event on the picture to enlarge the picture.
~ Creates a function for a click event that reveals the info about the picture.
~ Creates a function to update the text using the NASA API, taking a div class 
    and an object key as arguments.
~ Have a render function in a DOM content loaded event that calls all css functions, 
    updates the relevant divs, calls the fetch command, and calls the event functions, 
    and renders once everything is loaded.
*/


function fetchNasaApi(){
    fetch("https://api.nasa.gov/planetary/apod?api_key=FCAJPCgyt6BxZj8Ey2QEiO17MVUfkOpPTVKoPkFK")
    .then(response => response.json())
    .then(data =>{})
};


    