import { useEffect, useState } from 'react'

const TypedContent = (props: {
  component: React.FC<React.PropsWithChildren> | string
  onFinish?: () => void
  content: string
  speed: number
}): React.JSX.Element => {
  const [content, setContent] = useState('')

  const { onFinish } = props
  useEffect(() => {
    if (content === props.content) return
    // For hot reload, mainly
    if (!props.content.startsWith(content)) setContent('')
    const timeout = setTimeout(() => {
      setContent(content + props.content.charAt(content.length))
      if (content.length === props.content.length - 1) onFinish?.()
    }, props.speed)
    return () => {
      clearTimeout(timeout)
    }
  }, [content, props.content, props.speed, onFinish])
  const { component: Component } = props

  return (
    <Component aria-label={content}>
      {content || '\u200B'}
      <noscript>{props.content}</noscript>
    </Component>
  )
}

export default TypedContent
