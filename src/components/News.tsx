import blogs1 from "../../public/blogs1.png"
import blogs2 from "../../public/blogs2.jpg"
import blogs3 from "../../public/blogs3.png"
import Image from "next/image"
import Link from "next/link"


const articleData = [
    {
        imageSrc: blogs1,
        category: 'Digital paint',
        title: 'Maintaining A Beautiful Home With Kids',
        description:
            'Painting has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...',
    },
    {
        imageSrc: blogs2,
        category: 'Oil Paint',
        title: 'Know When To Prime Before You Paint',
        description:
            'It is important to have a large family, to drink and not to drink. Tomorrow nor the price before. But the lake wants, the element and takes up ...',
    },
    {
        imageSrc: blogs3,
        category: 'Ink paint',
        title: 'House Painting',
        description:
            'The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to ...',
    },
];


export const News = () => {
    return (
        <>
            <div className="flex mb-5 items-center justify-center">
                <div>
                    <p className="mt-5 text-5xl text-center font-sans leading-[1.15] text-[#f5f5f5] sm:text-6xl">
                        News
                    </p>
                </div>
            </div>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap px-2">
                    {articleData.map((article, index) => (
                        <div
                            key={index}
                            className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 py-4"
                        >
                            <article className=" rounded-lg shadow-lg bg-[#111111]/30">
                                <a href="#" className="image-wrapper block">
                                    <Image
                                        alt="Placeholder"
                                        className="block rounded-lg h-auto w-full transition-transform duration-300 transform 
                                        hover:translate-y-[-5px] hover:elevated-shadow"
                                        src={article.imageSrc}
                                    />
                                </a>
                                <header className="flex flex-col items-start justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <a href="#" className="group text-[#fcb040] font-['Calibri'] text-bold transition duration-300">
                                            {article.category}
                                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#fcb040]"></span>
                                        </a>
                                    </h1>
                                    <h1 className="text-lg">
                                        <a className="text-[#7b7b7b]" href="#">
                                            {article.title}
                                        </a>
                                    </h1>
                                </header>
                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                    <p className="ml-2 text-sm text-white">{article.description}</p>
                                </footer>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex mb-5 items-center justify-center">
                <Link href="/services">
                    <button className="relative border-2 border-[#fcb040] bg-transparent py-2.5 px-5 font-medium uppercase 
                    text-[#fcb040] transition-all before:absolute before:left-0 before:top-0 before:-z-10 before:h-full 
                    before:w-full before:origin-top-left before:scale-x-0 before:bg-[#fcb040] before:transition-transform 
                    before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 
                    rounded-lg duration-500 transform hover:-translate-y-1">
                        See All News &rarr;
                    </button>
                </Link>
            </div>

        </>
    )
}
