'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const testimonials = [
    {
      image: "/works/WPP.svg",
      text: "we assist Action+ & WPP to design their annual event in Indonesia, adjusting the visuals with Balinese culture.",
      link: "https://www.behance.net/gallery/227977991/WPP-Stream-Indonesia-2025-Event-Design"
    },
    {
      image: "/works/BBF.svg",
      text: "we translated the IISMA vision regarding study abroad into visual concepts and event design.",
      link: "https://www.behance.net/gallery/227900717/Beyond-Borders-Fest-2025-Event-Design"
    },
    {
      image: "/works/BPC.svg",
      text: "we helped BudiPekerti Creative to build a logo that matches education organizations as their target market.",
      link: "https://www.behance.net/gallery/227809623/BudiPekerti-Creative-Logo-Design"
    },
    {
      image: "/works/UII.svg",
      text: "we translated the UII FPSCS brand value into key visual concepts and merchandise design.",
      link: "https://www.behance.net/gallery/209227837/FPSCS-UII-Official-Merchandise"
    },
    {
      image: "/works/CC.svg",
      text: "we assist Action+ & Coca-Cola Company Indonesia in designing their brand activation events.",
      link: "https://www.behance.net/gallery/228225707/Coca-Cola-Brand-Activation-Design"
    },
    {
      image: "/works/BSP.svg",
      text: "we assist Behind Studio & Pertamina Jogja in designing social media that matches their customer expectations.",
      link: "https://www.behance.net/gallery/209453751/Pertamina-Jogja-Surabaya-Social-Media-Design"
    },
  ];
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Background Ego */}
      <div id="home">
        <Image
          src="/back_ego.svg"
          alt="Ego Background"
          width={100}
          height={24}
          className="absolute w-full sm:w-1/2 h-auto pointer-events-none"
        />
      </div>

      {/* Navigation bar */}
      <div className="relative flex justify-end px-6 sm:px-12 md:px-24 lg:px-36 py-6 sm:py-8 md:py-16 lg:py-24">
        <Link href="#works" className="text-xl px-2 sm:px-4 py-2 hover:underline">Works</Link>
        <Link href="#contact" className="text-xl px-2 sm:px-4 py-2 hover:underline">About us</Link>
        <Link href="https://calendly.com/emfahrurozi/30min" className="px-2 sm:px-4">
          <button className="border border-white hover:border-[#F26837] rounded-full px-4 sm:px-6 py-2 text-xl transition-all hover:bg-[#F26837] hover:text-white duration-300 flex items-center">
            Contact
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <main className="flex justify-end items-end h-[40vh]">
        <div className="text-right text-xl sm:text-2xl md:text-3xl leading-[0.89] tracking-[-0.05em] pr-4 sm:pr-8 md:pr-24 lg:pr-46">
          <p>not about my <span className="font-bold italic">ego.</span></p>
          <p>nor about your <span className="font-bold italic">ego.</span></p>
          <p>design is about our brand & customer <span className="font-bold italic">ego.</span></p>
        </div>
      </main>

      {/* CTA */}
      <div className="flex flex-col justify-center items-center min-h-[60vh] py-12 sm:py-16 md:py-20 lg:py-56 px-4">
        <Image
          src="/logo_desainego.svg"
          alt="Ego Logo"
          width={500}
          height={500}
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 pointer-events-none h-auto"
        />
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-tight tracking-[-0.05em] mt-8 font-normal not-italic">
          <p>our keyword: user-centered.</p>
          <p>we are your B2B global design studio.</p>
          <p>we help your brand match its customer ego.</p>
          <p>we blend creativity, empathy, and strategic thinking.</p>
        </div>
      </div>

      {/* Clients */}
      <div className="bg-black text-white px-4 py-5 sm:py-10 md:py-15 lg:py-20">
        <div className="flex flex-col justify-center gap-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-start leading-[1.2] tracking-[-0.05em] mb-12 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-24">
            we’ve collaborated with:
          </h2>
          <div className="flex justify-center gap-8 sm:gap-12 md:gap-22 flex-wrap py-6">
            <Image src="/brand/BPC.svg" alt="BPC" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/BBF.svg" alt="BBF" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/FSD.svg" alt="FSD" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/JD.svg" alt="JD" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/AB.svg" alt="AB" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
          </div>

          <div className="flex justify-center gap-8 sm:gap-12 md:gap-20 flex-wrap">
            <Image src="/brand/LB.svg" alt="LB" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/L.svg" alt="L" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/B.svg" alt="B" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/CA.svg" alt="CA" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/UII.svg" alt="UII" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
          </div>

          <div className="flex justify-center gap-8 sm:gap-12 md:gap-12 flex-wrap py-6">
            <Image src="/brand/AP.svg" alt="AP" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/OA.svg" alt="OA" width={100} height={50} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/WPP.svg" alt="WPP" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/S.svg" alt="Sprite" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/CC.svg" alt="CocaCola" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/J.svg" alt="Japfa" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
          </div>

          <div className="flex justify-center gap-8 sm:gap-12 md:gap-16 flex-wrap mr-0 sm:mr-0 md:mr-72">
            <Image src="/brand/BS.svg" alt="BS" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/OA.svg" alt="OA" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/P.svg" alt="Pertamina" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/Q.svg" alt="Q" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-black text-white px-4 py-20">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-start leading-[1.2] tracking-[-0.05em] mb-12 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
          let’s satisfy our customer (design) ego with <br /><span className="font-bold italic">desainego.</span>
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-start leading-[1.2] tracking-[-0.05em] mb-12 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
          we are experienced in:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-4 justify-items-center max-w-4xl mx-auto py-16">
          <div className="flex flex-col items-center text-center">
            <Image src="/service/BLVI.svg" alt="Brand Logo" width={150} height={150} className="pointer-events-none" />
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/service/WDD.svg" alt="Website Design" width={150} height={150} className="pointer-events-none" />
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/service/SMO.svg" alt="Social Media" width={150} height={150} className="pointer-events-none" />
          </div>

          <div className="flex flex-col items-center text-center">
            <Image src="/service/PC.svg" alt="Printed" width={100} height={100} className="pointer-events-none" />
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/service/PP.svg" alt="Product" width={100} height={100} className="pointer-events-none" />
          </div>
          <div className="flex flex-col items-center text-center pt-8 md:pt-16">
            <Image src="/service/AM.svg" alt="And More" width={100} height={100} className="pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Works */}
      <div id="works" className="bg-black text-white pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-12 px-10">
          <p className="text-[32px] text-start leading-[1.04] tracking-[-0.05em] pb-20 w-full">
            our prior works:
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-8 sm:gap-12 md:gap-20 animate-scroll-left px-4 sm:px-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="min-h-[450px] sm:min-h-[580px] w-[280px] sm:w-[350px] md:w-[450px] 
                        p-10 rounded-xl border border-[#F26837] relative flex flex-col justify-start"
              >
                <div className="flex flex-col gap-4 justify-center items-center">
                  <Image
                    src={testimonial.image}
                    width={365}
                    height={200}
                    alt="testimonial image"
                    className="rounded-lg pointer-events-none object-cover"
                  />
                  <p className="text-white text-sm sm:text-base leading-relaxed">{testimonial.text}</p>
                </div>
                <div className="mt-4">
                  <Link href={testimonial.link} className="text-white text-sm hover:underline">
                    Read more &gt;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Click */}
      <div className="w-full flex justify-end pb-18">
        <Link
          href="https://behance.net/emfahrurozi"
          className="text-xl sm:text-2xl md:text-3xl underline mr-6 sm:mr-12 md:mr-82"
        >
          click here for more details...
        </Link>
      </div>

      {/* Footer Section*/}
      <div id="contact" className="bg-black text-white px-4 sm:px-6 md:px-20">
        <div className="max-w-7xl mx-auto md:pt-20 pb-6">
          {/* Big Button */}
          <div className="flex flex-col items-center justify-center mb-12">
            <Link href="https://calendly.com/emfahrurozi/30min">
              <button
                className="bg-[#F26837] hover:bg-white sm:min-h-[144px] md:w-[1050px] flex items-center justify-center text-white text-4xl font-bold mx-auto px-10 py-4 transition"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <Image
                  src={isHover ? "/back_letscollab_org.svg" : "/back_letscollab.svg"}
                  alt=""
                  width={250}
                  height={150}
                  className="mx-auto transition-all duration-300"
                />
              </button>
            </Link>
          </div>
          {/* Social Media and Logo */}
          <div className="flex flex-col md:flex-row justify-between items-center mx-30 gap-10 mb-12">
            <div className="flex flex-col items-center md:items-start gap-6">
              <p className="text-sm">let’s connect on social media:</p>
              <div className="flex gap-3 sm:gap-4 md:gap-6">
                {[
                  { icon: "be", href: "https://behance.net/emfahrurozi" },
                  { icon: "ig", href: "https://instagram.com/desainego_" },
                  { icon: "x", href: "https://x.com/desainego_" },
                  { icon: "linkedin", href: "https://www.linkedin.com/company/desainego" },
                  { icon: "tt", href: "https://www.tiktok.com/@desainego" },
                ].map((item) => (
                  <Link
                    href={item.href}
                    key={item.icon}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={`/icon/ic_${item.icon}.svg`}
                      alt={item.icon}
                      width={32}
                      height={32}
                      className="w-10 sm:w-8 md:w-6 hover:scale-110 transition-transform duration-200"
                    />
                  </Link>
                ))}
              </div>
            </div>
            {/* Logo & Text */}
            <div className="flex flex-col items-center md:items-end">
              <Link href="#home">
                <Image
                  src="/logo_desainego.svg"
                  alt="Desainego Logo"
                  width={150}
                  height={150}
                  className="w-40 h-auto mb-2"
                />
              </Link>
              <p className="text-sm text-white">user-centered design studio.</p>
            </div>
          </div>
          <div className="pt-6 text-center text-sm">
            <p>Data Policy and Privacy</p>
            <p className="text-gray-400">Copyright © 2025</p>
          </div>
        </div>
      </div>

    </div>
  );
}