import { ButtonHTMLAttributes } from 'react'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  Icon:React.ReactNode,
  children: React.ReactNode,
} & ButtonTypes
