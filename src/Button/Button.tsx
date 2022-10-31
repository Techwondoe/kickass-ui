import React from 'react'

interface IVariants {
  primary: string
  secondary: string
  primaryGhost: string
}

const variants: IVariants = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
  secondary: 'bg-green-400 text-white hover:bg-green-500',
  primaryGhost: 'bg-transparent text-indigo-600 border border-indigo-600'
}

export default function Button(props: IButton) {
  const {
    children,
    variant = 'primary',
    rounded = false,
    block = false,
    disabled = false,
    onClick = () => {},
    type = 'button'
  } = props

  const classname = `${variants[variant]} ${
    rounded ? 'rounded-full' : 'rounded'
  } ${block ? 'block w-full ' : ''} h-10 px-4`

  return (
    <button
      type={type}
      className={classname}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

interface IButton {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'primaryGhost'
  rounded?: boolean
  block?: boolean
  disabled?: boolean
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
}
