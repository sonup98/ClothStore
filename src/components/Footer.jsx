import React from "react";

const Footer = () => {
  return (
    <footer class="w-full max-w-screen-xl px-10 py-8 grid grid-cols-3 items-start gap-4">
      <div class="flex flex-col gap-8">
        <div class="space-y-2">
          <p class="uppercase text-[10px] text-black-75 tracking-wider">Info</p>
          <ul class="space-y-1 text-black-75 font-semibold text-sm">
            <li>
              <a href="#" class="hover:underline">
                Pricing /
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                About /
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contacts /
              </a>
            </li>
          </ul>
        </div>

        <div class="space-y-2">
          <p class="uppercase text-black-75 text-[10px] tracking-wider">
            Languages
          </p>
          <ul class="space-y-1 text-black-75 font-semibold text-sm">
            <li>
              <a href="#" class="hover:underline">
                ENG
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                ESP
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                SVE
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center text-black font-bold text-4xl space-y-2">
        <div class="tracking-wider text-black-75 text-9xl leading-none">
          XIV
        </div>
        <div class="tracking-wider text-black-75 text-9xl leading-none">QR</div>
        <p class="text-xs text-black-75 mt-2">Near-field communication</p>
      </div>

      <div class="flex flex-col justify-between items-end text-[10px] text-gray-400 w-full h-full pt-1">
        <p class="uppercase tracking-wider">Technologies</p>
      </div>

      <div class="col-span-3 mt-10 flex justify-between w-full text-gray-400 text-[10px] border-t pt-4">
        <span>© 2024 — copyright</span>
        <a href="#" class="hover:underline">
          privacy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
