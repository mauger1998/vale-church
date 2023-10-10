const menuIcon = document.querySelector('header img:not(.cross)')
const crossIcon = document.querySelector('.cross')
const dropdown = document.querySelector('nav ul')
const html = document.querySelector('html')

menuIcon.addEventListener('click', () => {
    dropdown.classList.add('active')
    html.style.overflowY = 'hidden'
})

crossIcon.addEventListener('click', () => {
    dropdown.classList.remove('active')
    html.style.overflowY = 'visible'
})
