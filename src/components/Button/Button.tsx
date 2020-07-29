import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export interface Props {
  /**
   * required Text or Icon
   */
  children: React.ReactNode
  /**
   * @default "primary"
   */
  variant?: 'primary' | 'secondary'
  handleClick?: VoidFunction
  to?: string
}

const Button: React.FC<Props> = ({ children, variant = 'primary', handleClick, to }) => (
  <>
    {to ? (
      <StyledLink to={to} variant={variant}>
        {children}
      </StyledLink>
    ) : (
      <StyledButton variant={variant} onClick={handleClick}>
        {children}
      </StyledButton>
    )}
  </>
)
const baseButton = css<{ variant: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  appearance: none;
  font-size: 16px;
  min-width: 100px;
  transition: background-color 0.25s;
  outline: none;
  border: 1px solid #ccc;
  span {
    margin-right: 8px;
  }
  ${(props) => {
    let color: string
    let hoverColor: string
    switch (props.variant) {
      case 'primary':
        color = '#4dd0e1'
        hoverColor = '#88ffff'
        break
      case 'secondary':
        color = '#ffd54f'
        hoverColor = '#ffff81'
        break
      default:
        color = '#e0e0e0'
        hoverColor = '#efefef'
        break
    }
    return `
            background-color: ${color};
            &:hover {
                background-color: ${hoverColor};
            }
        `
  }}
`

const StyledLink = styled(Link)`
  ${baseButton}
`

const StyledButton = styled.button`
  ${baseButton}
`

export default Button
