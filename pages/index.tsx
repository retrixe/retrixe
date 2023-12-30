import styled from '@emotion/styled'
import Meta from '../src/Meta'
import TopBar from '../src/TopBar'
import CentredContent from '../src/CentredContent'

import { type GetStaticPropsResult } from 'next'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypePresetMinify from 'rehype-preset-minify'
import rehypeStringify from 'rehype-stringify'
import { read } from 'to-vfile'

const HomePageContent = styled(CentredContent)({
  '@media (min-width: 968px)': {
    boxSizing: 'border-box', // Not really necessary, but the text is a bit misaligned without this.
  },
  '& h3': { fontSize: '1.5em' }, // Copying h2 sizing here, just personal preference.
  '& a': { color: 'var(--link-color)' },
  '& *': { marginBottom: '1rem' },
})

// Some shades that could look good: Yellow, cyan, green, blue, purple, pink, violet, magenta
function HomePage(props: { html: string }): JSX.Element {
  return (
    <>
      <Meta
        title={"Home - retrixe's site"}
        description='The home page to my website.'
        url='https://retrixe.xyz/'
      />
      <TopBar />
      <HomePageContent dangerouslySetInnerHTML={{ __html: props.html }} />
    </>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<{ html: string }>> {
  // alternatives: simple-markdown, showdown
  return {
    props: {
      html: String(
        await unified()
          .use(remarkParse)
          .use(remarkGfm)
          .use(remarkRehype)
          .use(rehypePresetMinify)
          .use(rehypeStringify)
          .process(await read('README.md')),
      ),
    },
  }
}

export default HomePage
