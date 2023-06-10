import Head from 'next/head'

function HomePage(): JSX.Element {
  return (
    <>
      <Head>
        <title>retrixe's website</title>
      </Head>
      <h1 css={{ color: 'red' }}>Hello there!</h1>
    </>
  )
}

export default HomePage
