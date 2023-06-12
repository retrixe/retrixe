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

// TODO: dynamic height/width, 10 padding may not be enough? instead calculate 10% and take in height/width as args
export const renderCross = (cx: CanvasRenderingContext2D, x: number, y: number): void => {
  cx.strokeStyle = 'white'
  cx.lineWidth = 2
  cx.beginPath()
  cx.moveTo(x + 10, y + 10)
  cx.lineTo(x + 90, y + 90)
  cx.moveTo(x + 90, y + 10)
  cx.lineTo(x + 10, y + 90)
  cx.stroke()
}

export const renderCircle = (cx: CanvasRenderingContext2D, x: number, y: number): void => {
  cx.strokeStyle = 'white'
  cx.lineWidth = 2
  cx.beginPath()
  cx.arc(x + 50, y + 50, 40, 0, 2 * Math.PI)
  cx.stroke()
}
