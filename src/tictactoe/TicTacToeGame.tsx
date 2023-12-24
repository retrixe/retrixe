import { useLayoutEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { getCursorPositionOnGrid, renderCircle, renderCross, renderGrid } from './canvasRenderer'
import { type GameState, Player, checkWinner } from './gameUtils'
import useDarkMode from '../useDarkMode'

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

const TicTacToeGameControls = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '1rem',
})

// TODO: These could be a common global style.
const TicTacToeGameButton = styled.button({
  flexGrow: 1,
  padding: '8px',
  borderRadius: '8px',
  border: '1px solid var(--color)',
  color: 'var(--color)',
  backgroundColor: 'var(--background-color)',
  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  ':hover': {
    backgroundColor: 'var(--color)',
    color: 'var(--background-color)',
  },
})

const TicTacToeGameSelect = styled.select({
  marginRight: '1rem',
  flexGrow: 1,
  padding: '8px',
  borderRadius: '8px',
  border: '1px solid var(--color)',
  color: 'var(--color)',
  backgroundColor: 'var(--background-color)',
  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  ':hover': {
    backgroundColor: 'var(--color)',
    color: 'var(--background-color)',
  },
})

/* TODO:
 * Implement counter+speedrun AI: check if the second player is winning, if they are, then counter
 * and block; else look for lines which are closest to completion, rank them (by how much is left to
 * complete them, but perhaps other criteria to make it smarter like a move which the player would
 * be unable to counter), and then try completing the most eligible one
 *
 * a more advanced ai could replace the else strategy with ahead prediction like chess AIs, test all
 * moves, rank each possible move with the best likelihood to win
 */

const TicTacToeGame = (): JSX.Element => {
  const darkMode = useDarkMode()
  const [gameState, setGameState] = useState<GameState>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ])
  const [turn, setTurn] = useState(Player.Cross)
  const [winner, setWinner] = useState<Player | null>(null)
  const [mode, setMode] = useState<'multiplayer' | 'counter+speedrun' | 'minmax'>('multiplayer')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useLayoutEffect(() => {
    const cx = canvasRef.current?.getContext('2d')
    if (cx == null) return
    const { width, height } = canvasRef.current! // eslint-disable-line @typescript-eslint/no-non-null-assertion

    if (winner != null) {
      cx.lineWidth = 1
      cx.fillStyle = darkMode ? 'white' : 'black'
      cx.font = '48px sans-serif'
      const message = `${winner === Player.Cross ? 'X' : 'O'} wins!`
      const { width: textWidth } = cx.measureText(message)
      cx.fillText(message, (width - textWidth) / 2, (height + 24) / 2) // 48 / 2 = 24
    } else {
      cx.strokeStyle = darkMode ? 'white' : 'black'
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
    }

    return () => {
      cx.clearRect(0, 0, width, height)
    }
  }, [gameState, winner, darkMode])

  const handleReset = (): void => {
    setGameState([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ])
    setTurn(Player.Cross)
    setWinner(null)
  }

  return (
    <TicTacToeGameContainer>
      <div>
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
            const newGameState: GameState = [
              [...gameState[0]],
              [...gameState[1]],
              [...gameState[2]],
            ]
            if (newGameState[y][x] !== null) {
              console.error(
                `Cell at ${x} ${y} is already occupied by ${newGameState[y][x] as number}!`,
              )
            } else {
              newGameState[y][x] = turn
              setGameState(newGameState)
              setTurn(turn === Player.Cross ? Player.Circle : Player.Cross)
              setWinner(checkWinner(newGameState))
            }
          }}
        />
        <TicTacToeGameControls>
          <TicTacToeGameSelect
            value={mode}
            onChange={e => {
              setMode(e.target.value as typeof mode)
            }}
          >
            <option value='multiplayer'>Multiplayer</option>
            <option value='counter+speedrun'>Counter+Speedrun</option>
            <option value='minmax'>Minmax</option>
          </TicTacToeGameSelect>
          <TicTacToeGameButton onClick={handleReset}>Reset</TicTacToeGameButton>
        </TicTacToeGameControls>
      </div>
    </TicTacToeGameContainer>
  )
}

export default TicTacToeGame
