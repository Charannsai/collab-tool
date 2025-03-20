import React from 'react'

const Navbar = () => {
    const navLinks = [
        { id: 1, title: "Home", url:"/"},
        { id: 2, title: "About", url:"/about"},
        { id: 3, title: "Contact", url:"/contact"},
        { id: 4, title: "Login", url:"/signin"},
        { id: 5, title: "Register", url:"/signup"},
    ]
  return (
    <div className='w-fit fixed right-0 flex justify-center items-center gap-14 bg-gradient-to-r from-transparent to-blue-400 p-6'>
        {
            navLinks.map((link) =>(
                <a key={link.id} href={link.url} className="p-2 font-semibold hover:bg-emerald-400 transition-all delay-150 rounded-full">{link.title}</a>
            ))
        }
    </div>
  )
}

export default Navbar
