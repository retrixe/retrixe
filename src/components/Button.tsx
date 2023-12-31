import styled from '@emotion/styled'

const Button = styled.button({
  flexGrow: 1,
  padding: '8px',
  borderRadius: '8px',
  border: '1px solid var(--color)',
  color: 'var(--color)',
  backgroundColor: 'var(--background-color)',
  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  ':hover': {
    backgroundColor: 'var(--color)',
    color: 'var(--background-color)',
  },
})

export default Button
