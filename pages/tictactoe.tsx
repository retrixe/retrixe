import Meta from '../src/meta'
import TopBar from '../src/topBar'

function HomePage(): JSX.Element {
  return (
    <>
      <Meta
        title={"Tic-Tac-Toe - retrixe's site"}
        description='A stab at implementing tic-tac-toe with only my brain.'
        url='https://retrixe.me/tictactoe'
      />
      <TopBar />
      <div css={{ padding: '8px' }}>
        <h4>WIP</h4>
        <ul>
          <li>Implement the game UI (multiplayer)</li>
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
      </div>
    </>
  )
}

export default HomePage
