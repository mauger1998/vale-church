gsap.registerPlugin(ScrollTrigger)

backToTopButton.addEventListener('click', () => {
    console.log('clicked')
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})

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

// Sections Fetch
async function fetchSections() {
    const response = await fetch(
        `https://pxvhzoh0.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27history%27%5D+%7B%0A++sections%5B%5D%7B%0A++++...%2C%0A++++%27imgUrl%27%3A+image.asset-%3Eurl%2C%0A++++%0A++++cards%5B%5D+%7B%0A++++%22imgUrl%22%3A+image.asset-%3Eurl%2C%0A++++...%2C%0A++++%0A++++%7D%0A++++%0A++%7D%0A++++%7D%0A`
    )
    const sectionsData = await response.json()
    const sections = sectionsData.result[0].sections
    return sections
}

fetchSections().then((sections) => {
    // Assuming sections[0] is available and contains the required data
    let historySection = document.querySelector('.history-section')
    let historyLeft = historySection.querySelector('.history-left')
    let historyRight = historySection.querySelector('.history-right')

    // Set title in h2
    let historyH2 = historyLeft.querySelector('h2')
    let historyTitleWords = sections[0].title.split(' ')
    if (historyTitleWords.length >= 4) {
        historyTitleWords[3] = `<span>${historyTitleWords[3]}</span>`
    }
    historyH2.innerHTML = historyTitleWords.join(' ')

    // Set text in p
    let historyP = historyLeft.querySelector('.history-text p')
    historyP.textContent = sections[0].text

    // Set image URL
    let historyImg = historyRight.querySelector('img')
    historyImg.src = sections[0].imgUrl

    // Assuming sections[1] is available and contains the required data
    let churchHistorySection = document.querySelector(
        '.history-of-the-church-section'
    )
    let churchHistoryContent = churchHistorySection.querySelector(
        '.history-of-the-church-content'
    )

    // Set title in h3
    let churchHistoryH3 = churchHistoryContent.querySelector('h3')
    churchHistoryH3.textContent = sections[1].title

    // Set text in p tags
    let churchHistoryPs = churchHistoryContent.querySelectorAll('p')
    let textBlocks = sections[1].text.split('\n') // Assuming the text is separated by line breaks
    textBlocks = textBlocks.filter((textBlock) => textBlock.trim() !== '') // Filter out empty text blocks
    textBlocks.forEach((textBlock, index) => {
        if (churchHistoryPs[index]) {
            churchHistoryPs[index].textContent = textBlock
        }
    })

    // Set image URLs
    let churchHistoryImgs = churchHistorySection.querySelectorAll('img')
    churchHistoryImgs.forEach((img, index) => {
        img.src = sections[1].imgUrl // Assuming all images use the same URL
    })

    // Assuming sections[2] is available and contains the required data
    let donateSection = document.querySelector('.how-to-donate-section')
    let donateGrid = donateSection.querySelector('.how-to-donate-grid')

    // Set title in h2
    let donateH2 = donateSection.querySelector('h2')
    let titleWords = sections[2].mainTitle.split(' ')
    if (titleWords.length >= 7) {
        titleWords[6] = `<span>${titleWords[6]}</span>`
    }
    donateH2.innerHTML = titleWords.join(' ')

    // Clear existing cards
    while (donateGrid.firstChild) {
        donateGrid.removeChild(donateGrid.firstChild)
    }

    // Array of static image paths
    let iconUrls = [
        '../public/images/money-square-21.svg',
        '../public/images/paypal-1.svg',
        '../public/images/hand-contactless-1.svg',
    ]

    // Array of button texts
    let buttonTexts = ['', 'DONATE ONLINE NOW', 'CONTACT STEVE NOW']

    // Create a how-to-donate-card for each card
    sections[2].cards.forEach((card, index) => {
        let newCard = document.createElement('div')
        newCard.className = 'how-to-donate-card'

        let newImg = document.createElement('img')
        newImg.src = iconUrls[index % iconUrls.length] // Use the static image path
        newImg.alt = 'Icon'
        newCard.appendChild(newImg)

        let newH3 = document.createElement('h3')
        newH3.textContent = card.title
        newCard.appendChild(newH3)

        let newP = document.createElement('p')
        newP.textContent = card.text
        newP.innerHTML = card.text // Use innerHTML if the text contains HTML tags
        newCard.appendChild(newP)

        // Add the button for the 2nd and 3rd cards
        if (index > 0) {
            let newButton = document.createElement('button')
            newButton.style.color = 'black'
            newButton.style.marginBlockStart = '2rem'

            let buttonImg = document.createElement('img')
            buttonImg.src = '../public/images/black-button.svg'
            buttonImg.alt = 'Button Icon'
            newButton.appendChild(buttonImg)

            newButton.appendChild(document.createTextNode(buttonTexts[index])) // Use the static button text

            let newLink = document.createElement('a')
            newLink.href = index === 1 ? '#donate-now' : '../#steveDeCarteret'
            newLink.appendChild(newButton)

            newCard.appendChild(newLink)
        }

        donateGrid.appendChild(newCard)
    })
})
