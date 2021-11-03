const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=e22366ffd2474d1dab07f27c78147445";

// If i could not get access to the API due to "cross-origin request blocked", i would use this proxy variable: fixedUrl.
// const cors = "https://noroffcors.herokuapp.com/";
// const fixedUrl = cors + url;

const resultsContainer = document.querySelector(".results");

async function callApiRawg() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const data = results.results;
    resultsContainer.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      resultsContainer.innerHTML += `<div class="game-info">
      <p>Name: ${data[i].name}</p>
      <p>Rating: ${data[i].rating}</p>
      <p>Number of Tags: ${data[i].tags.length}</p>
      </div>`;
      if (i === 7) {
        break;
      }
    }
  } catch (error) {
    resultsContainer.innerHTML = `<div class="error"> This error occured: ${error} </div>`;
  }
}

callApiRawg();
