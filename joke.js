const jokeEl = document.getElementById("joke");
const newJokeBtn = document.getElementById("new-joke");

async function fetchJoke() {
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
        const data = await response.json();
        jokeEl.textContent = data.joke;
    } catch (error) {
        jokeEl.textContent = "Failed to fetch a joke. Try again!";
        console.error(error);
    }
}

newJokeBtn.addEventListener("click", fetchJoke);
fetchJoke();