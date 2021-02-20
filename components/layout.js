import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-800 bg-gradient-to-b from-lightBlue-200 to-white">
      <div className="flex justify-center my-6 leading-6">
        <Link href="/">
          <button className="py-1 text-xs leading-6 tracking-widest border border-gray-400 rounded-full w-28">
            HOME
          </button>
        </Link>
        <Link href="/about">
          <button className="py-1 mx-2 text-xs leading-6 tracking-widest border border-gray-400 rounded-full w-28">
            ABOUT
          </button>
        </Link>
        <Link href="/projects">
          <button className="py-1 text-xs leading-6 tracking-widest border border-gray-400 rounded-full w-28">
            PROJECTS
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-3xl border-t border-b border-gray-400">
        <div className="flex justify-center">{children}</div>
      </div>
    </div>
  )
}
