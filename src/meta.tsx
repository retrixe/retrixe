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
    <meta property='og:type' content='website' />
    <meta property='og:title' content={title} />
    <meta property='og:url' content={url} />
    <meta property='og:description' content={description} />
    <meta property='og:image' content='https://github.com/retrixe.png' />
    <link rel='shortcut icon' type='image/png' href='https://github.com/retrixe.png' />
    <meta name='theme-color' content='#7FFFD4' /> {/* Color: Aquamarine */}
    <meta name='Description' content={description} />
    {noIndex === true && <meta name='robots' content='noindex,nofollow' />}
  </Head>
)

export default Meta
