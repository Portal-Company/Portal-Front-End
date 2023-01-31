import React from 'react'
import * as S from './styles'
import { ButtonProps } from './type'
import {FaRegUser} from 'react-icons/fa'

const Button: React.FC<ButtonProps> = ({
  type = 'submit',
  onClick,
  children
}) => {
  return (
    <S.Button type={type} onClick={onClick} className="button">
      <span><FaRegUser/></span>
      {children}
    </S.Button>
  )
}

export default Button
