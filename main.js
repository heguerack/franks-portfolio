// import techTabs from 'techsTabs.js'
const searchInput = document.getElementById('search-input')
const searchInputWrapper = document.getElementById('search-input-wrapper')
const searchResults = document.querySelector('.search-results')

let techs
searchInputWrapper.addEventListener('click', () => {
  fetch('/tech-tabs.json')
    .then((res) => res.json())
    .then((data) => {
      techs = data
    })
})

// console.log(techs)
let matchingTechs
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase()
  if (query.length >= 3 && techs) {
    matchingTechs = techs.filter((tech) => {
      return tech.toLowerCase().includes(query)
    })
    searchResults.innerHTML = matchingTechs
      .map((tech) => {
        return ` <button class='pill' data-tech=${tech} />
          ${tech}
        </button>`
      })
      .join('')
  } else {
    searchResults.innerHTML = ``
  }
})

// OPEN TECH POPUP/MODAL
const dialog = document.getElementById('tech-dialog')
const dialogContent = document.getElementById('tech-content')

function openTech(techName) {
  const id = techName.toLowerCase().replace(/\s+/g, '')
  fetch(`/techs/${id}.html`)
    .then((res) => res.text())
    .then((html) => {
      dialogContent.innerHTML = html
      dialog.showModal()
    })
}

// STEP 2 — listen for clicks on pills
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-tech]')
  if (btn) {
    e.preventDefault()
    openTech(btn.getAttribute('data-tech'))
  }
})
