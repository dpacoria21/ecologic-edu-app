import Image from 'next/image';

export default function MainPage() {

    return (
        <div className="min-h-screen overscroll-none flex justify-center items-center">
            <div className="flex flex-col min-h-dvh">
                <section className="w-full">
                    <div className="container space-y-10 xl:space-y-16">
                        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16 my-28">
                            <div>
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Potenciando la Conciencia Ambiental
                                </h1>
                            </div>
                            <div className="flex flex-col items-start space-y-4">
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    Nuestra misión es educar al público sobre el cuidado del medio ambiente, mostrar proyectos de impacto y
                                    proporcionar sugerencias de vida sostenible para crear un futuro más verde.
                                </p>
                            </div>
                        </div>

                        <div className='w-full flex justify-center items-center'>  
                            <Image 
                                alt="ecologic"
                                src='https://www.esan.edu.pe/images/blog/2016/04/20/gestionambiental-principal.jpg'
                                width={1000}
                                height={100}
                                className='rounded-md my-16 transition-all hover:shadow-md hover:scale-105'
                            />
                        </div>
                        {/* <img
                            src="/placeholder.svg"
                            width="1270"
                            height="300"
                            alt="Nature Hero"
                            className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
                        /> */}
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="pointer-none rounded-lg bg-card text-green-900 text-card-foreground bg-green-200 hover:scale-105 hover:shadow-xl transition-all h-full" data-v0-t="card">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Educar</h3>
                                <p className="text-sm text-muted-foreground">
                                    Aprende sobre el cuidado del medio ambiente y cómo hacer la diferencia.
                                </p>
                            </div>
                            <div className="p-6">
                                <div className="grid gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-6 h-6 text-primary-foreground"
                                            >
                                                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold">Guías Ambientales</h3>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Explora nuestras guías completas sobre vida sostenible, conservación y prácticas ecológicas.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-none rounded-lg bg-card text-green-900 text-card-foreground bg-green-200 hover:scale-105 hover:shadow-xl transition-all h-full" data-v0-t="card">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Proyectos</h3>
                                <p className="text-sm text-muted-foreground">Ve el impacto de nuestras iniciativas ambientales en acción.</p>
                            </div>
                            <div className="p-6">
                                <div className="grid gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-6 h-6 text-primary-foreground"
                                            >
                                                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                                                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold">Proyectos de Sostenibilidad</h3>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Descubre nuestros proyectos en curso que tienen como objetivo proteger y restaurar el medio ambiente.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-none rounded-lg bg-card text-green-900 text-card-foreground bg-green-200 hover:scale-105 hover:shadow-xl transition-all h-full" data-v0-t="card">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Sugerencias</h3>
                                <p className="text-sm text-muted-foreground">Obtén consejos prácticos para una vida sostenible.</p>
                            </div>
                            <div className="p-6">
                                <div className="grid gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-6 h-6 text-primary-foreground"
                                            >
                                                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                                                <path d="M9 18h6"></path>
                                                <path d="M10 22h4"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold">Vida Sostenible</h3>
                                    </div>
                                    <p className="text-muted-foreground">Encuentra consejos prácticos para adoptar hábitos y prácticas sostenibles en tu vida diaria.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}