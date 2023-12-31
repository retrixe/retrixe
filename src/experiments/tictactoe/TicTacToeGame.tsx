import { type MouseEventHandler, useEffect, useLayoutEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { getCursorPositionOnGrid, renderCircle, renderCross, renderGrid } from './canvasRenderer'
import { type GameState, Player, checkWinner } from './gameUtils'
import useDarkMode from '../../utils/useDarkMode'
import Button from '../../components/Button'
import Select from '../../components/Select'

const TicTacToeGameContainer = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const TicTacToeGameCanvas = styled.canvas({
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

  ;(typeof window !== 'undefined' ? useLayoutEffect : useEffect)(() => {
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

      gameState.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (cell === Player.Cross) {
            renderCross(cx, x, y, width, height)
          } else if (cell === Player.Circle) {
            renderCircle(cx, x, y, width, height)
          }
        })
      })
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

  const handleClick: MouseEventHandler<HTMLCanvasElement> = e => {
    const [x, y] = getCursorPositionOnGrid(e)
    if (x === -1 || y === -1) {
      console.error('Failed to get cursor position on grid!')
      return
    }
    const newGameState: GameState = [[...gameState[0]], [...gameState[1]], [...gameState[2]]]
    if (newGameState[y][x] !== null) {
      console.error(`Cell at ${x} ${y} is already occupied by ${newGameState[y][x] as number}!`)
    } else {
      newGameState[y][x] = turn
      setGameState(newGameState)
      setTurn(turn === Player.Cross ? Player.Circle : Player.Cross)
      setWinner(checkWinner(newGameState))
    }
  }

  return (
    <TicTacToeGameContainer>
      <div>
        <TicTacToeGameCanvas ref={canvasRef} height='300' width='300' onClick={handleClick} />
        <TicTacToeGameControls>
          <Select
            value={mode}
            onChange={e => {
              setMode(e.target.value as typeof mode)
            }}
          >
            <option value='multiplayer'>Multiplayer</option>
            <option value='counter+speedrun'>Counter+Speedrun</option>
            <option value='minmax'>Minmax</option>
          </Select>
          <Button onClick={handleReset}>Reset</Button>
        </TicTacToeGameControls>
      </div>
    </TicTacToeGameContainer>
  )
}

export default TicTacToeGame
