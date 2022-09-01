
// const
const loginButton = document.querySelector('.loginButton')
const backgroundBlur = document.querySelector('.backgroundBlur')
const popupContainer = document.querySelector('.popupContainer')
const changePopupButton = document.querySelector('.changePopupButton')
const scheduleLi = document.querySelectorAll('.scheduleLi')
const nextMatchesSubmit = document.getElementById('nextMatchesSubmit')
const scheduleMini = document.forms.scheduleMini
const info = document.getElementById('infoContainer')
const okButton = document.querySelector('.okButton')
const infoText = document.getElementById('infoText')
const scheduleMiniUl = document.querySelector('.scheduleMiniUl')
const mobileBurger = document.querySelector('.mobileBurger')
const navUl = document.querySelector('.navUl')
const headerLogo = document.querySelector('.headerLogo')

// functions
const toggleHeaderLogo = () => headerLogo.classList.toggle('active')
const showPopup = () => popupContainer.classList.add('active')
const hidePopup = () => popupContainer.classList.remove('active')
const hideInfo = () => info.classList.remove('active')
const showInfo = (text) => {
  info.classList.add('active')
  infoText.innerHTML = text
}
const showBackgroundCover = () => backgroundBlur.classList.add('active')
const hideBackgroundCover = () => backgroundBlur.classList.remove('active')
const toggleBackgroundCover = () => backgroundBlur.classList.toggle('active')
const togglePopup = () => popupContainer.classList.toggle('register')

function hideNullMatches () {
  scheduleLi.forEach(value => {
    const team = value.querySelectorAll('.team')
    if (team[0].innerHTML === '') {
      value.classList.add('hide')
    } 
  })
}
hideNullMatches()

async function setFlags() {
  const res = await fetch('/qatar2022/assets/js/flagList.json')
  const data = await res.json()
  const team = scheduleMiniUl.querySelectorAll('.team')
  team.forEach(value => {
    if (value !== '') {
    const code = data.find(country => country.name === value.innerHTML)
    let trueCode  

    if (code) {
      trueCode = code.code.toLowerCase()
      }
      if (value.nextElementSibling !== null) {
        value.nextElementSibling.classList.add(`flag-icon-${trueCode}`)
      } else {
        value.previousElementSibling.classList.add(`flag-icon-${trueCode}`)
      }     
    }
  })
}
setFlags()
const toggleBurger = () => {
navUl.classList.toggle('active')
mobileBurger.classList.toggle('active')
}


// listeners
loginButton.addEventListener('click', showPopup)
okButton.addEventListener('click', hideInfo)
loginButton.addEventListener('click', showBackgroundCover)
popupContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('popupContainer')) {
    hideBackgroundCover()
    hidePopup()
  }
})
changePopupButton.addEventListener('click', togglePopup)
scheduleMini.addEventListener('submit', function(submit) {
  let sub = true
  scheduleLi.forEach(value => {
    const team = value.querySelectorAll('.team')
    if (team[0].innerHTML !== '') {
      const input = value.querySelectorAll('.scoreInput')
      input.forEach(value => {
        if (value.value === '') {
          sub = false
      }
    })
  }
}
)
if (sub === false) {
  submit.preventDefault()
  showInfo('Please fill in all fields')
} 
})


mobileBurger.addEventListener('click', toggleBurger)
mobileBurger.addEventListener('click', toggleBackgroundCover)
mobileBurger.addEventListener('click', toggleHeaderLogo)
navUl.addEventListener('click', function(event) {
  console.log(event.target);
  
  if (event.target.classList.contains('navUlLiA')) {
    toggleBurger()
    toggleBackgroundCover()
    toggleHeaderLogo()
  }
})
