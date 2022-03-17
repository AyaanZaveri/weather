import React from 'react'

interface Props {
  children?: React.ReactNode
  onClick?: () => void
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="grid place-items-center rounded-xl bg-blue-500 p-2 font-outfit text-white shadow-lg shadow-blue-200 transition-all delay-200 hover:rounded-lg focus:ring"
    >
      {children}
    </button>
  )
}

export default Button
