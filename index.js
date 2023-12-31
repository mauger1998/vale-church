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

menuIcon.addEventListener('click', () => {
    dropdown.classList.add('active')
    html.classList.add = 'overflow'
})

crossIcon.addEventListener('click', () => {
    dropdown.classList.remove('active')
    html.classList.remove = 'overflow'
})

dropdownLinks.forEach((link) => {
    link.addEventListener('click', () => {
        dropdown.classList.remove('active')
        html.classList.remove = 'overflow'
    })
})

// Fetch Sections From Sanity
async function fetchSections() {
    const response = await fetch(
        `https://pxvhzoh0.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27home%27%5D+%7B%0A++sections%5B%5D%7B%0A++++...%2C%0A++++%0A++++++%0A++++++%27imgUrl%27%3A+image.asset-%3Eurl%0A++++%0A++%7D%0A++++%7D%0A`
    )
    const sectionsData = await response.json()
    const sections = sectionsData.result[0].sections
    return sections
}

fetchSections().then((sections) => {
    const bevSection = document.querySelector('#bev .wrapper')
    bevSection.innerHTML = ''
    let words = sections[0].mainTitle.split(' ')
    words[words.length - 1] = `<span>${words[words.length - 1]}</span>`
    let mainTitleWithSpan = words.join(' ')
    let subTitleWords = sections[0].subTitle.split(' ')
    let wrapIndex = subTitleWords.length >= 5 ? 4 : 2
    subTitleWords[wrapIndex] = `<span>${subTitleWords[wrapIndex]}</span>`
    let subTitleSpanWrapped = subTitleWords.join(' ')
    let faithSection = document.querySelector('.faith-quote .wrapper')
    faithSection.innerHTML = ''

    const sectionHTML = /*html*/ `
            <div class="welcome-top">
                <h2>${mainTitleWithSpan}</h2>            
            </div>
            <div class="welcome-bottom">
                <img
                    class="pencil"
                    aria-hidden="true"
                    src="public/images/pencil1.webp"
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

    bevSection.innerHTML += sectionHTML
    let faithSectionBackground = document.querySelector('.faith-quote')
    faithSectionBackground.style.backgroundImage = `url(${sections[1].imgUrl})`

    let faithTitleWords = sections[1].title.split(' ')
    let faithWrapIndex = faithTitleWords.length >= 5 ? 2 : 2
    faithTitleWords[
        faithWrapIndex
    ] = `<span>${faithTitleWords[faithWrapIndex]}</span>`
    let faithTitleSpanWrapped = faithTitleWords.join(' ')

    const faithSectionHTML = /*html*/ `
    <h2>${faithTitleSpanWrapped}</h2>
    <a href="activities/">
        <button>
            <img src="./public/images/button-svg.svg" alt="Button Image" />
            See All Church Activities and Facilities
        </button>
    </a>
`

    faithSection.innerHTML += faithSectionHTML

    let quoteSection = document.querySelector('.gray-quote .wrapper')
    quoteSection.innerHTML = ''

    let quoteTitleWords = sections[2].quote.split(' ')
    let quoteWrapIndex1 = quoteTitleWords.length >= 5 ? 4 : 2
    quoteTitleWords[
        quoteWrapIndex1
    ] = `<span>${quoteTitleWords[quoteWrapIndex1]}</span>`
    if (quoteTitleWords.length > 7) {
        let quoteWrapIndex2 = 7
        quoteTitleWords[
            quoteWrapIndex2
        ] = `<span>${quoteTitleWords[quoteWrapIndex2]}</span>`
    }
    let quoteTitleSpanWrapped = quoteTitleWords.join(' ')

    const quoteSectionHTML = /*html*/ `
        <p class="tag">${sections[2].tag}</p>
        <h2>${quoteTitleSpanWrapped}</h2>
        <a href="history-and-magazine/#magazine">
            <button>
                <img src="./public/images/button-svg.svg" alt="Button Image" />
                See Church Magazine
            </button>
        </a>
    `

    quoteSection.innerHTML += quoteSectionHTML

    let worshipSection = document.querySelector('.worship-section .wrapper')
    worshipSection.innerHTML = ''

    let worshipTitleWords = sections[3].title.split(' ')
    if (worshipTitleWords.length >= 2) {
        worshipTitleWords[1] = `<span>${worshipTitleWords[1]}</span>`
    }
    if (worshipTitleWords.length >= 10) {
        worshipTitleWords[9] = `<span>${worshipTitleWords[9]}</span>`
    }
    let worshipTitleSpanWrapped = worshipTitleWords.join(' ')
    const worshipSectionHTML = /*html*/ `
    <img class="pencil" aria-hidden="true" src="public/images/pencil2.webp" alt="Background Image" />
    <div class="worship-left">
        <img src="${sections[3].imgUrl}" alt="Vale Church Worship Service" />
    </div>
    <div class="worship-right">
        <h2>${worshipTitleSpanWrapped}</h2>
        <div class="worship-content">
            <div class="worship-content-images">
                <img src="public/images/worship1.webp" alt="Worship at Vale Church" />
                <img src="public/images/worship2.webp" alt="Worship at Vale Church" />
                <img src="public/images/worship3.webp" alt="Worship at Vale Church" />
            </div>
            <div class="worship-text">
                <p>${sections[3].text}</p>
            </div>
        </div>
    </div>
`

    worshipSection.innerHTML += worshipSectionHTML

    let servicesSection = document.querySelector('.services-section .wrapper')
    servicesSection.innerHTML = ''

    let servicesTitleWords = sections[4].title.split(' ')
    if (servicesTitleWords.length >= 6) {
        servicesTitleWords[5] = `<span>${servicesTitleWords[5]}</span>`
    }
    let servicesTitleSpanWrapped = servicesTitleWords.join(' ')

    let sundayServicesHTML = sections[4].sundayServices
        .map((sundayService) => {
            return /*html*/ `
        <div class="services-list-item">
            <img src="public/images/gold-church.svg" alt="${sundayService.title}" />
            <div class="service-list-item-text">
                <p class="no-cap">${sundayService.time} | ${sundayService.title}</p>
                <p class="no-cap">${sundayService.description}</p>
            </div>
        </div>`
        })
        .join('')

    let weekdayServicesHTML = sections[4].weekdayServices
        .map((weekdayService) => {
            return /*html*/ `
        <div class="services-list-item">
            <img src="public/images/gold-church.svg" alt="${weekdayService.title}" />
            <div class="service-list-item-text">
                <p class="no-cap">${weekdayService.time} | ${weekdayService.title}</p>
                <p class="no-cap">${weekdayService.description}</p>
            </div>
        </div>`
        })
        .join('')

    const servicesSectionHTML = /*html*/ `
    <div class="services-row">
        <h3>${servicesTitleSpanWrapped}</h3>
        <div class="services-row-list">
            <div class="sunday-list">
                <h3>Sunday services</h3>
                ${sundayServicesHTML}
            </div>
            <div class="weekday-list">
                <h3>Weekday services</h3>
                ${weekdayServicesHTML}
            </div>
            <a href="#contact">
                <button>
                    <img src="public/images/button-svg.svg" alt="Contact Us" />
                    CONTACT US
                </button>
            </a>
        </div>
    </div>
    <div class="services-row" style="background-image: url(${sections[4].imgUrl})"></div>
    `

    servicesSection.innerHTML += servicesSectionHTML

    let involvedSection = document.querySelector('.involved-section .wrapper')

    let involvedTitleWords = sections[5].title.split(' ')
    if (involvedTitleWords.length >= 2) {
        involvedTitleWords[1] = `<span>${involvedTitleWords[1]}</span>`
    }
    let involvedTitleSpanWrapped = involvedTitleWords.join(' ')

    involvedSection.querySelector('h2').innerHTML = involvedTitleSpanWrapped
    involvedSection.querySelector('p.no-cap').textContent = sections[5].text
})

// Featured

async function fetchFeatured() {
    const response = await fetch(
        `https://pxvhzoh0.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22featured%22%5D+%7C+order%28orderRank+asc%29+%7B%0A++text%2C%0A++title%2C%0A++%22imgUrl%22%3A+image.asset-%3Eurl%2C%0A++++emphasisedWord%2C%0A++++orderRank%2C%0A%7D`
    )
    const featuredItems = await response.json()
    return featuredItems

    // Rev Bev Section
}

