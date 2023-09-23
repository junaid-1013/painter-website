import Image from "next/image"

import shopiy from "../../../public/Plumbers8.jpg"
import customeWebApp from "../../../public/Custom-Web-App-Development.jpg"
import mobileApp from "../../../public/Mobile-App-Development.jpg"
import digitalMarketing from "../../../public/Digital-Marketing-1.jpg"
import crmSoftware from "../../../public/services-4.jpg"
import seo from "../../../public/services-5.jpg"


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
        alt: "Toxin Removal",
        title: "Toxin Removal",
        description: "We provide full-cycle mobile application development services to develop high-performing and feature-rich mobile apps for both Android and iOS devices."
    },
    {
        image: digitalMarketing,
        alt: "Residential Projects",
        title: "Residential Projects",
        description: "We offer digital marketing solutions such as SEO, Social Media Marketing, and Google Ads to help our clients achieve success with transformative marketing strategies."
    },
    {
        image: crmSoftware,
        alt: "Bathroom Cleaning",
        title: "Bathroom Cleaning",
        description: "CRM software (customer relationship management software) is a tool that's designed to help your organization offer your customers a unique and seamless experience"
    },
    {
        image: seo,
        alt: "Floor Renovation",
        title: "Floor Renovation",
        description: "We are heavily focused on search engine optimization and we provide the best solution to your every problem related to ranking higher, increasing organic traffic, and getting leads."
    },
];

const ServiceItem = ({ image, alt, title, description }: any) => (
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

export default function Home() {
    return (
        <section className="w-full flex-center flex-col mb-5">
            <br />
            <br />
            <br />
            <div className="flex flex-col mb-5 items-center justify-center">
                <div>
                    <p className="mt-5 text-5xl text-center font-sans leading-[1.15] text-[#f5f5f5] sm:text-6xl">
                        Our Services
                    </p>
                </div>
                <div className="text-[#7b7b7b] mt-5 text-lg text-center sm:text-xl max-w-2xl">
                    <p>
                        We are doing our very best to provide you with the best possible service.
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
        </section>
    )
}
