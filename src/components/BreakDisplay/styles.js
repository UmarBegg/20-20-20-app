import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const BreakContainer = styled.div`
  text-align: center;
  font-size: ${theme.sizes.mediumText};
  padding: ${theme.spacing.padding};
  background-color: ${theme.colors.background};
  border-radius: ${theme.spacing.borderRadius};
  box-shadow: 0 4px 10px ${theme.colors.shadow};
`
