import React from 'react'
import ClothImgCard from './ui/ClothImgCard'

const Hero = () => {
   const getImgSrc = (index) => `images/cloth-${index}.png`;
  return (
    // <div className=" hero relative h-dvh w-screen overflow-x-hidden ">
    //     <div className='hero-category' >
    //             <h1 className='hero-heading'>Men</h1>
    //             <h1 className='hero-heading'>Women</h1>
    //             <h1 className='hero-heading'>Kids</h1>
    //     </div>
    //     <div>
    //         <input className='search' type="text" placeholder='search' />
    //     </div>
    //     <div className='grid grid-cols-3'>
    //     <div>
    //         <div >
    //         <h1 className='hero-heading-big'>New<br/>
    //         Collection</h1>
    //         <p>Summer<br/> 2024</p>
    //         </div>
    //         <div className='hero-pagination grid grid-cols-5'>
    //             <label className='bg-black-75  grid-cols-3'>GO TO SHOP</label>
    //             <button> Left </button>
    //             <button> Right </button>
    //         </div>

    //     </div>

    //     <div className='grid grid-cols-2'>
    //         <ClothImgCard path={getImgSrc(1)}/>
    //         <ClothImgCard path={getImgSrc(2)}/>
    //     </div>
    //     </div>

       


    // </div>
    
    



    <div class="flex gap-8 items-start mt-10" >
        
  
  <div class="w-1/3 ">
    <h1 class="text-5xl font-black leading-tight tracking-tight">NEW <br /> COLLECTION</h1>
    <p class=" text-sm text-gray-700 mt-20">Summer<br />2024</p>

    


    <div class="flex gap-2 mt-5">
        <button class="bg-gray-300 text-black px-4 py-2 text-sm flex items-center gap-2">
            Go To Shop
        <span class="text-xl">→</span>
        </button>
      <button class="p-2 bg-gray-300">◀</button>
      <button class="p-2 bg-gray-300">▶</button>
    </div>
  </div>


  <div class="flex ml-20 gap-5">
    <img src={getImgSrc(1)} class="w-64 h-[350px] object-cover" />
    <img src={getImgSrc(2)} class="w-64 h-[350px] object-cover" />
  </div>
</div>

  )
}

export default Hero