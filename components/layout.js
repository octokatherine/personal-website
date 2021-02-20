import Link from 'next/link'
import Head from 'next/head'
import { faGithub, faTwitter, faLinkedinIn, faDev } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-gray-800">
      <Head>
        <title>Katherine Peterson</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        style={{ minWidth: '24rem', maxWidth: '37rem' }}
        className="flex flex-col items-center justify-center w-2/3"
      >
        <div className="flex flex-wrap justify-center leading-6">
          <Link href="/">
            <button className="w-24 py-1 text-xs leading-6 tracking-widest border border-gray-300 rounded-full focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600">
              HOME
            </button>
          </Link>
          <Link href="/about">
            <button className="w-24 py-1 mx-2 text-xs leading-6 tracking-widest border border-gray-300 rounded-full focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600">
              ABOUT
            </button>
          </Link>
          {/* <Link href="/projects">
            <button className="w-24 py-1 text-xs leading-6 tracking-widest border border-gray-300 rounded-full focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600">
              PROJECTS
            </button>
          </Link> */}
        </div>
        <div className="flex flex-col items-center justify-center w-full py-8 my-6 border-t border-b border-gray-300">
          {children}
        </div>
        <div className="flex items-center justify-center">
          <a
            className="text-gray-400 hover:text-lightBlue-600"
            href="https://github.com/katherinepeterson"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl " icon={faGithub} />
          </a>
          <a
            className="text-gray-400 hover:text-lightBlue-600"
            href="https://twitter.com/katherinecodes"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl" icon={faTwitter} />
          </a>
          <a
            className="text-gray-400 hover:text-lightBlue-600"
            href="https://www.linkedin.com/in/katherine-peterson/"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl" icon={faLinkedinIn} />
          </a>
          <a
            className="text-gray-400 hover:text-lightBlue-600"
            href="https://dev.to/katherinecodes"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl" icon={faDev} />
          </a>
        </div>
      </div>
    </div>
  )
}
