import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToAnchor() {
  const location = useLocation()
  const lastHash = useRef('')
  const topPadding = useRef(50) // Set the desired top padding value

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1) // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        const element = document.getElementById(lastHash.current)
        const rect = element?.getBoundingClientRect()
        const offsetTop = scrollY + rect?.top - topPadding.current

        window.scrollTo({
          top: offsetTop,
          // behavior: 'smooth',
        })

        lastHash.current = ''
      }, 100)
    }
  }, [location])

  return null
}

export default ScrollToAnchor
