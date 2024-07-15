'use client';

import { IoCloseOutline, IoTicketOutline } from 'react-icons/io5';
import { SidebarLinkItem } from './SidebarLinkItem';
import { useUIStore } from '@/store';
import clsx from 'clsx';
import { FaHome, FaTree } from 'react-icons/fa';
import { MdHistoryEdu, MdMapsUgc } from 'react-icons/md';

export const Sidebar = () => {

    const {isSideMenuOpen, closeSideMenu} = useUIStore(state => state); 

    return (
        <div>

            {/* Background black */}

            {
                isSideMenuOpen && (
                    <div 
                        className="fixed top-0 w-screen h-screen z-10 bg-black opacity-30"
                    />
                )
            }

            {/* Blur */}

            {
                isSideMenuOpen && (
                    <div 
                        onClick={closeSideMenu}
                        className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
                    />
                )
            }

            <nav 
                // Efecto de slide
                className={
                    clsx(
                        'fixed p-5 right-0 top-0 w-[500px] h-screen bg-gradient-to-br from-green-400 to-green-200 z-20 shadow-2xl transform transition-all duration-300',
                        {
                            'translate-x-full': !isSideMenuOpen
                        }
                    )
                }
            >

                <IoCloseOutline 
                    size={50}
                    className='absolute top-5 right-5 cursor-pointer'
                    onClick={closeSideMenu}
                />


                {/* Menu */}

                <div className=' py-5'/>

                <SidebarLinkItem 
                    path='/'
                    icon={<FaHome size={30}/>}
                    label='Inicio'
                />
                <SidebarLinkItem 
                    path='/histories'
                    icon={<MdHistoryEdu size={30}/>}
                    label='Historias'
                />
                <SidebarLinkItem 
                    path='/ecologic-science'
                    icon={<FaTree size={30}/>}
                    label='Ecología'
                />
                <SidebarLinkItem 
                    path='/suggestions'
                    icon={<MdMapsUgc size={30}/>}
                    label='Sugerencias'
                />

                {/* Line Separator */}

            </nav>

        </div>
    );
};
