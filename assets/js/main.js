const body = document.querySelector("body")
const grid = document.getElementById("gridBox")
const headline = document.getElementById("headline")
const jokeOutput = document.getElementById("jokeOutput")
function katz() {
  fetch('http://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then(json => {
    console.log(json[0].url);
    grid.innerHTML += `
    <article>
      <img src="${json[0].url}" alt="">
    </article>
    `
  })
}


function birds() {
fetch('http://shibe.online/api/birds?count=100&urls=true&httpsUrls=false')
  .then(response => response.json())
  .then(json => {
    grid.innerHTML += `
    <article>
    <img src="${json[1]}" alt="">
    </article>
    `
  })
}

function hund() {
fetch('http://shibe.online/api/shibes?count=100&urls=true&httpsUrls=false')
  .then(response => response.json())
  .then(json => {
    grid.innerHTML += `
    <article>
    <img src="${json[1]}" alt="">
    </article>
    `
  })
}

headline.addEventListener("click", () => {
  fetch('http://official-joke-api.appspot.com/random_joke')
  .then(response => response.json())
  .then(json => {
    jokeOutput.innerHTML = `
    <p>${json.setup}</p>
    <p>${json.punchline}</p>
    `
  })

  setTimeout(() => {
    jokeOutput.innerHTML = `
    <p></p>
    <p></p>
    `
  }, 7000);

} )

