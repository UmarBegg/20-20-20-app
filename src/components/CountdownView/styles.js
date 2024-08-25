import { theme } from '../../styles/theme'
import styled from 'styled-components'

export const CountdownContainer = styled.div`
  text-align: center;
`

export const ResetButton = styled.button`
  margin-top: ${theme.spacing.margin};
  padding: 10px 20px;
  font-size: ${theme.sizes.mediumText};
  color: white;
  background-color: ${theme.colors.accent};
  border: none;
  border-radius: ${theme.spacing.borderRadius};
  cursor: pointer;
`
