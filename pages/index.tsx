import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

interface indexProps {}

const transition: { duration: number; ease: number[] } = {
  duration: 1.4,
  ease: [0.6, 0.01, 0.05, 0.9],
}

const navList: { initial: any; animate: any } = {
  initial: {
    x: 0,
  },
  animate: {
    x: 0,
    delay: 1.8,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
}

const navItem: { initial: any; animate: any } = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ...transition },
  },
}

const locomotiveScroll = typeof window !== `undefined` ? require('locomotive-scroll').default : null

const index: React.FC<indexProps> = ({}) => {
  const refScroll = React.useRef(null)
  let scroll: any

  React.useEffect(() => {
    if (!refScroll.current) return
    // @ts-ignore
    scroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    })
  }, [refScroll])

  function updateScroll() {
    scroll.destroy()

    setTimeout(function () {
      scroll = new locomotiveScroll({
        el: refScroll.current,
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      })
    }, 100)
  }

  return (
    <motion.div data-scroll-container ref={refScroll} initial='initial' animate='animate'>
      <Head>
        <title>The Skyline &mdash; Transcending Luxury Living</title>
        <link rel='icon' href='/vercel.svg' />
      </Head>
      <header data-scroll-section className='home-header'>
        <div className='home-header__left'>
          <nav className='navigation'>
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              src='svg/heatrow-logo.svg'
              alt='eternity rise logo'
            />
            <motion.ul variants={navList} className='navigation__list'>
              <motion.li variants={navItem} className='navigation__item'>
                <a onClick={updateScroll} href='#sectionFeatures'>
                  Features
                </a>
              </motion.li>
              <motion.li variants={navItem} className='navigation__item'>
                <a onClick={updateScroll} href='#sectionGallery'>
                  Services
                </a>
              </motion.li>
              <motion.li variants={navItem} className='navigation__item'>
                <a onClick={updateScroll} href='#sectionFeedback'>
                  Feedbacks
                </a>
              </motion.li>
            </motion.ul>
          </nav>
          <div className='home-hero'>
            <motion.h4
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.2, ...transition } }}
              className='hero-h4'>
              exclusively designed 3, 4 & 5 <br />
              bedroom sky mansions
            </motion.h4>
            <motion.h1
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1, transition: { delay: 0.6, ...transition } }}
  className='hero-h1'>
  Skyline
</motion.h1>

<motion.p
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1, transition: { delay: 1, ...transition } }}
  className='hero-subtext'>
  By Heatrow Group of Construction
</motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6, ...transition } }}
              className='home-hero__footer'>
              <img src='svg/facebook-icon.svg' alt='facebook icon' />
              <img src='svg/twitter-icon.svg' alt='twitter icon' />
              <img src='svg/linkedIn-icon.svg' alt='linkedIn icon' />
              <img src='svg/instagram-icon.svg' alt='instagram icon' />
            </motion.div>
          </div>
        </div>
        <div className='home-header__right'>
          <motion.img
            initial={{ opacity: 0, scale: 1.4, x: 400 }}
            animate={{ opacity: 1, scale: 1, x: 0, transition: { delay: 1.1, ...transition } }}
            src='webp/header-bg.webp'
            alt='eternity rise residence'
          />
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 1.8, ...transition } }}
            className='hero-unit'>
            <h2 className='hero-unit__h2'>188</h2>
            <p className='hero-unit__p'>EXCLUSIVE RESIDENCES</p>
          </motion.div>
        </div>
      </header>
      <main className='main'>
        <section data-scroll-section id='sectionFeatures' className='section-features'>
          <div className='feature-container'>
            <div className='feature'>
              <img src='svg/faces-icon.svg' alt='face icon' />
              <h2 className='heading-2'>
                Advanced <br />
                Security
              </h2>
              <p className='paragraph'>
                State-of-the-art biometric access control with facial recognition and fingerprint scanning. Our AI-powered surveillance system with thermal imaging provides comprehensive 24/7 protection, complemented by an elite security team.
              </p>
            </div>
            <div className='feature'>
              <img src='svg/eye-icon.svg' alt='eye icon' />
              <h2 className='heading-2'>
                Panoramic <br />
                Views
              </h2>
              <p className='paragraph'>
                Double-height floor-to-ceiling windows with smart-tinting glass offer unobstructed 270-degree views of the Arabian Sea and city skyline. Each residence features a private sky garden with infinity edge design.
              </p>
            </div>
            <div className='feature'>
              <img src='svg/spa-icon.svg' alt='spa icon' />
              <h2 className='heading-2'>
                Wellness <br />
                Sanctuary
              </h2>
              <p className='paragraph'>
                Private spa suites with hydrotherapy pools, meditation gardens, and a luxury wellness center. Temperature-controlled infinity pool, aromatherapy steam rooms, and personalized wellness programs.
              </p>
            </div>
            <div className='feature'>
              <img src='svg/smart-icon.svg' alt='smart icon' />
              <h2 className='heading-2'>
                Eco-Luxury <br />
                Living
              </h2>
              <p className='paragraph'>
                LEED Platinum certified building with solar-powered common areas. Smart energy management with AI-driven optimization. Vertical gardens and rainwater harvesting with grey water recycling system.
              </p>
            </div>
            <div className='feature'>
              <img src='svg/wifi-icon.svg' alt='wifi icon' />
              <h2 className='heading-2'>
                Digital <br />
                Excellence
              </h2>
              <p className='paragraph'>
                10 Gbps fiber-optic internet with mesh WiFi 6E coverage. Smart home automation hub with gesture control. Built-in video conferencing rooms and private 5G network coverage.
              </p>
            </div>
            <div className='feature'>
              <img src='svg/concierge-icon.svg' alt='concierge icon' />
              <h2 className='heading-2'>
                Lifestyle <br />
                Concierge
              </h2>
              <p className='paragraph'>
                24/7 white-glove concierge service with personal lifestyle managers. Private chef services, event planning, and luxury travel arrangements. Dedicated shopping assistance and art curation services.
              </p>
            </div>
            <div className='feature'>
              <img src='svg/helipad-icon.svg' alt='helipad icon' />
              <h2 className='heading-2'>
                Sky <br />
                Access
              </h2>
              <p className='paragraph'>
                Private helipad with helicopter transfer services. Rooftop observatory lounge with astronomical telescope. Climate-controlled sky bridges connecting amenity towers.
              </p>
            </div>
            <div className='feature'>
              <img src='svg/anpr-icon.svg' alt='car icon' />
              <h2 className='heading-2'>
                Automated <br />
                Valet
              </h2>
              <p className='paragraph'>
                Robotic parking system with automated vehicle retrieval. Dedicated supercar parking zones with climate control. Premium electric vehicle charging stations and 24/7 valet service with car care facilities.
              </p>
            </div>
            <div className='feature'>
              <img src='svg/entertainment-icon.svg' alt='entertainment icon' />
              <h2 className='heading-2'>
                Private <br />
                Entertainment
              </h2>
              <p className='paragraph'>
                IMAX private theatre with 4K projection. Professional recording studio and music room. Virtual reality gaming suite and professional golf simulator with international courses.
              </p>
            </div>
          </div>
        </section>
        <section data-scroll-section id='sectionGallery' className='section-gallery'>
          <div className='gallery-container'>
            <h2 className='heading-2'>
              Elevate Your <br /> Legacy
            </h2>
            <div className='gallery'>
              <div className='gallery__left'>
                <div className='gallery__left--top'>
                  <img src='webp/villa-bg.webp' alt='penthouse image' />
                  <h4 className='gallery-caption'>8 crown penthouses</h4>
                </div>
                <div className='gallery__left--bottom'>
                  <h3 className='gallery-h3'>
                    Luxury <br /> Beyond Measure
                  </h3>
                  <p className='gallery-p'>choose from 5 signature layouts</p>
                </div>
              </div>
              <div className='gallery__right'>
                <div className='gallery__right--top'>
                  <div className='gallery__right--top-left'>
                    <img src='webp/oak-bg.webp' alt='eternity deluxe image' />
                    <h4 className='gallery-caption'>96 celestial suites</h4>
                  </div>
                  <div className='gallery__right--top-right'>
                    <img src='webp/oakville-bg.webp' alt='sky mansion image' />
                    <h4 className='gallery-caption'>24 sky mansions</h4>
                  </div>
                </div>
                <div className='gallery__right--bottom'>
                  <img src='webp/maple.webp' alt='eternity premier image' />
                  <h4 className='gallery-caption'>60 grand estates</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-scroll-section id='sectionFeedback' className='section-feedback'>
          <div className='feedback-container'>
            <div className='feedback-left'>
              <h2 className='heading-2'>
                Resident <br /> Testimonials
              </h2>
            </div>
            <div className='feedback-right'>
              <div className='feedback-box'>
                <img src='svg/quoute-icon.svg' alt='quote icon' />
                <p className='paragraph'>
                  The views are absolutely magnificent. Starting each day watching the sunrise from our sky garden while enjoying breakfast has become our cherished ritual. The smart home integration is beyond anything we've experienced.
                </p>
                <h5 className='heading-5'>Mr. & Mrs. Rajesh Singhania</h5>
              </div>
              <div className='feedback-box'>
                <img src='svg/quoute-icon.svg' alt='quote icon' />
                <p className='paragraph'>
                  Moving to The Eternity Rise was a vision realized. The lifestyle concierge service anticipates our needs before we even express them. It truly redefines luxury living in every aspect.
                </p>
                <h5 className='heading-5'>Dr. Arun Mehra</h5>
              </div>
              <div className='feedback-box'>
                <img src='svg/quoute-icon.svg' alt='quote icon' />
                <p className='paragraph'>
                  As a tech enthusiast, the digital infrastructure here is unmatched. The private 5G network and smart home features create a seamless living experience. The entertainment options are endless.
                </p>
                <h5 className='heading-5'>Priya & Karan Ambani</h5>
              </div>
              <div className='feedback-box'>
                <img src='svg/quoute-icon.svg' alt='quote icon' />
                <p className='paragraph'>
                  The attention to detail in the wellness facilities is exceptional. From the hydrotherapy suite to the meditation gardens, every element has been thoughtfully curated for ultimate rejuvenation.
                </p>
                <h5 className='heading-5'>Mrs. Shobha Birla</h5>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer data-scroll-section className='footer'>
        <div className='footer__container'>
          <div className='footer__top'>
            <h2 className='heading-2 heading-2__sub'>Schedule a Private Viewing</h2>
            <form className='contact-form'>
              <div className='contact-form__left'>
                <input type='text' placeholder='enter your name' />
                <input type='email' placeholder='enter your email' />
                <input type='tel' placeholder='enter your mobile number' />
              </div>
              <div className='contact-form__right'>
                <textarea placeholder='write your message...'></textarea>
                <button type='submit'>REQUEST APPOINTMENT</button>
              </div>
            </form>
          </div>
          <div className='footer__bottom'>
            <div className='footer__bottom--box'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='102'
                height='35.674'
                viewBox='0 0 152 35.674'>
                <g transform='translate(-66 -71.663)'>
                  <g transform='translate(5929.179 -1324.144)'>
                    <path d='M-5839.528,1412.126l-23.651,19.29v-35.609h23.651Z' fill='#FABE7D' />
                    <path
                      d='M-5789.339,1415.3l23.651-19.29v35.609h-23.651Z'
                      transform='translate(-50.491 -0.14)'
                      fill='#FABE7D'
                    />
                  </g>
                  <text
                    transform='translate(132 99)'
                    fill='#FABE7D'
                    fontSize='24'
                    fontFamily='HelveticaNeue-Medium, Helvetica Neue'
                    fontWeight='500'
                    letterSpacing='-0.053em'>
                    <tspan x='0' y='0'>
                      Skyline
                    </tspan>
                  </text>
                </g>
              </svg>
              <p className='footer-p'>
                +91 000-000-0000
                <br />
                <br />
                +91 111-222-3333   
              </p>
            </div>
            <div className='footer__bottom--box'>
              <p className='footer-p'>
                Road 45, Skyline Tower, <br />
                Banjara Hills, Hyderabad
              </p>
            </div>
          </div>
          <p className='footer-copyright'>© Copyright 2025 Skyline Residences</p>
        </div>
      </footer>
    </motion.div>
  )
}

export default index