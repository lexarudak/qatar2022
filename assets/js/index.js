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

// functions
const showPopup = () => popupContainer.classList.add('active')
const hidePopup = () => popupContainer.classList.remove('active')
const hideInfo = () => info.classList.remove('active')
const showInfo = (text) => {
  info.classList.add('active')
  infoText.innerHTML = text
}
const showBackgroundCover = () => backgroundBlur.classList.add('active')
const hideBackgroundCover = () => backgroundBlur.classList.remove('active')
const togglePopup = () => popupContainer.classList.toggle('register')
const hideNullMatches = () => {
  scheduleLi.forEach(value => {
    if (value.children[0].children[0].children[0].children[0].innerHTML === '') {
      value.classList.add('hide')
    } else {
      // console.log(value.children[0].children[0].children[0].children[0].innerHTML);  
    }
  })
}
hideNullMatches()









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
    if (value.children[0].children[0].children[0].children[0].innerHTML !== '') {
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
