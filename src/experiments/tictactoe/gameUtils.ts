export enum Player {
  Cross = 1,
  Circle = 2,
}

type GameStateRow = [Player | null, Player | null, Player | null]
export type GameState = [GameStateRow, GameStateRow, GameStateRow]

export const checkWinner = (gameState: GameState): Player | null => {
  // Check horizontal and vertical lines.
  for (let i = 0; i < 3; i++) {
    if (
      gameState[i][0] === gameState[i][1] &&
      gameState[i][1] === gameState[i][2] &&
      gameState[i][0] !== null
    ) {
      return gameState[i][0]
    } else if (
      gameState[0][i] === gameState[1][i] &&
      gameState[1][i] === gameState[2][i] &&
      gameState[0][i] !== null
    ) {
      return gameState[0][i]
    }
  }
  // Check both diagonals.
  if (
    gameState[0][0] === gameState[1][1] &&
    gameState[1][1] === gameState[2][2] &&
    gameState[0][0] !== null
  ) {
    return gameState[0][0]
  } else if (
    gameState[0][2] === gameState[1][1] &&
    gameState[1][1] === gameState[2][0] &&
    gameState[0][2] !== null
  ) {
    return gameState[0][2]
  }
  return null
}
