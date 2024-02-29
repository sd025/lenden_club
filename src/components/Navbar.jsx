import React from "react";

const Navbar = () => {
  return (
    <div class="bg-white">
      {/* responsive screen */}
      <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-black bg-opacity-25"></div>

        <div class="fixed inset-0 z-40 flex">
          <div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div class="flex px-4 pb-2 pt-5">
              <button
                type="button"
                class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Close menu</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div class="space-y-6 border-t border-gray-200 px-4 py-6">
              <div class="flow-root">
                <a href="#" class="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </a>
              </div>
              <div class="flow-root">
                <a href="#" class="-m-2 block p-2 font-medium text-gray-900">
                  Create account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* laptop screen */}
      <header class="relative bg-white">
        <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="border-b border-gray-200">
            <div class="flex h-16 items-center">
              <button
                type="button"
                class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open menu</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              <div class="ml-4 flex lg:ml-0">
                <a href="#">
                  <span class="sr-only">Your Company</span>
                  <img
                    class="h-8 w-auto"
                    src="https://img.icons8.com/?size=96&id=80736&format=png"
                    alt=""
                  />
                </a>
              </div>
              <div class="ml-auto flex items-center">
                <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <button
                    href="#"
                    class="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </button>
                  <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                  <button
                    href="#"
                    class="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
