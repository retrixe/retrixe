import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
  color: props.currentHref === props.href ? 'var(--link-color)' : 'var(--color)',
  textDecoration: props.currentHref === props.href ? 'underline' : 'none',
  marginRight: props.last === true ? '0px' : '8px',
}))

const TopBar = (): JSX.Element => {
  const router = useRouter()

  return (
    <TopBarContainer>
      <h2 css={{ flex: 1 }}>retrixe's site</h2>
      <StyledLink href='/' currentHref={router.pathname}>
        Home
      </StyledLink>
      <StyledLink href='/tictactoe' currentHref={router.pathname} last>
        Tic-Tac-Toe
      </StyledLink>
    </TopBarContainer>
  )
}

export default TopBar
