import React from 'react'
import { motion } from 'framer-motion'

const SunMoonSVG = ({ isDarkMode, setIsDarkMode }) => {
  const lengthVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
  }
  const opacityVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  const onTap = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <motion.div style={{ width: '3rem' }} onClick={onTap}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        className="item"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <g>
          <motion.path
            stroke={isDarkMode ? 'white' : '#334155'}
            className="rays"
            d="M510.421 869.947c0 254.123-2.048 47.928.222 96.265M857.002 166.323c-179.694 179.694-35.339 32.442-67.913 68.226M511.974 24.622c0 254.125-2.047 47.928.222 96.264M257.046 767.38c-179.693 179.693-35.338 32.442-67.912 68.226M998.612 512.779c-254.125 0-47.928-2.047-96.264.222M155.654 513.331c-254.125 0-47.928-2.048-96.264.222M856.126 860.191c-179.693-179.693-32.442-35.338-68.226-67.912M256.048 258.243c-179.694-179.694-32.443-35.338-68.226-67.913"
            fill="none"
            strokeWidth="30"
            variants={opacityVariants}
            initial={!isDarkMode ? 'hidden' : 'visible'}
            animate={!isDarkMode ? 'visible' : 'hidden'}
            transition={{
              default: { duration: 1, ease: 'easeInOut' },
            }}
          />
        </g>
        <motion.path
          stroke={isDarkMode ? 'white' : '#334155'}
          className="outerSun"
          d="M739.766 624.135c-26.713 9.599-55.508 14.829-85.525 14.829h0c-139.654 0-252.865-113.212-252.865-252.865h0c0-38.841 8.757-75.636 24.404-108.52"
          fill="none"
          strokeWidth="30"
          variants={lengthVariants}
          initial={isDarkMode ? 'hidden' : 'visible'}
          animate={isDarkMode ? 'visible' : 'hidden'}
          animationDirection="reverse"
          transition={{
            default: { duration: 1, ease: 'easeInOut' },
          }}
        />
        <motion.path
          stroke={isDarkMode ? 'white' : '#334155'}
          className="innerMoon"
          d="M426.449 277.842c26.712-9.599 55.508-14.829 85.525-14.829h0c139.654 0 252.865 113.211 252.865 252.865h0c0 38.841-8.757 75.636-24.405 108.52"
          fill="none"
          strokeWidth="30"
          variants={lengthVariants}
          initial={isDarkMode ? 'visible' : 'hidden'}
          animate={isDarkMode ? 'hidden' : 'visible'}
          transition={{
            default: { duration: 1, ease: 'easeInOut' },
          }}
        />
        <motion.path
          stroke={isDarkMode ? 'white' : '#334155'}
          className="stationarySun"
          d="M740.434 624.398c-40.614 85.35-127.647 144.345-228.46 144.345h0c-139.653 0-252.865-113.212-252.865-252.865h0c0-109.636 69.774-202.976 167.34-238.036"
          initial="visible"
          fill="none"
          strokeWidth="30"
        />
      </motion.svg>
    </motion.div>
  )
}

export default SunMoonSVG
