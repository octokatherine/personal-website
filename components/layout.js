import Link from 'next/link'
import Head from 'next/head'
import { faGithub, faTwitter, faLinkedinIn, faDev } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-gray-800 bg-gradient-to-b from-lightBlue-200 via-lightBlue-50 to-white">
      <Head>
        <title>Katherine Peterson</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className="flex flex-wrap justify-center leading-6">
          <Link href="/">
            <button className="w-24 py-1 text-xs leading-6 tracking-widest border border-gray-400 rounded-full">
              HOME
            </button>
          </Link>
          <Link href="/about">
            <button className="w-24 py-1 mx-2 text-xs leading-6 tracking-widest border border-gray-400 rounded-full">
              ABOUT
            </button>
          </Link>
          <Link href="/projects">
            <button className="w-24 py-1 text-xs leading-6 tracking-widest border border-gray-400 rounded-full">
              PROJECTS
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-2xl py-8 my-6 border-t border-b border-gray-400">
          <div className="flex justify-center">{children}</div>
        </div>
        <div className="flex items-center justify-center">
          <FontAwesomeIcon className="mr-8 text-3xl text-gray-500 cursor-pointer" icon={faGithub} />
          <FontAwesomeIcon
            className="mr-8 text-3xl text-gray-500 cursor-pointer"
            icon={faTwitter}
          />
          <FontAwesomeIcon
            className="mr-8 text-3xl text-gray-500 cursor-pointer"
            icon={faLinkedinIn}
          />
          <FontAwesomeIcon className="text-3xl text-gray-500 cursor-pointer" icon={faDev} />
        </div>
      </div>
    </div>
  )
}
