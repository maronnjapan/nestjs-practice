import { graphql } from '@/generate'
import { HerosQuery } from '@/generate/graphql'
import { Inter } from 'next/font/google'
import { useQuery } from 'urql'

const inter = Inter({ subsets: ['latin'] })
const herosDocument = graphql(`
query heros{
    apps(skip:2){
    id
    name
  }
}
`)

const Home = () => {
  const [{ data }] = useQuery<HerosQuery>({ query: herosDocument })
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {data?.apps.map((app) => (
          <>
            <p>id:{app.id}</p>
            <p>name:{app.name}</p>
          </>
        ))}
      </div>
    </main>
  )
}

export default Home