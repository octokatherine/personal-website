import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-semibold tracking-widest ">KATHERINE PETERSON</h1>
          <hr className="w-20 my-10 border-gray-400" />
          <h2 className="text-lg tracking-widest ">SOFTWARE ENGINEER</h2>
        </div>
      </div>
    </Layout>
  )
}
