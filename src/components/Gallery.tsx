import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import gallery1 from "../../public/electrical1.jpg"
import gallary2 from "../../public/blogs2.jpg"
import gallary3 from "../../public/blogs3.png"
import gallery4 from "../../public/painting4.jpeg"



const articleData = [
    {
        imageSrc: gallery1,
        title: 'Maintaining A Beautiful Home With Kids',
    },
    {
        imageSrc: gallary2,
        title: 'Know When To Prime Before You Paint',
    },
    {
        imageSrc: gallary3,
        title: 'House Painting',
    },
    {
        imageSrc: gallery4,
        title: 'House Painting',
    },
    {
        imageSrc: gallary3,
        title: 'House Painting',
    },
    {
        imageSrc: gallery4,
        title: 'House Painting',
    },
];


export const Gallery = () => {
    return (
        <>
            <div className="flex mb-5 lg:-mb-16 items-center justify-center">
                <div>
                    <p className="mt-5 text-5xl text-center font-sans leading-[1.15] text-[#f5f5f5] sm:text-6xl">
                        Gallery
                    </p>
                </div>
            </div>
            <div className="flex min-h-screen items-center justify-center px-16">
                {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"> */}
                <Swiper
                    breakpoints={{
                        // width >= 300
                        300: {
                            slidesPerView: 2,
                            spaceBetween: 100
                        },
                        // width >= 1000
                        1000: {
                            slidesPerView: 3,
                            spaceBetween: 0
                        },
                        // width >= 1260
                        1260: {
                            slidesPerView: 4,
                            spaceBetween: 1,
                        }
                    }}
                    modules={[Navigation, A11y]}
                    spaceBetween={1}
                    slidesPerView={4}
                >
                    {articleData.map((article, index) => (
                        <SwiperSlide>
                            {/* <div key={index}
                                className="group relative cursor-pointer items-center justify-center overflow-hidden 
                                hover:shadow-xl hover:shadow-black/30 rounded-lg hover:-translate-y-3
                                transition-all duration-500 transform-gpu"> */}
                                <div key={index} className="h-96 w-80">
                                    <Image
                                        className="h-full w-full cursor-pointer object-cover transition-transform duration-500 
                                        hover:scale-110"
                                        src={article.imageSrc}
                                        alt={article.title}
                                    />
                                </div>
                            {/* </div> */}
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* </div> */}
            </div>
            <div className="flex mb-5 lg:-mt-16 sm:mt-5 md:mt-5 items-center justify-center">
                <Link href="/gallery">
                    <button className="relative border-2 border-[#fcb040] bg-transparent py-2.5 px-5 font-medium uppercase 
                    text-[#fcb040] transition-all before:absolute before:left-0 before:top-0 before:-z-10 before:h-full 
                    before:w-full before:origin-top-left before:scale-x-0 before:bg-[#fcb040] before:transition-transform 
                    before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 
                    rounded-lg duration-500 transform hover:-translate-y-1">
                        See All Gallery &rarr;
                    </button>
                </Link>
            </div>

        </>
    )
}
