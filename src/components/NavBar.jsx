import React from "react";

const NavBar = () => {
  return (
    <div class="flex items-center justify-between mb-10">
      <div class="flex items-center gap-4">
        <button class="text-xl">☰</button>
        <nav class="flex gap-6 text-sm uppercase tracking-wide text-gray-700">
          <a href="#">Home</a>
          <a href="#">Collections</a>
          <a href="#">New</a>
        </nav>
      </div>

      <div>
        <div class="rotate-45 w-4 h-4 bg-black">CLOTH STORE</div>
      </div>

      <div class="flex items-center gap-4">
        <button class="w-8 h-8 rounded-full border flex items-center justify-center">
          ♡
        </button>
        <div class="flex items-center gap-1 bg-black text-black px-2 py-1 rounded-full text-sm">
          Cart
          <span class="inline-block w-4 h-4 rounded-full bg-black text-black text-xs text-center">
            0
          </span>
        </div>
        <button class="w-8 h-8 rounded-full border flex items-center justify-center">
          👤
        </button>
      </div>
    </div>
  );
};

export default NavBar;
