gsap.registerPlugin(ScrollTrigger)

const backToTopButton = document.querySelector('#back-to-top-button')

backToTopButton.addEventListener('click', () => {
    console.log('clicked')
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})

const menuIcon = document.querySelector('header img:not(.cross, .logo)')
const crossIcon = document.querySelector('.cross')
const dropdown = document.querySelector('nav ul')
const dropdownLinks = document.querySelectorAll('nav ul a')

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
// swiper element
const swiperEl = document.querySelector('.swiper-one')

// swiper parameters
const swiperParams = {
    slidesPerView: 2.2,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 400,
    effect: 'slide',

    breakpoints: {
        375: {
            slidesPerView: 3.2,
        },
        640: {
            slidesPerView: 4.2,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 5.2,
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
    slidesPerView: 3.2,
    navigation: {
        nextEl: '.swiper-two-button-next',
        prevEl: '.swiper-two-button-prev',
    },
    speed: 400,
    effect: 'slide',

    breakpoints: {
        375: {
            slidesPerView: 4.2,
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

// Sections Fetch
async function fetchSections() {
    const response = await fetch(
        `https://pxvhzoh0.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27activities%27%5D+%7B%0A++sections%5B%5D%7B%0A++++...%2C%0A++++%27imgUrl%27%3A+image.asset-%3Eurl%2C%0A++++rooms%5B%5D+%7B%0A++++...%2C%0A++++%22imgUrl%22%3A+roomImage.asset-%3Eurl%2C%0A++++++features%5B%5D+%7B%0A++++++++%22imgUrl%22%3A+icon.asset-%3Eurl%2C%0A++++++++...%0A++++++%7D%0A++++%7D%2C%0A++++cards%5B%5D+%7B%0A++++%22imgUrl%22%3A+image.asset-%3Eurl%2C%0A++++...%2C%0A++++%0A++++%7D%0A++++%0A++%7D%0A++++%7D%0A`
    )
    const sectionsData = await response.json()
    const sections = sectionsData.result[0].sections
    return sections
}
fetchSections().then((sections) => {
    const barbaraSection = document.querySelector('#barbara .wrapper')
    barbaraSection.innerHTML = ''
    let words = sections[0].mainTitle.split(' ')
    words[words.length - 1] = `<span>${words[words.length - 1]}</span>`
    let mainTitleWithSpan = words.join(' ')
    let subTitleWords = sections[0].subTitle.split(' ')
    let wrapIndex = subTitleWords.length >= 5 ? 4 : 2
    subTitleWords[wrapIndex] = `<span>${subTitleWords[wrapIndex]}</span>`
    let subTitleSpanWrapped = subTitleWords.join(' ')

    const sectionHTML = /*html*/ `
            <div class="welcome-top">
                <h2>${mainTitleWithSpan}</h2>            
            </div>
            <div class="welcome-bottom">
                <img
                    class="pencil"
                    aria-hidden="true"
                    src="../public/images/bench1.webp"
                    alt="Background Image"
                />
                <div class="welcome-bottom-left">
                    <h3>${subTitleSpanWrapped}</h3>
                    <p>
                        ${sections[0].text}
                    </p>
                    <p class="tag">${sections[0].name}</p>
                </div>
                <div class="welcome-bottom-right">
                    <img
                        src="${sections[0].imgUrl}"
                        alt="Image"
                    />
                </div>
            </div>
        `

    barbaraSection.innerHTML += sectionHTML

    let andrewSection = document.querySelector('.andrew-section .wrapper')
    andrewSection.innerHTML = ''

    let andrewMainTitleWords = sections[1].mainTitle.split(' ')
    if (andrewMainTitleWords.length >= 2) {
        andrewMainTitleWords[1] = `<span>${andrewMainTitleWords[1]}</span>`
    }
    let andrewMainTitleSpanWrapped = andrewMainTitleWords.join(' ')

    let andrewSubTitleWords = sections[1].subTitle.split(' ')
    if (andrewSubTitleWords.length >= 2) {
        andrewSubTitleWords[1] = `<span>${andrewSubTitleWords[1]}</span>`
    }
    let andrewSubTitleSpanWrapped = andrewSubTitleWords.join(' ')

    let andrewSectionHTML = /*html*/ `
    <div class="andrew-titles">
        <h2>${andrewMainTitleSpanWrapped}</h2>
    </div>
    <div class="andrew-content">
        <div class="andrew-left">
            <h3>${andrewSubTitleSpanWrapped}</h3>
            <p>${sections[1].text}</p>
            <p class="no-cap">~${sections[1].name}</p>
            <a href="../#andrewWarren">
                <button>
                    <img src="../public/images/black-button.svg" alt="Button Svg" />
                    CONTACT ANDREW NOW
                </button>
            </a>
        </div>
        <div class="andrew-right">
            <img
                src="${sections[1].imgUrl}"
                alt="${sections[1].name} Music Group Church"
            />
        </div>
    </div>
    `

    andrewSection.innerHTML += andrewSectionHTML

    let musicCardsSection = document.querySelector(
        '.music-cards-section .wrapper'
    )
    musicCardsSection.innerHTML = ''

    let musicCardsHTML = sections[1].cards
        .map((musicCard) => {
            return /*html*/ `
            <div class="music-card">
                <img
                    src="${musicCard.imgUrl}"
                    alt="${musicCard.title}"
                />
                <h3>${musicCard.title}</h3>
                <p>${musicCard.text}</p>
                <a href="../#andrewWarren">
                    <button style="color:black; margin-block-start:1.5rem;">
                        <img
                            src="../public/images/black-button.svg"
                            alt="Button Icon"
                        />
                        CONTACT ANDREW NOW
                    </button>
                </a>

            </div>`
        })
        .join('')

    musicCardsSection.innerHTML += musicCardsHTML

    let bellSection = document.querySelector('.bell-section .wrapper')

    let bellTitle = bellSection.querySelector('.bell-top h2').textContent
    let bellTitleWords = bellTitle.split(' ')
    bellTitleWords[0] = `<span>${bellTitleWords[0]}</span>`
    bellSection.querySelector('.bell-top h2').innerHTML =
        bellTitleWords.join(' ')

    bellSection.querySelector('.bell-content-top h3').textContent =
        sections[2].subTitle

    let bellGrid = bellSection.querySelector('.bell-grid')
    bellGrid.innerHTML = ''

    let bellSubTitle = bellSection.querySelector(
        '.bell-content-top h3'
    ).textContent
    let bellSubTitleWords = bellSubTitle.split(' ')
    if (bellSubTitleWords.length >= 4) {
        bellSubTitleWords[3] = `<span>${bellSubTitleWords[3]}</span>`
        bellSection.querySelector('.bell-content-top h3').innerHTML =
            bellSubTitleWords.join(' ')
    }

    let bellGridHTML = sections[2].cards
        .map((card) => {
            if (
                !card.imgUrl ||
                !card.imgUrl.endsWith('.svg') ||
                card.imgUrl.length < 1000
            ) {
                return /*html*/ `
                <div class="bell-grid-item">
                    <h3>${card.title}</h3>
                    <p>${card.text}</p>
                </div>`
            }
        })
        .join('')

    bellGrid.innerHTML += bellGridHTML

    let seekersSection = document.querySelector('#seekers')

    // Assuming sections[3] is available and contains the required data
    let seekersContent = seekersSection.querySelector('.seekers-content')
    let seekersBottom = seekersSection.querySelector('.seekers-bottom')

    // Set mainTitle in h3
    let seekersLeftH3 = seekersContent.querySelector('.seekers-left h3')
    seekersLeftH3.textContent = sections[3].mainTitle

    // Set name in p tag
    let seekersLeftP = seekersContent.querySelector('.seekers-left p')
    seekersLeftP.textContent = sections[3].name

    // Set imgUrl in seekers-right
    let seekersRightImg = seekersContent.querySelector('.seekers-right img')
    seekersRightImg.src = sections[3].imgUrl

    // Create seekers-item for each card
    seekersBottom.innerHTML = ''
    sections[3].cards.forEach((card, index) => {
        let seekersItemHTML = `
            <div class="seekers-item">
                <h3>${card.title}</h3>
                <p>${card.text}</p>`

        // Add the button to the last card
        if (index === sections[3].cards.length - 1) {
            seekersItemHTML += `
                <a href="../#janeGoddard">
                    <button>
                        <img
                            src="../public/images/button-svg.svg"
                            alt="Button Icon"
                        />
                        CONTACT JANE NOW
                    </button>
                </a>`
        }

        seekersItemHTML += `</div>`
        seekersBottom.innerHTML += seekersItemHTML
    })

    // Assuming sections[4] is available and contains the required data
    let pastoralSection = document.querySelector('#pastoral')
    let pastoralTop = pastoralSection.querySelector('.pastoral-top')
    let pastoralGrid = pastoralSection.querySelector('.pastoral-grid')

    // Set mainTitle in h2
    let pastoralTopH2 = pastoralTop.querySelector('h2')
    let mainTitleWords = sections[4].mainTitle.split(' ')
    if (mainTitleWords.length >= 2) {
        mainTitleWords[1] = `<span>${mainTitleWords[1]}</span>`
    }
    pastoralTopH2.innerHTML = mainTitleWords.join(' ')

    // Set subTitle in h3
    let pastoralTopH3 = pastoralTop.querySelector('h3')
    pastoralTopH3.textContent = sections[4].subTitle

    // Create pastoral-item for each card
    pastoralGrid.innerHTML = ''
    sections[4].cards.forEach((card) => {
        let pastoralItemHTML = `
            <div class="pastoral-item">
                <h3>${card.title}</h3>
                <p>${card.text}</p>
            </div>`
        pastoralGrid.innerHTML += pastoralItemHTML
    })
    // Assuming sections[5] is available and contains the required data
    // Assuming sections[5] is available and contains the required data
    let roomsForHireSection = document.querySelector('#norman')
    let roomsForHireTitles = roomsForHireSection.querySelector(
        '.rooms-for-hire-titles'
    )
    let roomsForHireColumns = roomsForHireSection.querySelector(
        '.rooms-for-hire-columns'
    )

    // Set title in h2
    let roomsForHireH2 = roomsForHireTitles.querySelector('h2')
    let titleWords = sections[5].title.split(' ')
    if (titleWords.length >= 3) {
        titleWords[2] = `<span>${titleWords[2]}</span>`
    }
    roomsForHireH2.innerHTML = titleWords.join(' ')

    // Create rooms-column for each room
    roomsForHireColumns.innerHTML = ''
    let iframes = [
        '<iframe title="Google Maps Iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10366.792579278452!2d-2.5228291!3d49.4902087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480d72afdfa99b13%3A0xac437f371f8b762d!2sVale%20Church%20Hall!5e0!3m2!1sen!2sgg!4v1698073485608!5m2!1sen!2sgg" width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe title="Google Maps Iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10364.591600633237!2d-2.5359697!3d49.50060095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480d6d5ffa20474d%3A0x9e409d51dddf4e9b!2sGuernsey%20GY3%205SF!5e0!3m2!1sen!2sgg!4v1698741970581!5m2!1sen!2sgg" width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    ]
    sections[5].rooms.forEach((room, index) => {
        let roomsColumnHTML = `
            <div class="rooms-column">
            
            ${iframes[index] || ''}

            <img src="${room.imgUrl}" alt="" />
                <h3>${room.name}</h3>
                <p>${room.roomDescription}</p>
                <ul>`
        room.features.forEach((feature) => {
            roomsColumnHTML += `
                <li>
                    <img src="${feature.imgUrl}" alt="icon" />
                    <p>${feature.title}</p>
                </li>`
        })
        roomsColumnHTML += `
                <a href="../#roomBookings">
                    <button>
                        <img src="../public/images/black-button.svg" alt="Button Icon" />
                        BOOK ROOM NOW
                    </button>
                </a>
                </ul>
            </div>`
        roomsForHireColumns.innerHTML += roomsColumnHTML
    })

    // Assuming sections[6] is available and contains the required data
    let weddingsSection = document.querySelector('#weddings')
    let weddingCardTitles = weddingsSection.querySelector(
        '.wedding-card-titles'
    )
    let weddingCardGrid = weddingsSection.querySelector('.wedding-card-grid')

    // Set title in h2
    let weddingCardH2 = weddingCardTitles.querySelector('h2')
    let weddingTitleWords = sections[6].title.split(' ')
    if (weddingTitleWords.length >= 2) {
        weddingTitleWords[1] = `<span>${weddingTitleWords[1]}</span>`
    }
    weddingCardH2.innerHTML = weddingTitleWords.join(' ')

    // Create wedding-card for each card
    weddingCardGrid.innerHTML = ''
    sections[6].cards.forEach((card) => {
        let weddingCardHTML = `
            <div class="wedding-card">
                <img src="${card.imgUrl}" alt="Church Choir Sheet wedding" />
                <h3>${card.title}</h3>
                <p>${card.text}</p>
                <a href="../#contact">
                    <button>
                        <img src="../public/images/black-button.svg" alt="Button Icon" />
                        BOOK ${card.title.toUpperCase()} NOW
                    </button>
                </a>
            </div>`
        weddingCardGrid.innerHTML += weddingCardHTML
    })

    // Assuming sections[7] is available and contains the required data
    let involvedSection = document.querySelector('.involved-section')
    let involvedWrapper = involvedSection.querySelector('.wrapper-narrow')

    // Set title in h2
    let involvedH2 = involvedWrapper.querySelector('h2')
    let involvedTitleWords = sections[7].title.split(' ')
    if (involvedTitleWords.length >= 2) {
        involvedTitleWords[1] = `<span>${involvedTitleWords[1]}</span>`
    }
    involvedH2.innerHTML = involvedTitleWords.join(' ')

    // Set text in p
    let involvedP = involvedWrapper.querySelector('p')
    involvedP.textContent = sections[7].text
})

// Quote Fetch
async function fetchWhatsOn() {
    const response = await fetch(
        `https://pxvhzoh0.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27whatsOnSection%27%5D+%7B%0A++text%2C%0A++title%2C%0A++whatsOnContent%5B%5D+%7B%0A++++%27imgUrl%27%3A+image.asset-%3Eurl%2C%0A++++title%2C%0A++++text%0A%0A++%7D%0A++++%0A%7D`
    )
    const event = await response.json()
    return event
}

fetchWhatsOn().then((event) => {
    const { result } = event

    const resolvedResult = result[0].whatsOnContent

    const whatsOnGridContainer = document.querySelector('.whats-on-grid')
    const whatsOnTitlesContainer = document.querySelector('.whats-on-titles')

    const titleWords = result[0].title.split(' ')
    const lastWord = titleWords.pop()
    const titleWithGold = [
        ...titleWords,
        `<span class="gold">${lastWord}</span>`,
    ].join(' ')

    const innerTitles = /*html*/ `
         <h2>
            ${titleWithGold}
        </h2>
        <p class="no-cap">
            ${result[0].text}
        </p>
    `

    whatsOnTitlesContainer.innerHTML = innerTitles

    resolvedResult.forEach((result) => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = /*html*/ `

                <img src="${result.imgUrl}" alt="Vale Church Event" />
                <h4>${result.title}</h4>
                <p class="no-cap">${
                    result.text ||
                    'Lorem ipsum dolor amet simum dolor amit relash.'
                }</p>
        `
        whatsOnGridContainer.append(card)
    })
})
