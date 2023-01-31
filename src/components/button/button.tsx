import React from 'react'
import * as S from './styles'
import { ButtonProps } from './type'

const Button: React.FC<ButtonProps> = ({
  type = 'submit',
  Icon,
  onClick,
  children
}) => {
  return (
    <S.Button type={type} onClick={onClick} className="button">
      <span>{Icon}</span>
      {children}
    </S.Button>
  )
}

export default Button
