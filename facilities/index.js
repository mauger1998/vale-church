gsap.registerPlugin(ScrollTrigger)

const menuIcon = document.querySelector('header img:not(.cross)')
const crossIcon = document.querySelector('.cross')
const dropdown = document.querySelector('nav ul')

menuIcon.addEventListener('click', () => {
    dropdown.classList.add('active')
})

crossIcon.addEventListener('click', () => {
    dropdown.classList.remove('active')
})
// swiper element
const swiperEl = document.querySelector('.swiper-one')

// swiper parameters
const swiperParams = {
    slidesPerView: 2.2,
    navigation: true,
    breakpoints: {
        375: {
            slidesPerView: 3.2,
        },
        640: {
            slidesPerView: 5.2,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 6.2,
        },
    },
    on: {
        init() {
            // ...
        },
    },
}

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams)

// and now initialize it
swiperEl.initialize()

// swiper element
const swiperEl2 = document.querySelector('.swiper-two')

// swiper parameters
const swiperParams2 = {
    slidesPerView: 2.2,
    spaceBetween: 0,
    navigation: true,

    breakpoints: {
        640: {
            slidesPerView: 5.2,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 6.2,
        },
    },
    on: {
        init() {
            // ...
        },
    },
}

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl2, swiperParams2)

// and now initialize it
swiperEl2.initialize()

// GSAP
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
            clipPath: 'polygon(-20% 100%, 100% 100%, 100% 100%, 0 100%)',
        })

        gsap.to('h1', {
            clipPath: 'polygon(0 0, 100% 0, 100% 200%, -10% 100%)',
            ease: 'power1.inOut',
            onComplete: () => {
                gsap.to('h1 span', {
                    delay: 0.4,
                    clipPath: 'polygon(0 0, 100% 0, 100% 150%, -100% 100%)',
                    ease: 'power1.inOut',
                })
            },
        })
    }
})

// Whats on

// Quote Fetch
async function fetchWhatsOn() {
    const response = await fetch(
        `https://pxvhzoh0.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22whatsOnSection%22%5D+%7B%0A++title%2C%0A++whatsOnContent%5B%5D+%7B%0A++++text%2C%0A++++title%2C%0A++++%22imgUrl%22%3A+image.asset-%3Eurl%0A++%7D%0A%7D`
    )
    const event = await response.json()
    return event
}

fetchWhatsOn().then((event) => {
    const { result } = event

    const resolvedResult = result[0].whatsOnContent

    const whatsOnGridContainer = document.querySelector('.whats-on-grid')

    resolvedResult.forEach((result) => {
        const card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = /*html*/ `

                <img src="${result.imgUrl}" alt="Vale Church Event" />
                <h3>${result.title}</h3>
                <p class="no-cap">${result.text}</p>
        `
        whatsOnGridContainer.append(card)
    })
})
