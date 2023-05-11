import React from 'react'
import './styles.css'

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string
}

export const Button: React.FunctionComponent<IButtonProps> = ({ label }: IButtonProps) => {
  if (!label) {
    label = 'Button'
  }

  return <button className='button'>{label}</button>
}
