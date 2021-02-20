import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <img className="w-32 h-32 mb-8 rounded-full" src="/katherine.jpg" alt="Katherine" />
          <h1 className="px-2 text-3xl font-semibold tracking-widest text-center">
            KATHERINE PETERSON
          </h1>
          <hr className="w-16 my-8 border-gray-300" />
          <h2 className="text-lg tracking-widest text-center">SOFTWARE ENGINEER</h2>
        </div>
      </div>
    </Layout>
  )
}
