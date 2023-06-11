import styled from '@emotion/styled'
import Link from 'next/link'

const TopBarContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  borderBottom: '1px solid var(--color)',
})

const StyledLink = styled(Link, {
  shouldForwardProp: prop => prop !== 'currentHref' && prop !== 'last',
})<{ currentHref: string; href: string; last?: boolean }>(props => ({
  color: props.currentHref === props.href ? '#ff007f' : 'var(--color)',
  textDecoration: props.currentHref === props.href ? 'underline' : 'none',
  marginRight: props.last === true ? '0px' : '8px',
}))

const TopBar = ({ currentHref }: { currentHref: string }): JSX.Element => (
  <TopBarContainer>
    <h2 css={{ flex: 1 }}>retrixe's site</h2>
    <StyledLink href='/' currentHref={currentHref}>
      Home
    </StyledLink>
    <StyledLink href='/tictactoe' currentHref={currentHref} last>
      Tic-Tac-Toe
    </StyledLink>
  </TopBarContainer>
)

export default TopBar
