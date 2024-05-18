import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpLeft, X } from 'lucide-react'
import { REVOLTS } from '@/data/revolts'
import { cn } from '@/utils/cn'
import MapCard from '@/components/MapCard'
import RevoltCard from '@/components/RevoltCard'
import TableOfContents from '@/components/TableOfContents'
import Summary from '@/components/Summary'
import Gomburza from '@/components/Gomburza'
import About from '@/components/About'
import References from '@/components/References'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const Blog = () => {
  const [showMap, setShowMap] = useState(true)
  const [activeSection, setActiveSection] = useState('intro')
  const [isMenuOpen, setMenuOpen] = useState(false)
  const sectionsRef = useRef([])

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        scrub: 1,
        start: 'top',
        end: 'bottom',
        onEnter: () => setActiveSection(section.id),
        onEnterBack: () => setActiveSection(section.id),
      })
    })
  }, [])

  return (
    <main className="relative overflow-x-hidden">
      <div className="relative mx-auto flex w-screen justify-center bg-grid-black/[0.035]">
        <div className="grid w-screen max-w-screen-2xl grid-cols-12 gap-8 p-2">
          <div className="top-20 z-50 hidden w-60 items-start lg:fixed lg:flex">
            <TableOfContents active={activeSection} />
          </div>
          <div className="fixed -top-2 left-1 z-30 col-span-2 block w-full bg-white p-2 lg:relative lg:bg-white/0">
            <button
              className="ms-2 mt-4 overflow-hidden rounded-lg border bg-slate-100 p-2 md:hidden"
              onClick={() => handleToggleMenu()}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {!isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                )}
              </svg>
            </button>

            {isMenuOpen === true && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-x-0 inset-y-10 z-10 ms-1 mt-4 w-full gap-4 py-4 md:hidden"
              >
                <TableOfContents
                  active={activeSection}
                  onClick={() => handleToggleMenu()}
                />
              </motion.div>
            )}
          </div>

          <div className="z-10 col-span-12 p-8 lg:col-span-6">
            {showMap === true ? (
              <div
                className={cn(
                  'relative z-50 col-span-12 row-span-2 mt-12 lg:fixed lg:inset-y-0 lg:right-10 lg:top-12 lg:col-span-4 lg:mt-0 lg:block lg:h-screen lg:w-96 xl:right-20 2xl:right-44'
                )}
                id="map"
              >
                <button
                  onClick={() => setShowMap(false)}
                  className="absolute right-2 top-2 z-50 rounded-lg bg-white lg:hidden"
                >
                  <X />
                </button>
                <MapCard items={REVOLTS} />
              </div>
            ) : null}

            <div
              className="relative"
              id="intro"
              ref={(el) => (sectionsRef.current[0] = el)}
            >
              <h1 className="pt-8 text-center text-3xl font-bold lg:text-left">
                Introduction to Early Revolts of the Indios
              </h1>
              <p className="mt-4 text-justify text-base/loose text-gray-600">
                In the subsequent section, we will delve deeper into the
                specific revolts that occurred prior to the 19th century and
                examine their outcomes using geographical maps. This visual aid
                will provide a clearer understanding of how the Philippines'
                diverse landscape influenced the course and results of these
                historical events. By mapping out the locations of various
                uprisings and highlighting the regions involved, we can grasp
                the challenges posed by the archipelagic nature of the
                Philippines and the impact it had on communication,
                coordination, and the overall success of resistance movements.
                Exploring these details will shed light on the complex dynamics
                at play during this pivotal period of Filipino history and
                illustrate the significance of geographic factors in shaping the
                outcomes of anti-colonial struggles against Spanish rule.
              </p>
            </div>

            <div
              className="relative flex h-max flex-col gap-12 pt-8"
              ref={(el) => (sectionsRef.current[1] = el)}
              id="revolts"
            >
              {REVOLTS.map((revolt, idx) => (
                <RevoltCard revolt={revolt} key={idx} />
              ))}
            </div>

            <div ref={(el) => (sectionsRef.current[2] = el)} id="gomburza">
              <Gomburza />
            </div>

            <div ref={(el) => (sectionsRef.current[3] = el)} id="summary">
              <Summary />
            </div>

            <div ref={(el) => (sectionsRef.current[4] = el)} id="references">
              <References />
            </div>

            <div ref={(el) => (sectionsRef.current[5] = el)} id="about">
              <About />
            </div>
          </div>

          {showMap === true ? (
            <div
              className={cn(
                'absolute bottom-0 col-span-12 row-span-2 lg:fixed lg:inset-y-0 lg:right-10 lg:top-12 lg:col-span-4 lg:block lg:h-screen lg:w-96 xl:right-20 2xl:right-44'
              )}
            >
              <button
                onClick={() => setShowMap(false)}
                className="absolute right-2 top-2 z-50 rounded-lg bg-white lg:hidden"
              >
                <X />
              </button>
              <MapCard items={REVOLTS} />
            </div>
          ) : null}

          <Link
            className="fixed bottom-8 right-8 z-50 flex items-center justify-center gap-2 rounded-full border bg-slate-50 px-4 py-2 lg:hidden"
            to="/#map"
            onClick={() => setShowMap(true)}
          >
            <ArrowUpLeft />
            <p className="font-mono text-xs">Map</p>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Blog
