// import techTabs from 'techsTabs.js'
const searchInput = document.getElementById('search-input')
const searchInputWrapper = document.getElementById('search-input-wrapper')
const searchResults = document.querySelector('.search-results')
const projectCards = document.querySelector('.proj-cards')

let techs
searchInputWrapper.addEventListener('click', () => {
  fetch('/tech-tabs.json')
    .then((res) => res.json())
    .then((data) => {
      techs = data
      console.log(techs)
    })
})

// console.log(techs)
// MATCHING TECHS
let matchingTechs
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase()
  if (query.length >= 3 && techs) {
    matchingTechs = techs.filter((tech) => {
      return tech.toLowerCase().includes(query)
    })
    searchResults.innerHTML = matchingTechs
      .map((tech) => {
        return `<button class='pill' data-tech='${tech}'/>
          ${tech}  
        </button>`
      })
      .join('')
  } else {
    searchResults.innerHTML = ``
  }
})

// OPEN TECH POPUP/MODAL
const dialog = document.getElementById('dialog-tech')
const dialogContent = document.getElementById('dialog-tech-content')

function openTech(techName) {
  const id = techName.toLowerCase().replace(/\s+/g, '')
  fetch(`/techs/${id}.html`)
    .then((res) => res.text())
    .then((html) => {
      dialogContent.innerHTML = html
      dialog.showModal()
    })
}

//  listen for clicks on pills
// const modalButton = searchResults || projectCards

searchResults.addEventListener('click', (e) => {
  // modalButton.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-tech]')
  if (btn) {
    e.preventDefault()
    openTech(btn.getAttribute('data-tech'))
  }
})

// lets add the logic to the actual keywords in the cards!!
projectCards.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-tech]')
  if (btn) {
    e.preventDefault()
    openTech(btn.getAttribute('data-tech'))
  }
})
// yes, i play with this element, added the date-tech too , added a class so that i can style it, i did for just one pill, can you amend all the other pills?
//ok cool. now what i will do is go over each tech, revise, personalize a bit more and then paste to you for gramar and revision
