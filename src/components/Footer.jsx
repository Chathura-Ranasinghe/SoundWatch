import React from 'react'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full">
        <div className='rounded-lg shadow-inner shadow-slate-300 my-4 mx-2'>
            <div className="flex w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
                <span className="text-xs sm:text-sm tracking-wide">© 2024 <a href="https://chathura-ranasinghe.web.app/" className="text-blue-400 hover:underline font-medium">Chathura</a>. All Rights Reserved.
            </span>
            </div>
        </div>
    </footer>
  )
}
