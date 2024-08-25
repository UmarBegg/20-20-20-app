import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const SetupContainer = styled.div`
  text-align: center;
  padding: ${theme.spacing.padding};
`

export const SetupLabel = styled.label`
  font-size: ${theme.sizes.mediumText};
  color: ${theme.colors.primary};
  margin-right: ${theme.spacing.margin};
`

export const SetupInput = styled.input`
  margin-left: 10px;
  width: 50px;
  padding: 5px;
  font-size: ${theme.sizes.smallText};
  color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.secondary};
  border-radius: ${theme.spacing.borderRadius};
`

export const StartButton = styled.button`
  padding: 10px 20px;
  font-size: ${theme.sizes.smallText};
  color: white;
  background-color: ${theme.colors.accent};
  border: none;
  border-radius: ${theme.spacing.borderRadius};
  cursor: pointer;
  margin-top: ${theme.spacing.marginx2};
`
export const Title = styled.h1`
  font-size: ${theme.sizes.largeText};
  color: ${theme.colors.primary};
`
