import Layout from '../components/layout'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout>
      <motion.div
        key="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4"
      >
        <div className="mb-6 text-center text-gray-800 dark:text-white">
          Hi, I'm Katherine! I'm a Senior Software Engineer at GitHub. I
          love building things for people who love building things and playing
          with new tools and tech.
        </div>
        <div className="text-center text-gray-800 dark:text-white">
          When I'm not at my keyboard, I'm spending time with my husband and
          daughter and our dog, drinking coffee, playing games, reading, or
          spending time outside.
        </div>
      </motion.div>
    </Layout>
  )
}
