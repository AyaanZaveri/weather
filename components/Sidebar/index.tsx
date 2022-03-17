import { IconCloud } from '@tabler/icons'
import React from 'react'

interface Props {
  name: string
  photoURL: string
}

const Sidebar = ({ name, photoURL }: Props) => {
  return (
    <div className="ml-3 flex h-screen w-14 rounded-lg bg-gray-50">
      <div className="mx-5 flex w-full flex-col">
        <button>
          <IconCloud />
        </button>
      </div>
    </div>
  )
}

export default Sidebar
