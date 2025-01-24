import { useEffect, useState } from 'react'
import TypedContent from './TypedContent'

const hellos = [
  '你好 o/', // Chinese
  '안녕하세요 o/', // Korean
  'いらっしゃいませ o/', // Japanese ('Welcome' not 'Hello' but well /shrug)
  'Hello o/', // English
  'Bonjour o/', // French
  'привіт o/', // Ukrainian
  'مرحبًا o/', // Arabic
  'Hej o/', // Swedish
  'नमस्ते o/', // Hindi
]

// The fact I use React just for this will probably land me in the International Criminal Court for war crimes
const RandomHello = (): React.JSX.Element => {
  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  const [hello, setHello] = useState(hellos[2]!) // yeah? why not? yeah im a little bit of a weeb?

  useEffect(() => {
    setHello(hellos[Math.floor(Math.random() * hellos.length)]!)
    const interval = setInterval(
      () => setHello(hellos[Math.floor(Math.random() * hellos.length)]!),
      5 * 1000,
    )
    return () => clearInterval(interval)
  }, [])
  /* eslint-enable @typescript-eslint/no-non-null-assertion */

  return <TypedContent component='h1' content={hello} speed={100} />
}

export default RandomHello
