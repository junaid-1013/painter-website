import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../../public/1.jpg"
import img2 from "../../public/2.jpg"
import img3 from "../../public/4.png"


const Hero = () => {

    const images = [
		img1,
		img2,
		img3
	];

    const zoomInProperties = {
		scale: 1,
		duration: 5000,
		transitionDuration: 300,
		infinite: true,
		prevArrow: (
			<div className="ml-10 top-40 md:top-72">
				<AiOutlineLeft className="h-8 w-8 text-[#111111] cursor-pointer" />
			</div>
		),
		nextArrow: (
				<div className="mr-10 top-40 md:top-72">
				   <AiOutlineRight className="h-8 w-8 text-[#111111] cursor-pointer" />
			    </div>
		),
	};
    return (
        <div className="w-full h-screen">
			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center md:items-center items-start w-screen h-screen relative">
						<Image
							className="w-screen"
							src={each}
                            alt='Hero'
						/>
					</div>
				))}
			</Zoom>
		</div>


    )
}

export default Hero