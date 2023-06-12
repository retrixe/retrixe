import { type MouseEvent } from 'react'

export const renderGrid = (cx: CanvasRenderingContext2D, width: number, height: number): void => {
  cx.strokeStyle = 'white'
  cx.lineWidth = 1
  const lines: Array<[number, number]> = [
    [width / 3, 0],
    [(width * 2) / 3, 0],
    [0, height / 3],
    [0, (height * 2) / 3],
  ]
  cx.beginPath()
  for (const line of lines) {
    cx.moveTo(...line)
    cx.lineTo(line[0] === 0 ? width : line[0], line[1] === 0 ? height : line[1])
  }
  cx.stroke()
}

export const renderCross = (
  cx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number
): void => {
  const posX = x * (width / 3)
  const posY = y * (height / 3)
  const cellSizeX = width / 3
  const cellSizeY = height / 3

  cx.strokeStyle = 'white'
  cx.lineWidth = 2
  cx.beginPath() // Leave 10% margin on each side.
  cx.moveTo(posX + cellSizeX * 0.1, posY + cellSizeY * 0.1)
  cx.lineTo(posX + cellSizeX * 0.9, posY + cellSizeY * 0.9)
  cx.moveTo(posX + cellSizeX * 0.9, posY + cellSizeY * 0.1)
  cx.lineTo(posX + cellSizeX * 0.1, posY + cellSizeY * 0.9)
  cx.stroke()
}

export const renderCircle = (
  cx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number
): void => {
  const posX = x * (width / 3)
  const posY = y * (height / 3)
  const cellSizeX = width / 3
  const cellSizeY = height / 3
  cx.strokeStyle = 'white'
  cx.lineWidth = 2
  cx.beginPath()
  const radiusX = (cellSizeX / 2) * 0.8 // Leave 10% margin on each side.
  const radiusY = (cellSizeY / 2) * 0.8 // Leave 10% margin on each side.
  cx.ellipse(posX + cellSizeX / 2, posY + cellSizeY / 2, radiusX, radiusY, 0, 0, 2 * Math.PI)
  cx.stroke()
}

export const getCursorPositionOnCanvas = (
  event: MouseEvent<HTMLCanvasElement>
): [number, number] => {
  const canvasBounds = event.currentTarget.getBoundingClientRect()
  return [event.clientX - canvasBounds.left, event.clientY - canvasBounds.top]
}

export const getCursorPositionOnGrid = (event: MouseEvent<HTMLCanvasElement>): [number, number] => {
  const [x, y] = getCursorPositionOnCanvas(event)
  const canvasBounds = event.currentTarget.getBoundingClientRect()
  const pos: [number, number] = [
    Math.floor((x / canvasBounds.width) * 3),
    Math.floor((y / canvasBounds.height) * 3),
  ]
  if (pos[0] < 0 || pos[0] > 2 || pos[1] < 0 || pos[1] > 2) {
    return [-1, -1]
  } else {
    return pos
  }
}