fetchFeatured().then((featuredItems) => {
    const { result } = featuredItems

    const columnSection = document.querySelector('.column-section .wrapper')

    columnSection.innerHTML = ''

    result.forEach((result, index) => {
        const featuredColumn = document.createElement('div')
        featuredColumn.classList.add('featured-column')

        featuredColumn.innerHTML = /*html*/ `
                    <div class="column-left">
                        <img
                            src="${result.imgUrl}"
                            alt="Rev and Pastor" />
                    </div>
                    <div class="column-right">
                        <h3>
                            ${result.title}
                        </h3>
                        <p>
                            ${result.text}
                        </p>
                        <a href="activities#search-service">
                            <button>
                                <svg
                                    width="32"
                                    height="33"
                                    viewBox="0 0 32 33"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.5276 10.6956C15.6805 10.3873 15.757 10.2331 15.8591 10.1828C15.9481 10.1389 16.0507 10.1389 16.1397 10.1828C16.2418 10.2331 16.3183 10.3873 16.4712 10.6956L17.4092 12.5864C17.4753 12.7196 17.5083 12.7861 17.5575 12.8304C17.6009 12.8696 17.653 12.8962 17.7088 12.9079C17.7721 12.9211 17.8417 12.907 17.9808 12.8789L19.957 12.4792C20.2792 12.414 20.4403 12.3814 20.5411 12.4349C20.6288 12.4814 20.6927 12.5667 20.7159 12.6679C20.7426 12.7841 20.6769 12.9437 20.5453 13.263L19.7388 15.2212C19.682 15.359 19.6537 15.4279 19.6517 15.4964C19.6499 15.5569 19.6628 15.6168 19.6891 15.6705C19.7188 15.7312 19.7725 15.7803 19.88 15.8783L21.4063 17.2707C21.6551 17.4978 21.7795 17.6113 21.803 17.7282C21.8235 17.8302 21.8006 17.9364 21.7406 18.0188C21.6717 18.1134 21.5132 18.1583 21.1963 18.2482L19.2525 18.799C19.1157 18.8378 19.0473 18.8573 18.9957 18.8983C18.9501 18.9345 18.9141 18.9826 18.8909 19.0379C18.8647 19.1005 18.8621 19.1757 18.857 19.326L18.784 21.4621C18.7721 21.8104 18.7662 21.9845 18.6947 22.0769C18.6325 22.1575 18.5401 22.2048 18.442 22.2063C18.3294 22.208 18.1976 22.1043 17.9339 21.8971L16.3166 20.6259C16.2027 20.5364 16.1458 20.4917 16.0834 20.4744C16.0283 20.4592 15.9705 20.4592 15.9154 20.4744C15.853 20.4917 15.7961 20.5364 15.6822 20.6259L14.0649 21.8971C13.8012 22.1043 13.6694 22.208 13.5568 22.2063C13.4588 22.2048 13.3663 22.1575 13.3041 22.0769C13.2326 21.9845 13.2267 21.8104 13.2148 21.4621L13.1418 19.326C13.1367 19.1757 13.1341 19.1005 13.1079 19.0379C13.0848 18.9826 13.0487 18.9345 13.0031 18.8983C12.9515 18.8573 12.8831 18.8378 12.7463 18.799L10.8025 18.2482C10.4856 18.1583 10.3271 18.1134 10.2582 18.0188C10.1982 17.9364 10.1754 17.8302 10.1958 17.7282C10.2192 17.6113 10.3437 17.4978 10.5925 17.2707L12.1188 15.8783C12.2263 15.7803 12.28 15.7312 12.3097 15.6705C12.336 15.6168 12.3488 15.5569 12.3471 15.4964C12.3452 15.4279 12.3168 15.359 12.26 15.2212L11.4535 13.263C11.322 12.9437 11.2562 12.7841 11.2829 12.6679C11.3061 12.5667 11.37 12.4814 11.4577 12.4349C11.5585 12.3814 11.7196 12.414 12.0418 12.4792L14.018 12.8789C14.1571 12.907 14.2267 12.9211 14.29 12.9079C14.3458 12.8962 14.3979 12.8696 14.4414 12.8304C14.4905 12.7861 14.5235 12.7196 14.5896 12.5864L15.5276 10.6956Z"
                                        stroke="black"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M1 1.47363H31V6.97363H32V1.47363V0.473633H31H1H0V1.47363V31.4736V32.4736H1H31H32V31.4736V25.9736H31V31.4736H1V1.47363Z"
                                        fill="black" />
                                </svg>
                                LEARN MORE
                            </button>
                        </a>
                    </div>
        `
        const word = result.emphasisedWord

        var pattern = new RegExp('(' + word + ')', 'ig')
        var replaceWith = '<span>$1</span>'

        columnSection.appendChild(featuredColumn)
        $('.column-right h3').each(function () {
            $(this).html($(this).html().replace(pattern, replaceWith))
        })
    })
    ScrollTrigger.refresh()

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
    }
})

