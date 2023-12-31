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
    padding: '2rem',
    display: 'flex',
    width: 'fit-content',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  }
})
const SideCardImageLeft = styled.div({ marginLeft: '2rem' })
const SideCardImageRight = styled.div({ marginRight: '2rem' })
const FlexDiv = styled.div({ display: 'flex' })
const FlexSpace = styled.div({ flex: 1 })
const StyledHeader = styled.h1({ marginBottom: '1rem' })
const StyledLink = styled(Link)({ color: 'var(--link-color)' })

const SideCard = (props: {
  title: string | JSX.Element
  description: string
  image?: JSX.Element
  href?: string
  openOn: 'left' | 'right'
}): JSX.Element => {
  // FIXME: the border should extend to the edge of the display and fade
  // FIXME: the cards should animate into view
  // FIXME: this isn't really responsive
  return (
    <FlexDiv>
      {props.openOn === 'right' ? <FlexSpace /> : null}
      <SideCardContainer openOn={props.openOn}>
        {props.image != null && props.openOn === 'right' ? (
          <SideCardImageRight>{props.image}</SideCardImageRight>
        ) : null}
        <div>
          <StyledHeader>
            {props.href !== undefined ? (
              <StyledLink href={props.href}>{props.title}</StyledLink>
            ) : (
              props.title
            )}
          </StyledHeader>
          <p>{props.description}</p>
        </div>
        {props.image != null && props.openOn === 'left' ? (
          <SideCardImageLeft>{props.image}</SideCardImageLeft>
        ) : null}
      </SideCardContainer>
    </FlexDiv>
  )
}

export default SideCard
