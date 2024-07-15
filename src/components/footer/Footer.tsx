import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export const Footer = () => {
    return (
        <div className="flex w-full justify-center text-xs pb-8 pt-8">

            <Link href={'/'}>
                <span className={`${titleFont.className} antialiased font-bold`}>Ecologic </span>
                <span>| App</span>
                <span>© {new Date().getFullYear()}</span>
            </Link>

            <Link target='_blank' href={'https://www.unsa.edu.pe/'} className='mx-3'>
                UNSA
            </Link>

        </div>
    );
};
