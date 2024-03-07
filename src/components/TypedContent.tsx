import { useEffect, useState } from 'react'

const TypedContent = (props: {
  component: React.FC<React.PropsWithChildren> | string
  content: string
  speed: number
}): JSX.Element => {
  const [content, setContent] = useState('')

  useEffect(() => {
    if (content === props.content) return
    // For hot reload, mainly
    if (!props.content.startsWith(content)) {
      setContent(props.content)
      return
    }
    const timeout = setTimeout(() => {
      setContent(content + props.content.charAt(content.length))
    }, props.speed)
    return () => {
      clearTimeout(timeout)
    }
  }, [content, props.content, props.speed])
  const { component: Component } = props

  return (
    <>
      <noscript>
        <Component aria-label={props.content}>{props.content}</Component>
      </noscript>
      <Component aria-label={content}>{content}</Component>
    </>
  )
}

export default TypedContent
