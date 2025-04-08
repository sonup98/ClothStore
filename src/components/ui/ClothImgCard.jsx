import React from 'react'

const ClothImgCard = ({path}) => {
  return (
    <div className='imgCard p-2 width-full h-full relative'>
        <img src={path} alt="img" />
    </div>
  )
}

export default ClothImgCard