import Meta from '../src/meta'
import TopBar from '../src/topBar'

function HomePage(): JSX.Element {
  return (
    <>
      <Meta
        title={"Home - retrixe's site"}
        description='The home page to my website.'
        url='https://retrixe.me/'
      />
      <TopBar currentHref='/' />
      <div css={{ padding: '8px' }}>
        <h3>Hey there o/</h3>
        <p>I will make this parse my publicly available GitHub profile sometime today, hopefully</p>
      </div>
    </>
  )
}

export default HomePage
