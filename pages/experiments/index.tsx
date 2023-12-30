import CentredContent from '../../src/CentredContent'
import Meta from '../../src/Meta'
import TopBar from '../../src/TopBar'
import SideCard from '../../src/experiments/SideCard'

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
      </CentredContent>
    </>
  )
}

export default ExperimentsPage