// Prayers
async function fetchPrayers() {
    const response = await fetch(
        `https://pxvhzoh0.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22prayers%22%5D+%7C+order%28orderRank+asc%29%7B%0A++text%2C%0A++++title%2C%0A++++orderRank%2C%0A++%0A%7D`
    )
    const quote = await response.json()
    return quote
}

fetchPrayers().then((quote) => {
    const { result } = quote
    const prayersContainer = document.querySelector('.prayers-content')
    prayersContainer.innerHTML = ''

    result.forEach((result) => {
        const prayer = document.createElement('div')
        prayer.classList.add('prayer')

        prayer.innerHTML = /*html*/ `
                        <img
                            src="public/quote-open-editor-svgrepo-com.svg"
                            alt="Quotes" />
                        <h2>${result.title}</h2>
                        <p>
                            ${result.text}
                        </p>`
        prayersContainer.appendChild(prayer)
    })
})

// GSAP

window.addEventListener('DOMContentLoaded', () => {
    if (getBrowserName() !== 'Safari') {
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

// Email handler for contact form

const contactForm = document.querySelector('.contact-section form')
const contactFormSelect = document.querySelector(
    '.contact-section form select#people'
)
const contactFormSelectOptions = document.querySelectorAll(
    '.contact-section form select#people option'
)

const formSubmitUrlPrefix = 'https://formsubmit.co/'

contactFormSelect.addEventListener('change', (e) => {
    let emailSuffix
    e.target.value === 'Barbara Minta'
        ? (emailSuffix = 'safeguarding@valechurch.gg')
        : e.target.value == 'Bev Hervé'
        ? (emailSuffix = 'beverley.herve@deanery.gg')
        : e.target.value === 'Andrew Warren'
        ? (emailSuffix = 'organist@valechurch.gg')
        : e.target.value === 'Nicky David'
        ? (emailSuffix = 'bellringers@valechurch.gg')
        : e.target.value === 'Steve De Carteret'
        ? (emailSuffix = 'treasurer@valechurch.gg')
        : e.target.value === 'Jane Goddard'
        ? (emailSuffix = 'treasureseekers@valechurch.gg')
        : e.target.value === 'Beverley Linnecor'
        ? (emailSuffix = 'pastoral@valechurch.gg')
        : e.target.value === 'Mike Bubb'
        ? (emailSuffix = 'rectorswarden@valechurch.gg')
        : e.target.value === 'Room Bookings'
        ? (emailSuffix = 'bookings@valechurch.gg')
        : e.target.value === 'Jeremy Smithies'
        ? (emailSuffix = 'peopleswarden@valechurch.gg')
        : (emailSuffix = 'beverley.herve@deanery.gg')

    contactForm.setAttribute('action', `${formSubmitUrlPrefix}${emailSuffix}`)
})

// Change select menu depending on which contact button is clicked

function changeSelectMenuOnContactButtonClick() {
    let urlHash = window.location.href.split('#')[1]
    contactFormSelectOptions.forEach((option, index) => {
        if (urlHash === option.id) {
            contactFormSelect.selectedIndex = index
            contactForm.scrollIntoView()

            let emailSuffix
            option.id === 'barbaraMinta'
                ? (emailSuffix = 'safeguarding@valechurch.gg')
                : option.id == 'bevHerve'
                ? (emailSuffix = 'beverley.herve@deanery.gg')
                : option.id === 'andrewWarren'
                ? (emailSuffix = 'organist@valechurch.gg')
                : option.id === 'nickyDavid'
                ? (emailSuffix = 'bellringers@valechurch.gg')
                : option.id === 'steveDeCarteret'
                ? (emailSuffix = 'treasurer@valechurch.gg')
                : option.id === 'janeGoddard'
                ? (emailSuffix = 'treasureseekers@valechurch.gg')
                : option.id === 'bevLinnecor'
                ? (emailSuffix = 'pastoral@valechurch.gg')
                : option.id === 'mikeBubb'
                ? (emailSuffix = 'rectorswarden@valechurch.gg')
                : option.id === 'jeremySmithies'
                ? (emailSuffix = 'bellringers@valechurch.gg')
                : option.id === 'roomBookings'
                ? (emailSuffix = 'bookings@valechurch.gg')
                : (emailSuffix = 'peopleswarden@valechurch.gg')

            contactForm.setAttribute(
                'action',
                `${formSubmitUrlPrefix}${emailSuffix}`
            )

            console.log('Successfully changed email value')
        }
    })
}

window.onload = (event) => {
    changeSelectMenuOnContactButtonClick()
}

// Get the original select field and the new select field
const originalSelect = document.querySelector(
    '.contact-section form select#people'
)
const roomBookingsFieldset = document.querySelector('#rooms-bookings-fieldset')
const roomBookingsSelect = document.querySelector(
    '#rooms-bookings-fieldset select'
)
roomBookingsSelect.disabled = true

// Add an event listener to the original select field
originalSelect.addEventListener('change', (e) => {
    // If the selected value is "Room Bookings", show the new select field
    if (e.target.value === 'Room Bookings') {
        roomBookingsFieldset.classList.add('appear')
        roomBookingsSelect.disabled = false
    } else {
        // Otherwise, hide the new select field
        roomBookingsFieldset.classList.remove('appear')

        roomBookingsSelect.disabled = true
    }
})
