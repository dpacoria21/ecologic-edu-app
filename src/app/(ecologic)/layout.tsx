import { Footer } from '@/components/footer/Footer';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { TopMenu } from '@/components/top-menu/TopMenu';

export default function EcologicLayout ({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <main className='min-h-screen min-w-screen bg-gradient-to-br from-green-400 to-green-200 p-5'>

            <TopMenu />
            <Sidebar />

            {children}

            <Footer />
        </main>
    );
}