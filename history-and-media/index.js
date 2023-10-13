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

const menuIcon = document.querySelector('header img:not(.cross)')
const crossIcon = document.querySelector('.cross')
const dropdown = document.querySelector('nav ul')

menuIcon.addEventListener('click', () => {
    dropdown.classList.add('active')
})

crossIcon.addEventListener('click', () => {
    dropdown.classList.remove('active')
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
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, -10% 100%)',
            ease: 'power1.inOut',
            onComplete: () => {
                gsap.to('h1 span', {
                    delay: 0.4,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, -10% 100%)',
                    ease: 'power1.inOut',
                })
            },
        })
    }
})
