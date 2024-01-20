import TouriestDetail from '@/lib/main/TouriestDetail/view'
import React from 'react'

interface Props {
  params: {
    id: string
  }
}
const page = ({ params }: Props) => {
  const { id } = params
  return <TouriestDetail id={id} />
}

export default page
