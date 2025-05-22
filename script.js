const JOKE_API_URL = 'https://v2.jokeapi.dev/joke/Programming'

function getJoke() {

    fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
        .then(response => 
            response.json())
        .then(data => {
            const jokeContainer = document.getElementById('joke');
            // if (data.type === 'single') {
            //     jokeContainer.innerHTML = data.joke;
            // } else {
                jokeContainer.innerHTML = `${data.setup} <br> ${data.delivery}`;
            // }
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

