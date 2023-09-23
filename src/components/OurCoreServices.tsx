import Image from "next/image"
import Link from "next/link"

import shopiy from "../../public/electrical3.jpeg"
import customeWebApp from "../../public/Custom-Web-App-Development.jpg"
import mobileApp from "../../public/Mobile-App-Development.jpg"
import digitalMarketing from "../../public/Digital-Marketing-1.jpg"


const services = [
    {
        image: shopiy,
        alt: "Commercial Projects",
        title: "Commercial Projects",
        description: "Set up your online business with the best eCommerce platform, Shopify. As the top Shopify developers in Pakistan, we ensure the success of your online store."
    },
    {
        image: customeWebApp,
        alt: "Restoration Projects",
        title: "Restoration Projects",
        description: "We are the leading web development company in Pakistan that provides end-to-end custom web app development solutions to solve your unique business challenges."
    },
    {
        image: mobileApp,
        alt: "TOXIN REMOVAL",
        title: "TOXIN REMOVAL",
        description: "We provide full-cycle mobile application development services to develop high-performing and feature-rich mobile apps for both Android and iOS devices."
    },
    {
        image: digitalMarketing,
        alt: "Residential Projects",
        title: "Residential Projects",
        description: "We offer digital marketing solutions such as SEO, Social Media Marketing, and Google Ads to help our clients achieve success with transformative marketing strategies."
    }
];

const ServiceItem = ({ image, alt, title, description}: any) => (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden 
        hover:shadow-xl hover:shadow-black/30 rounded-lg hover:-translate-y-3
        transition-all duration-500 transform-gpu">
        <div className="h-96 w-80">
            <Image
                className="h-full w-full object-cover transition-transform duration-500 
          group-hover:rotate-3 group-hover:scale-125"
                src={image}
                alt={alt}
            />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black 
        group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-start justify-center 
        px-9 text-left transition-all duration-500 group-hover:translate-y-0">
            <div className="flex items-center mb-2 group-hover:opacity-100">
                <h1 className="font-['Calibri'] text-2xl text-white ml-2">
                    {title}
                </h1>
            </div>
            <p className="mb-3 pt-2 text-base text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {description}
            </p>
        </div>
    </div>
);





const OurCoreServices = () => {
    return (
        <>
            <div className="flex mb-5 lg:-mb-16 items-center justify-center">
                <div>
                    <p className="mt-5 text-5xl text-center font-sans leading-[1.15] text-[#f5f5f5] sm:text-6xl">
                        Our Core Services
                    </p>
                </div>
            </div>
            <div className="flex min-h-screen items-center justify-center">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <ServiceItem key={index} {...service} />
                    ))}
                </div>
            </div>
            <div className="flex mb-5 lg:-mt-16 sm:mt-5 md:mt-5 items-center justify-center">
                <Link href="/services">
                    <button className="relative border-2 border-[#fcb040] bg-transparent py-2.5 px-5 font-medium uppercase 
                    text-[#fcb040] transition-all before:absolute before:left-0 before:top-0 before:-z-10 before:h-full 
                    before:w-full before:origin-top-left before:scale-x-0 before:bg-[#fcb040] before:transition-transform 
                    before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 
                    rounded-lg duration-500 transform hover:-translate-y-1">
                        View More &rarr;
                    </button>
                </Link>
            </div>
        </>
    )
}

export default OurCoreServices