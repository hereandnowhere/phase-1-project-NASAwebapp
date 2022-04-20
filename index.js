/*
key:
~ = Needs to be completed
# = in progress of dev.
! = bugged
$ = complete and functioning properly

This script will endeavor to do these things:
$ Create a function that uses a fetch command to pull NASA's picture of the day 
    API and updates the relevent div elements in the DOM.
            // Saving the NASA API key and instructions for web request //
            <!-- Generate API Key
            Your API key for jvine1235@gmail.com is:

            FCAJPCgyt6BxZj8Ey2QEiO17MVUfkOpPTVKoPkFK
            You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

            https://api.nasa.gov/planetary/apod?api_key=FCAJPCgyt6BxZj8Ey2QEiO17MVUfkOpPTVKoPkFK
            For additional support, please contact us. When contacting us, please tell us what API you're accessing and provide the following account details so we can quickly find you:
            Account Email: jvine1235@gmail.com
            Account ID: 67a3c90c-dd2a-42c7-8c4e-339035e35789 -->
~ Creates a function for a mouse over event on the picture to enlarge the picture.
~ Creates a function for a click event that reveals the info about the picture.
$ Creates a function to update the text and img using the NASA API, taking the json as an argument.
# Have a render function in a DOM content loaded event that calls all css functions, 
    updates the relevant divs, calls the fetch command, and calls the event functions, 
    and renders once everything is loaded.
$ Create a catch as a placeholder in case the API doesn't load or something goes wrong
*/


document.addEventListener('DOMContentLoaded', init);

function init(){
    fetchNasaApi();
    return fetchNasaApi
};

function fetchNasaApi(){
    fetch("https://api.nasa.gov/planetary/apod?api_key=FCAJPCgyt6BxZj8Ey2QEiO17MVUfkOpPTVKoPkFK")
    .then(response => response.json())
    .then(nasa => handleNasaApi(nasa))
    .catch(error => couldNotLoadApi(error))
};

function handleNasaApi (data){
    const photoTitleNasa = document.querySelector('h1#photo_title');
    const photoNasa = document.querySelector('img#photo_of_the_day');
    const discriptionNasa = document.querySelector('p#discription');
    const photoSourceNasa = document.querySelector('p#source');
    const dateNasa = document.querySelector('h4#date');

    photoTitleNasa.innerText = `Photo of the Day: ${data.title}`;
    photoNasa.src = data.url;
    discriptionNasa.innerText = data.explanation;
    photoSourceNasa.innerText = `Source: ${data.copyright}`;
    dateNasa.innerText = `Today's Date: ${data.date}`;
    return;
};

function clickForDiscription(){};

function hoverOverPicture(){};

function couldNotLoadApi(error){
    alert(`There was a ${error} error! Turn back brave spacefarer!`)
    const body = document.querySelector('body');
    body.innerHTML = `<div id="main">
                        <div id="space_photo_header">
                             <h1 id="photo_title">Photo Of The Day Could Not Load</h1>
                        </div>

                        <div id="space_photo">
                            <img id="photo_of_the_day" src="https://piximus.net/media/4767/funny-space-comics-1.jpg">
                        </div>

                    </div>`;
    return;
    
};