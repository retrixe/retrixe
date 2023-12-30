import { useEffect, useState } from 'react'
import CentredContent from '../../src/CentredContent'
import Meta from '../../src/Meta'
import TopBar from '../../src/TopBar'
import TicTacToeGame from '../../src/experiments/tictactoe/TicTacToeGame'

function TicTacToePage(): JSX.Element {
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    <>
      <Meta
        title={"Tic-Tac-Toe - Experiments - retrixe's site"}
        description='A stab at implementing tic-tac-toe with only my brain.'
        url='https://retrixe.xyz/experiments/tictactoe'
      />
      <TopBar />
      <CentredContent>
        <br />
        {hydrated && <TicTacToeGame />}
        <br />
        <hr />
        <br />
        <h4>TODO</h4>
        <ul>
          <li>
            Implement counter+speedrun AI: check if the second player is winning, if they are, then
            counter and block; else look for lines which are closest to completion, rank them (by
            how much is left to complete them, but perhaps other criteria to make it smarter like a
            move which the player would be unable to counter), and then try completing the most
            eligible one
          </li>
          <li>
            a more advanced ai could replace the else strategy with ahead prediction like chess AIs,
            test all moves, rank each possible move with the best likelihood to win
          </li>
        </ul>
      </CentredContent>
    </>
  )
}

export default TicTacToePage
