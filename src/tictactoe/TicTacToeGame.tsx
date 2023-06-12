import { useLayoutEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { renderCircle, renderCross, renderGrid } from './canvasRenderer'

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

const TicTacToeGame = (): JSX.Element => {
  const [gameState] = useState<Array<[null | 1 | 2, null | 1 | 2, null | 1 | 2]>>([
    [1, 2, null],
    [null, null, null],
    [null, null, null],
  ])
  // const [winner, setWinner] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useLayoutEffect(() => {
    const cx = canvasRef.current?.getContext('2d')
    if (cx == null) return

    renderGrid(cx, 300, 300)

    for (let y = 0; y < gameState.length; y++) {
      for (let x = 0; x < gameState[y].length; x++) {
        const cell = gameState[y][x]
        if (cell === 1) {
          renderCross(cx, x * 100, y * 100) // 300 / 3
        } else if (cell === 2) {
          renderCircle(cx, x * 100, y * 100)
        }
      }
    }

    return () => {
      cx.clearRect(0, 0, 300, 300)
    }
  }, [gameState])

  return (
    <TicTacToeGameContainer>
      <TicTacToeGameCanvas ref={canvasRef} height='300' width='300' />
    </TicTacToeGameContainer>
  )
}

export default TicTacToeGame
