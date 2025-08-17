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

// Portfolio page stuff,
// Portfolio page stuff,
// Portfolio page stuff,
const projCardHtmlSite = document.querySelector('.portfolio-site-backdrop')
const backDropButton = document.querySelector('.portfolio-site-backdrop-button')
const liveHtml = document.querySelector('.see-live-link-html-site')

liveHtml.addEventListener('click', () => {
  projCardHtmlSite.classList.add('portfolio-site-backdrop-show')
  console.log('We made it!!')
})

backDropButton.addEventListener('click', () => {
  projCardHtmlSite.classList.remove('portfolio-site-backdrop-show')
  console.log('We made it!!')
})

// EchoAI page stuff,
// EchoAI page stuff,
// EchoAI page stuff,
const projCardHtmlSiteEcho = document.querySelector(
  '.portfolio-site-backdrop-echo'
)
const backDropButtonEcho = document.querySelector(
  '.portfolio-site-backdrop-button-echo'
)
const liveHtmlEcho = document.querySelector('.see-live-link-html-site-echo')

liveHtmlEcho.addEventListener('click', () => {
  projCardHtmlSiteEcho.classList.add('portfolio-site-backdrop-show')
  console.log('We made it!!')
})

backDropButtonEcho.addEventListener('click', () => {
  projCardHtmlSiteEcho.classList.remove('portfolio-site-backdrop-show')
  console.log('We made it!!')
})
