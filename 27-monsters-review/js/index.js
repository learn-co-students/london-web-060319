let pageNumber = 1
const pageLimit = 50
const monstersBaseUrl = `http://localhost:3000/monsters`
const monstersLimitUrl = `${monstersBaseUrl}/?_limit=${pageLimit}&_page=`
const monsterContainer = document.querySelector('#monster-container')
const pageBack = document.querySelector('#back')
const pageForward = document.querySelector('#forward')

document.addEventListener('DOMContentLoaded', init)

function init() {
  renderNewMonsterForm()
  fetchAndRenderAllMonsters()

  pageBack.addEventListener('click', () => {
    pageNumber = pageNumber > 1 ? pageNumber - 1 : pageNumber
    fetchAndRenderAllMonsters()
  })
  pageForward.addEventListener('click', () => {
    pageNumber += 1
    fetchAndRenderAllMonsters()
  })
  
  // fetch('http://localhost:3000/monsters')
  // .then( resp => resp.json() )
  // .then( allMonsters => {
  //   const upperLimit = allMonsters.length / pageLimit

  //   pageBack.addEventListener('click', () => {
  //     pageNumber = pageNumber > 1 ? pageNumber - 1 : pageNumber
  //     fetchAndRenderAllMonsters()
  //   })
  //   pageForward.addEventListener('click', () => {
  //     pageNumber = pageNumber < upperLimit ? pageNumber + 1 : pageNumber
  //     fetchAndRenderAllMonsters()
  //   })
  // })
}

const renderNewMonsterForm = () => {
  const newMonsterForm = document.createElement('form')
  newMonsterForm.addEventListener('submit', handleFormSubmission)

  const nameInput = document.createElement('input')
  nameInput.placeholder = "Name..."
  nameInput.name = "name"

  const ageInput = document.createElement('input')
  ageInput.placeholder = "Age..."
  ageInput.name = "age"

  const descriptionInput = document.createElement('input')
  descriptionInput.placeholder = "Description..."
  descriptionInput.name = "description"

  const submitButton = document.createElement('input')
  submitButton.value = "Spawn Evil"
  submitButton.type = "submit"

  newMonsterForm.append(ageInput, nameInput, descriptionInput, submitButton)
  document.querySelector('#create-monster').append(newMonsterForm)
}

const handleFormSubmission = (event) => {
  event.preventDefault()
  
  const newMonsterObj = {
    name: event.target.name.value,
    age: event.target.age.value,
    description: event.target.description.value,
  }

  fetch(monstersBaseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(newMonsterObj)
  })
}

const fetchAndRenderAllMonsters = () => {
  fetchAllMonsters()
  .then( renderAllMonsters )
}

const fetchAllMonsters = () => {
  return fetch( monstersLimitUrl + pageNumber )
  .then( resp => resp.json() )
}

const renderAllMonsters = (monsters) => {
  monsterContainer.innerHTML = ""
  monsters.forEach( renderMonsterCard )
}

const renderMonsterCard = (monster) => {
  const monsterCard = document.createElement('div')

  const monsterName = document.createElement('h2')
  monsterName.innerText = monster.name + " - " + monster.id

  const monsterAge = document.createElement('h4')
  monsterAge.innerText = monster.age

  const monsterDescription = document.createElement('p')
  monsterDescription.innerText = monster.description

  monsterCard.append(monsterName, monsterAge, monsterDescription)
  monsterContainer.append(monsterCard)
}