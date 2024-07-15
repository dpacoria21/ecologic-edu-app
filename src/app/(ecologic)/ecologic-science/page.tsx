'use client';

import { items } from '@/db/db';
import { Chrono as ChronoType } from 'react-chrono';

import dynamic from 'next/dynamic';
import Loading from '../loading';

export const Chrono = dynamic(() => import('react-chrono').then(lib => lib.Chrono), {
    ssr: false,
    loading: () => <Loading />
}) as typeof ChronoType;

export default function MainPage() {

    return (
        <div className="h-screen overscroll-none pb-16">
            <Chrono 
                items={items} 
                mode="VERTICAL_ALTERNATING" 
                // disableToolbar
                
                theme={{
                    primary: '#0FCF2F',
                    // primary: '#FFF',
                    secondary: '#1DA231',
                    // secondary: '#FFF',
                    cardTitleColor: '#22a2e2',
                    cardSubtitleColor: '#013207',
                    cardMediaBgColor: '#d7ffe6',
                    cardBgColor: '#d7ffe6',
                    titleColor: '#FFF',
                    titleColorActive: '#FFF',
                }}

                buttonTexts={{
                    first: 'Jump to First',
                    last: 'Jump to Last',
                    next: 'Next',
                    previous: 'Previous',
                    jumpTo: 'Saltar a',
                    changeLayout: 'Cambiar estilo',
                    changeDensity: 'Cambiar densidad'

                }}
                
            />
            {/* <div className='mt-14' /> */}
        </div>
    );
}
