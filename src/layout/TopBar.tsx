import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import githubMark from '../../public/github-mark.svg'

const TopBarContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  borderBottom: '1px solid var(--divider-color)',
  marginBottom: '0.8rem',
  backdropFilter: 'blur(8px)',
})

const TopBarSpacer = styled.div({ height: '4rem' })

const StyledLink = styled(Link, {
  shouldForwardProp: prop => prop !== 'currentHref' && prop !== 'last',
})<{ currentHref?: string; href: string; last?: boolean }>(props => ({
  color: props.currentHref === props.href ? 'var(--link-color)' : 'var(--color)',
  fontWeight: props.currentHref === props.href ? 'bold' : 'normal',
  textDecoration: /* props.currentHref !== props.href ? 'underline' : */ 'none',
  marginRight: props.last === true ? '0px' : '8px',
}))
const UnstyledLink = styled(Link)({ color: 'var(--color)', textDecoration: 'none' })

const Divider = styled.div({
  borderLeft: '1px solid var(--divider-color)',
  height: '28px',
  marginRight: '8px',
})

const GitHubImage = styled(Image)({
  '@media (prefers-color-scheme: dark)': { filter: 'brightness(0) invert(1)' },
})

const TopBar = (): React.JSX.Element => {
  const router = useRouter()

  return (
    <>
      <TopBarContainer>
        <h2 css={{ flex: 1 }}>
          <UnstyledLink href='/'>retrixe's site</UnstyledLink>
        </h2>
        <StyledLink href='/' currentHref={router.pathname}>
          Home
        </StyledLink>
        <Divider />
        <StyledLink href='/experiments' currentHref={router.pathname}>
          Experiments
        </StyledLink>
        <Divider />
        <StyledLink
          href='https://github.com/retrixe'
          target='_blank'
          rel='noopener noreferrer'
          last
        >
          <GitHubImage src={githubMark as string} alt='GitHub' height={28} width={28} />
        </StyledLink>
      </TopBarContainer>
      <TopBarSpacer />
    </>
  )
}

export default TopBar
