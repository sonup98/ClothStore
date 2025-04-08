import React from 'react'

const Hero = () => {
  return (
    <div className=" relative h-dvh w-screen overflow-x-hidden ">
        <div className='mt-20' >
                <h1 className='hero-heading'>Men</h1>
                <h1 className='hero-heading'>Women</h1>
                <h1 className='hero-heading'>Kids</h1>
        </div>
        <div>
            <input className='search' type="text" placeholder='search' />
        </div>
        <div>
            <h1>New
            Collection</h1>
            <p>Summer 2024</p>
        </div>

        <div>
            Cloth Image Card
            Cloth Image Card
        </div>

        <div>pagination</div>


    </div>
  )
}

export default Hero