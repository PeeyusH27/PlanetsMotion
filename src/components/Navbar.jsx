import React from 'react'
import { NavbarData } from '../data/MockData'
import { MdMenu } from 'react-icons/md'
import { FaApple, FaRegUser } from 'react-icons/fa'


const Navbar = () => {
    return (
        <nav className='text-white py-5'>
            <div className="container flex justify-between items-center">
                {/*  Logo Section */}
                <div className='flex items-center gap-2 text-3xl font-semibold'>
                    Planets
                </div>
                {/*  Menu Section */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-4'>
                        {
                            NavbarData && NavbarData.map((i) => {
                                return <li key={i.id}>
                                    <a href={i.link} className='inline-block text-base py-2 px-3 uppercase'>{i.title}</a>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <button className='text-xl ps-14' ><FaRegUser /></button>

                {/* Hamburger Section */}
                <div className='md:hidden'>
                    <MdMenu className='text-4xl' />
                </div>

            </div>
        </nav>
    )
}

export default Navbar