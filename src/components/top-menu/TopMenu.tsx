'use client';

import { titleFont } from '@/config/fonts';
import { useUIStore } from '@/store';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';

export const TopMenu = () => {

    const openSideMenu = useUIStore(state => state.openSideMenu);

    return (
        <nav className="flex px-5 justify-between items-center w-full">
            {/* Logo */}
            <div>
                <Link href={'/'}>
                    <span className={`${titleFont.className} antialiased font-bold`}>Ecología</span>
                    <span> | App</span>
                </Link>
            </div>

            {/* Center Menu */}
            <div className='hidden sm:block'>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href={'/'}>Inicio</Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href={'/histories'}>Historias</Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href={'/ecologic-science'}>Ecología</Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href={'/suggestions'}>Sugerencias</Link>
            </div>

            {/* Search, Cart, Menu */}
            <div className="flex items-center">

                {/* <Link href={'/search'} className='mx-2'>
                    <IoSearchOutline className='w-5 h-5'/>
                </Link> */}
                <button onClick={openSideMenu} className='m-2 p-2 rounded-md transition-all hover:bg-slate-400'>
                    Menu
                </button>

            </div>
        </nav>
    );
};
