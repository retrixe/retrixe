import styled from '@emotion/styled'
import Link from 'next/link'

const SideCardContainer = styled.div<{ openOn: 'left' | 'right' }>(props => {
  const openOn = props.openOn.substring(0, 1).toUpperCase() + props.openOn.substring(1)
  return {
    borderRadius: '1em',
    border: '1px solid var(--divider-color)',
    [`border${openOn}`]: '0px',
    [`borderTop${openOn}Radius`]: '0px',
    [`borderBottom${openOn}Radius`]: '0px',
    padding: '1rem',
    display: 'flex',
    width: 'fit-content',
  }
})

const StyledLink = styled(Link)({ color: 'var(--link-color)' })

const SideCard = (props: {
  title: string | JSX.Element
  description: string
  image?: JSX.Element
  href?: string
  openOn: 'left' | 'right'
}): JSX.Element => {
  // TODO: variable alignment to left or the right
  // TODO: the border should extend to the edge of the display
  return (
    <SideCardContainer openOn={props.openOn}>
      <div>
        <h1>
          {props.href !== undefined ? (
            <StyledLink href={props.href}>{props.title}</StyledLink>
          ) : (
            props.title
          )}
        </h1>
        <p>{props.description}</p>
      </div>
      {props.image}
    </SideCardContainer>
  )
}

export default SideCard
