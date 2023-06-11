import styled from '@emotion/styled'
import Meta from '../src/meta'
import TopBar from '../src/topBar'

import { type GetStaticPropsResult } from 'next'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypePresetMinify from 'rehype-preset-minify'
import rehypeStringify from 'rehype-stringify'
import { read } from 'to-vfile'

const HomePageContent = styled.div({
  padding: '8px',
  // This is higher than the width, else it looks weird with the extra margin on top. 968px is good.
  '@media (min-width: 968px)': {
    width: '900px',
    marginTop: '1rem',
    alignSelf: 'center',
    boxSizing: 'border-box', // Not really necessary, but the text is a bit misaligned without this.
  },
  '& h3': { fontSize: '1.5em' }, // Copying h2 sizing here, just personal preference.
  '& a': { color: '#ff007f' },
  '& *': { marginBottom: '1rem' },
})

function HomePage(props: { html: string }): JSX.Element {
  return (
    <>
      <Meta
        title={"Home - retrixe's site"}
        description='The home page to my website.'
        url='https://retrixe.me/'
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
          .process(await read('README.md'))
      ),
    },
  }
}

export default HomePage
