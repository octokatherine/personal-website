import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </div>
      {children}
    </div>
  )
}
