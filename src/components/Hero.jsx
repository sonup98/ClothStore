import React from 'react'
import ClothImgCard from './ui/ClothImgCard'

const Hero = () => {
    const getImgSrc = (index) => `images/cloth-${index}.png`;
  return (
    <div className=" hero relative h-dvh w-screen overflow-x-hidden ">
        <div className='hero-category' >
                <h1 className='hero-heading'>Men</h1>
                <h1 className='hero-heading'>Women</h1>
                <h1 className='hero-heading'>Kids</h1>
        </div>
        <div>
            <input className='search' type="text" placeholder='search' />
        </div>
        <div className='grid grid-cols-3'>
        <div>
            <div >
            <h1 className='hero-heading-big'>New<br/>
            Collection</h1>
            <p>Summer<br/> 2024</p>
            </div>
            <div className='hero-pagination grid grid-cols-5'>
                <label className='bg-black-75  grid-cols-3'>GO TO SHOP</label>
                <button> Left </button>
                <button> Right </button>
            </div>

        </div>

        <div className='grid grid-cols-2'>
            <ClothImgCard path={getImgSrc(1)}/>
            <ClothImgCard path={getImgSrc(2)}/>
        </div>
        </div>

       


    </div>
  )
}

export default Hero