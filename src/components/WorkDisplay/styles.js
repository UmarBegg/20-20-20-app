import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${theme.spacing.padding};
  background-color: ${theme.colors.background};
  border-radius: ${theme.spacing.borderRadius};
  box-shadow: 0 4px 10px ${theme.colors.shadow};
`

export const WorkTitle = styled.h1`
  font-size: ${theme.sizes.largeText};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.margin};
`

export const WorkSubtitle = styled.p`
  font-size: ${theme.sizes.mediumText};
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacing.margin};
`

export const MotivationalMessage = styled.p`
  font-size: ${theme.sizes.smallText};
  color: ${theme.colors.secondary};
  font-style: italic;
`
