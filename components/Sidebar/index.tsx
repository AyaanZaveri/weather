import { IconCloud, IconStar } from '@tabler/icons'
import React from 'react'
import Button from '../Button'

interface Props {
  name: string
  photoURL: string
}

const Sidebar = ({ name, photoURL }: Props) => {
  return (
    <div className="flex h-screen w-20 justify-center">
      <div className="mt-32 flex flex-col gap-5">
        <Button variant="selected">
          <IconCloud />
        </Button>
        <Button variant="unselected">
          <IconStar />
        </Button>
      </div>
    </div>
  )
}

export default Sidebar
