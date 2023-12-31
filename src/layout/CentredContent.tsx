import styled from '@emotion/styled'

const CentredContent = styled.div({
  padding: '8px',
  // This is higher than the width, else it looks weird with the extra margin on top. 968px is good.
  '@media (min-width: 968px)': {
    width: '900px',
    marginTop: '1rem',
    alignSelf: 'center',
  },
})

export default CentredContent
