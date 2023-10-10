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
