"use client";
import Hero from "@/components/Hero"
import WhyYouChoseUs from "@/components/WhyYouChoseUs"
import { ReviewCards } from "@/components/ReviewCards"
import OurCoreServices from "@/components/OurCoreServices"
import { Gallery } from "@/components/Gallery"
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <Hero/>
      <OurCoreServices/>
      <Gallery/>
      <WhyYouChoseUs />
      <ReviewCards />
      <FloatingWhatsApp
        phoneNumber="+971554079685"
        accountName="Painters"
        avatar="https://www.canva.com/design/DAFt8mnRJyM/UqiZjOzMXasBYxZk-dWrIg/view?utm_content=DAFt8mnRJyM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />

    </section>
  )
}
