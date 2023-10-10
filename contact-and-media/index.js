const menuIcon = document.querySelector('header img:not(.cross)')
const crossIcon = document.querySelector('.cross')
const dropdown = document.querySelector('nav ul')

menuIcon.addEventListener('click', () => {
    dropdown.classList.add('active')
})

crossIcon.addEventListener('click', () => {
    dropdown.classList.remove('active')
})
