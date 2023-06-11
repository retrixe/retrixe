import Head from 'next/head'

const Meta = ({
  title,
  description,
  url,
  noIndex,
}: {
  title: string
  description: string
  url: string
  noIndex?: boolean
}): JSX.Element => (
  <Head>
    <title>{title}</title>
    <meta property='og:title' content={title} />
    <meta property='og:url' content={url} />
    <meta property='og:description' content={description} />
    <meta name='theme-color' content='#7FFFD4' />
    <meta name='Description' content={description} />
    {noIndex === true && <meta name='robots' content='noindex,nofollow' />}
  </Head>
)

export default Meta
