gsap.registerPlugin(ScrollTrigger)

const getBrowserName = () => {
    let browserInfo = navigator.userAgent
    let browser
    if (browserInfo.includes('Opera') || browserInfo.includes('Opr')) {
        browser = 'Opera'
    } else if (browserInfo.includes('Edg')) {
        browser = 'Edge'
    } else if (browserInfo.includes('Chrome')) {
        browser = 'Chrome'
    } else if (browserInfo.includes('Safari')) {
        browser = 'Safari'
    } else if (browserInfo.includes('Firefox')) {
        browser = 'Firefox'
    } else {
        browser = 'unknown'
    }
    return browser
}
// Modal

const dialog = document.querySelector('dialog')
const showButton = document.querySelector('#open-modal')
const closeButton = document.querySelector('#close-modal')

// "Show the dialog" button opens the dialog modally
showButton.addEventListener('click', () => {
    dialog.showModal()
})

// "Close" button closes the dialog
closeButton.addEventListener('click', () => {
    dialog.close()
})

const menuIcon = document.querySelector('header img:not(.cross, .logo)')
const crossIcon = document.querySelector('.cross')
const dropdownLinks = document.querySelectorAll('nav ul a')

const dropdown = document.querySelector('nav ul')
const html = document.querySelector('html')

menuIcon.addEventListener('click', () => {
    dropdown.classList.add('active')
    html.style.overflowY = 'hidden'
})

crossIcon.addEventListener('click', () => {
    dropdown.classList.remove('active')
    html.style.overflowY = 'auto'
})
dropdownLinks.forEach((link) => {
    link.addEventListener('click', () => {
        dropdown.classList.remove('active')
        html.style.overflowY = 'auto'
    })
})

window.addEventListener('DOMContentLoaded', () => {
    if (getBrowserName() !== 'Safari') {
        const allFancyText = document.querySelectorAll('span:not(h1 span)')

        allFancyText.forEach((text) => {
            gsap.set(text, {
                clipPath: 'polygon(0 0, 100% 0, 0 0, 0% 100%)',
            })
            gsap.to(text, {
                scrollTrigger: {
                    trigger: text,
                    start: 'top 90%',
                    toggleActions: 'play play play reverse',
                },
                clipPath: 'polygon(0 0, 115% 0, 100% 100%, -15% 100%)',
                ease: 'power1.inOut',
            })
        })
        gsap.set('h1 span', {
            clipPath: 'polygon(0 0, 100% 0, 0 0, 0% 100%)',
        })
        gsap.set('h1', {
            clipPath: 'polygon(2% 100%, 100% 100%, 100% 100%, 0 100%)',
        })

        gsap.to('h1', {
            clipPath: 'polygon(-100% -100%, 200% -100%, 200% 200%, -100% 200%)',
            ease: 'power1.inOut',
            onComplete: () => {
                gsap.to('h1 span', {
                    delay: 0.4,
                    clipPath:
                        'polygon(-100% -100%, 200% -100%, 200% 200%, -100% 200%)',
                    ease: 'power1.inOut',
                })
            },
        })
    }
})
