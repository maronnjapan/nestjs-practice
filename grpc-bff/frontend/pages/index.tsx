import { Inter } from 'next/font/google'
import { GetServerSideProps, NextPage } from 'next'
import { urqlClient } from '@/lib/init-urql'
import gql from 'graphql-tag'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  apps: {
    id: string,
    name: string
  }
}

const Home: NextPage<Props> = ({ apps }) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>id:{apps.id}</p>
        <p>name:{apps.name}</p>
        <p>test</p>
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const client = await urqlClient()
    const postsQuery = gql`
     query {
       apps {
         id
         name
       }
     }
   `
    const result = await client.query(postsQuery, {}).toPromise()
    return {
      props: {
        apps: result.data.apps
      }
    }
  } catch (e) {
    console.error(e)
    return {
      notFound: true
    }
  }
}
export default Home