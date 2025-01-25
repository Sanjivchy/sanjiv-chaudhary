import React from 'react'

const Card = ({title,children}: {title: string,children: React.ReactNode}) => {
  return (
    <div>
      <h2 className="pb-4 text-lg">{title}</h2>
      {children}
    </div>
  )
}

export default Card