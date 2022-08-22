// const
const loginButton = document.querySelector('.loginButton')
const backgroundBlur = document.querySelector('.backgroundBlur')
const popupContainer = document.querySelector('.popupContainer')
const changePopupButton = document.querySelector('.changePopupButton')

// functions
const showPopup = () => popupContainer.classList.add('active')
const hidePopup = () => popupContainer.classList.remove('active')
const showBackgroundCover = () => backgroundBlur.classList.add('active')
const hideBackgroundCover = () => backgroundBlur.classList.remove('active')
const togglePopup = () => popupContainer.classList.toggle('register')


// listeners
loginButton.addEventListener('click', showPopup)
loginButton.addEventListener('click', showBackgroundCover)
popupContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('popupContainer')) {
    hideBackgroundCover()
    hidePopup()
  }
})
changePopupButton.addEventListener('click', togglePopup)
