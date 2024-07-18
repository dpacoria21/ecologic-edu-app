import Image from 'next/image';

interface Props {
    title: string,
    description: string,
    date_story?: Date,
    author: string,
    url: string,
}

export default function CardUser({ title, description, date_story, author, url }: Props) {

    return (
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-green-300 border-b border-gray-100 md:border-e dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-700 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{!date_story ? '' : new Date(date_story).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
                <p className="my-4">{description}</p>
                <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={url} target='_blank'>Para más información</a>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
                <Image
                    alt="User-Photo"
                    src={'https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'}
                    width={40}
                    height={40}
                    className='rounded-full'
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div>{author}</div>
                    {/* <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div> */}
                </div>
            </figcaption>
        </figure>
    );
}