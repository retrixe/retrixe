import { useLayoutEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { getCursorPositionOnGrid, renderCircle, renderCross, renderGrid } from './canvasRenderer'

const TicTacToeGameContainer = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const TicTacToeGameCanvas = styled.canvas({
  // width: '300px',
  // height: '300px',
  border: '1px solid var(--color)',
  borderRadius: '8px',
})

/* TODO:
 * Implement the game UI (multiplayer)
 *
 * Implement counter+speedrun AI: check if the second player is winning, if they are, then counter
 * and block; else look for lines which are closest to completion, rank them (by how much is left to
 * complete them, but perhaps other criteria to make it smarter like a move which the player would
 * be unable to counter), and then try completing the most eligible one
 *
 * a more advanced ai could replace the else strategy with ahead prediction like chess AIs, test all
 * moves, rank each possible move with the best likelihood to win
 */

enum Player {
  Cross = 1,
  Circle = 2,
}

type GameStateRow = [Player | null, Player | null, Player | null]
type GameState = [GameStateRow, GameStateRow, GameStateRow]

const TicTacToeGame = (): JSX.Element => {
  const [gameState, setGameState] = useState<GameState>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ])
  const [turn, setTurn] = useState(Player.Cross)
  // const [winner, setWinner] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useLayoutEffect(() => {
    const cx = canvasRef.current?.getContext('2d')
    if (cx == null) return
    const { width, height } = canvasRef.current! // eslint-disable-line @typescript-eslint/no-non-null-assertion

    renderGrid(cx, width, height)

    for (let y = 0; y < gameState.length; y++) {
      for (let x = 0; x < gameState[y].length; x++) {
        const cell = gameState[y][x]
        if (cell === Player.Cross) {
          renderCross(cx, x, y, width, height)
        } else if (cell === Player.Circle) {
          renderCircle(cx, x, y, width, height)
        }
      }
    }

    return () => {
      cx.clearRect(0, 0, width, height)
    }
  }, [gameState])

  return (
    <TicTacToeGameContainer>
      <TicTacToeGameCanvas
        ref={canvasRef}
        height='300'
        width='300'
        onClick={e => {
          const [x, y] = getCursorPositionOnGrid(e)
          if (x === -1 || y === -1) {
            console.error('Failed to get cursor position on grid!')
            return
          }
          const newGameState: GameState = [[...gameState[0]], [...gameState[1]], [...gameState[2]]]
          if (newGameState[y][x] !== null) {
            console.error(
              `Cell at ${x} ${y} is already occupied by ${newGameState[y][x] as number}!`
            )
          } else {
            newGameState[y][x] = turn
            setGameState(newGameState)
            setTurn(turn === Player.Cross ? Player.Circle : Player.Cross)
            // TODO: Victory or loss?
          }
        }}
      />
    </TicTacToeGameContainer>
  )
}

export default TicTacToeGame
