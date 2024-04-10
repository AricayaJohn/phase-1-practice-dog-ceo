// console.log('%c HI', 'color: firebrick')
//Add JavaScript that: on page load, fetches the images using the url above ⬆️
//parses the response as JSON
//adds image elements to the DOM for each image in the array
let breeds = [];
function getBreeds() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    return fetch(imgUrl)
    .then(response => response.json())
    .then(response => {
        console.log("response", response.message)
        const dogImageContainer = document.getElementById ("dog-image-container")
        response.message.forEach(url => {
            const img = document.createElement("img")
            img.src = url
            dogImageContainer.append(img)
        })
    })
}
// After the first challenge is completed, add JavaScript that:
// on page load, fetches all the dog breeds using the url above ⬆
// adds the breeds to the page in the <ul> provided in index.html

function getBreedNames () {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl) 
    .then (response => response.json())
    .then (response => {
        breeds = Object.keys(response.message)
        addBreedNamesToDom(breeds)
        })
    }
function addBreedNamesToDom (breeds) {
    const ul = document.querySelector("#dog-breeds")
        breeds.map (breed => {
            const li = document.createElement("li")
            li.textContent = breed 
            ul.append(li)
        })
}

// Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes. This can be a color of your choosing.

document.addEventListener("click", event => {
    if (event.target.matches("li")) {
        event.target.style.color = "red"
    }
})
//Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdownLinks to an external site.

document.addEventListener("change",event => {
    if(event.target.matches("#breed-dropdown")){
        const ul = document.querySelector("#dog-breeds")
        ul.innerHTML = ""
        const filteredBreeds = breeds.filter(breed => breed[0] === event.target.value)
       addBreedNamesToDom(filteredBreeds)
    }
})



getBreeds();
getBreedNames();