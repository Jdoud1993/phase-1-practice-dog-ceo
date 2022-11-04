console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', initialLoad)

function initialLoad() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then((res) => res.json())
    .then((imgObj) => {
        imgObj.message.forEach(handleImg)
    })

    fetch('https://dog.ceo/api/breeds/list/all')
    .then((res) => res.json())
    .then((breedObj) => {
       let breedsArr = Object.keys(breedObj.message)
       breedsArr.forEach(handleBreed)
    })
    
    document.querySelector("#breed-dropdown").addEventListener("change", handleBreedFilter)

}

function handleImg (imgURL) {
    let imgHTML = document.createElement("img")
    let imgContainer = document.querySelector("#dog-image-container")
    imgHTML.src = imgURL
    imgContainer.appendChild(imgHTML)
}

function handleBreed(breedName) {
    let liHTML = document.createElement("li")
    let ulDogBreeds = document.querySelector("#dog-breeds")
    liHTML.innerText = breedName
    liHTML.id = breedName
    liHTML.addEventListener("click", () => liHTML.style.color = "blue")
    ulDogBreeds.appendChild(liHTML)
}



function handleBreedFilter() {
    let dogBreeds = document.querySelector("#dog-breeds").children
    let dogBreedsArr = [...dogBreeds]
    let breedDropdown = document.querySelector("#breed-dropdown")
    dogBreedsArr.forEach((element) => {
        if (element.id.charAt(0) === breedDropdown.value) {
            element.hidden = false
        } else {
            element.hidden = true
        }
    })
    
}

