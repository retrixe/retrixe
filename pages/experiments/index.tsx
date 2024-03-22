import CentredContent from '../../src/layout/CentredContent'
import Meta from '../../src/layout/Meta'
import TopBar from '../../src/layout/TopBar'
import SideCard from '../../src/components/SideCard'

function ExperimentsPage(): JSX.Element {
  return (
    <>
      <Meta
        title={"Experiments - retrixe's site"}
        description='A bunch of random experiments.'
        url='https://retrixe.xyz/experiments'
      />
      <TopBar />
      <CentredContent>
        <SideCard
          openOn='left'
          title='Tic-Tac-Toe'
          href='/experiments/tictactoe'
          description='A stab at implementing tic-tac-toe with only my brain.'
        />
        <SideCard
          openOn='right'
          title='HomePage V2'
          href='/experiments/next'
          description='New version of the homepage.'
        />
        <p>Note: This page is experimental and still being designed.</p>
      </CentredContent>
    </>
  )
}

export default ExperimentsPage
