import Image from "next/image";

const testimonialsData = [
    {
        name: "Boa Hanckock",
        role: "UX Designer",
        quote:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
        rating: 5,
        image:
            "https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg",
    },
    {
        name: "Chloe Decker",
        role: "Web Developper",
        quote:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
        rating: 4.5,
        image:
            "https://mdbcdn.b-cdn.net/img/new/avatars/18.jpg",
    },
    {
        name: "Hinata Huyga",
        role: "HR Manager",
        quote:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
        rating: 4,
        image:
            "https://mdbcdn.b-cdn.net/img/new/avatars/9.jpg",
    },
];


export const ReviewCards = () => {

    return (
        <div className="container my-24 px-6 mx-auto">
            <section className="mb-32 text-[#f5f5f5] text-center">
                <h2 className="mb-12 text-5xl text-center font-sans leading-[1.15] sm:text-6xl">Testimonials</h2>
                <div className="grid md:grid-cols-3 gap-6 xl:gap-x-12 px-12 py-5" >
                    {testimonialsData.map((testimonial, index) => (
                        <div className="mb-6 lg:mb-0" key={index} >
                            <div className="relative block bg-[#111111]/30 rounded-lg shadow-lg elevated-shadow
                            transition duration-500 ease-in-out hover:-translate-y-1 hover:cursor-pointer mb-10">
                                <div className="flex items-center justify-center">
                                    <div
                                        className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-full mx-4 -mt-4 w-[25%] elevated-shadow "
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        <img
                                            src={testimonial.image} 
                                            className="w-full" 
                                            alt={testimonial.name}
                                             />
                                        <a href="#!">
                                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h5 className="text-lg font-bold mb-2 text-[#f5f5f5]">{testimonial.name}</h5>
                                    <h6 className="font-medium text-[#fcb040] mb-4">{testimonial.role}</h6>
                                    <ul className="flex justify-center mb-6">
                                        {typeof testimonial.rating === 'number' && !isNaN(testimonial.rating) && testimonial.rating > 0
                                            ? Array.from({ length: Math.floor(testimonial.rating) }).map((_, index) => (
                                                <li key={index}>
                                                    <svg
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="star"
                                                        className="w-4 text-yellow-500"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 576 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                    </svg>
                                                </li>
                                            ))
                                            : null
                                        }
                                    </ul>
                                    <p className="text-base text-[#7b7b7b]">{testimonial.quote}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};