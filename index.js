gsap.registerPlugin(ScrollTrigger)
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

// Studio

// Quote Fetch
async function fetchQuote() {
	const response = await fetch(
		`https://pxvhzoh0.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22quote%22%5D`
	)
	const quote = await response.json()
	return quote
}

fetchQuote().then((quote) => {
	const { result } = quote

	const quoteText = document.querySelector('.gray-quote h2')
	quoteText.textContent = result[0].Quote

	const words = result[0].emphasisedWords

	words.forEach((word) => {
		var pattern = new RegExp('(' + word + ')', 'ig')
		var replaceWith = '<span>$1</span>'

		$('.gray-quote h2').each(function () {
			$(this).html($(this).html().replace(pattern, replaceWith))
		})
	})
})

// Featured

async function fetchFeatured() {
	const response = await fetch(
		`https://pxvhzoh0.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22featured%22%5D+%7B%0A++text%2C%0A++title%2C%0A++%22imgUrl%22%3A+image.asset-%3Eurl%2C%0A++++emphasisedWord%0A%7D`
	)
	const featuredItems = await response.json()
	return featuredItems
}

fetchFeatured().then((featuredItems) => {
	const { result } = featuredItems

	const columnSection = document.querySelector('.column-section .wrapper')

	columnSection.innerHTML = ''

	result.forEach((result) => {
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
                        <a href="facilities#search-by-genre">
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
                                MORE ON SERVICES
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
				clipPath: 'polygon(0 0, 100% 0, 0 0, 0% 100%)'
			})
			gsap.to(text, {
				scrollTrigger: {
					trigger: text,
					start: 'top 90%',
					toggleActions: 'play play play reverse'
				},
				clipPath: 'polygon(0 0, 115% 0, 100% 100%, -15% 100%)',
				ease: 'power1.inOut'
			})
		})
	}
})

// Prayers
async function fetchPrayers() {
	const response = await fetch(
		`https://pxvhzoh0.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22prayers%22%5D+%7B%0A++text%2C%0A++++title%0A++%0A%7D`
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
			clipPath: 'polygon(0 0, 100% 0, 0 0, 0% 100%)'
		})
		gsap.set('h1', {
			clipPath: 'polygon(2% 100%, 100% 100%, 100% 100%, 0 100%)'
		})

		gsap.to('h1', {
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, -10% 100%)',
			ease: 'power1.inOut',
			onComplete: () => {
				gsap.to('h1 span', {
					delay: 0.4,
					clipPath: 'polygon(0 0, 100% 0, 100% 100%, -10% 100%)',
					ease: 'power1.inOut'
				})
			}
		})
	}
})

// Email handler for contact form

const contactForm = document.querySelector('.contact-section form')
const contactFormSelect = document.querySelector('.contact-section form select')
const contactFormSelectOptions = document.querySelectorAll('.contact-section form select option')

const formSubmitUrlPrefix = 'https://formsubmit.co/'

contactFormSelect.addEventListener('change', (e) => {
	let emailSuffix
	e.target.value === 'Barbara Mint'
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
			option.id === 'barbaraMint'
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

			contactForm.setAttribute('action', `${formSubmitUrlPrefix}${emailSuffix}`)

			console.log('Successfully changed email value')
		}
	})
}

window.onload = (event) => {
	changeSelectMenuOnContactButtonClick()
}
