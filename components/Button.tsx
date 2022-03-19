import React from 'react'

interface Props {
  children?: React.ReactNode
  onClick?: () => void
  variant?: string
}

const variants = {
  selected: 'shadow-lg shadow-orange-200 bg-orange-500 text-white focus:ring focus:ring-orange-200',
  unselected: 'text-slate-600 hover:text-orange-500',
}

const Button = ({ children, onClick, variant }: Props) => {
  // @ts-ignore
  const selectedVariant = variants[variant]

  return (
    <button
      onClick={onClick}
      className={`grid place-items-center rounded-xl p-2 font-outfit transition-all duration-500 ease-in-out hover:rounded-lg ${selectedVariant}`}
    >
      {children}
    </button>
  )
}

export default Button
