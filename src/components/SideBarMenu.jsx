import React from 'react'

const SideBarMenu = () => {
  return (
    
    <div class="flex flex-col gap-6">
      <ul class="space-y-2 text-sm tracking-widest uppercase text-gray-700">
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
    
    
      <div class="relative">
        <input type="text" placeholder="Search"
          class="pl-10 pr-4 py-2 bg-gray-300 text-sm placeholder-gray-700 w-[25%] rounded" />
        <svg class="absolute left-3 top-2.5 w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M12.9 14.32a8 8 0 111.414-1.414l5.387 5.387-1.414 1.414-5.387-5.387zM8 14A6 6 0 108 2a6 6 0 000 12z"
            clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    
  )
}

export default SideBarMenu