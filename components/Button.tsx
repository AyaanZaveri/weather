import React from 'react'

interface Props {
  children?: React.ReactNode
  onClick?: () => void
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="grid font-outfit p-2 place-items-center rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-200 transition-all delay-200 hover:rounded-lg focus:ring"
    >
      {children}
    </button>
  )
}

export default Button
