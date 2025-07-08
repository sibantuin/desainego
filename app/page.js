import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="">
        <Image
          src="/back_ego.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          className="absolute w-1/2 h-auto pointer-events-none sm:w-auto"
        />
      </div>

      <div className="relative flex justify-end px-36 py-24">
        <Link href="/works" className="px-6 py-2 hover:underline">Works</Link>
        <Link href="/about" className="px-6 py-2 hover:underline">About us</Link>
        <Link href="/contact" className="px-6">
          <button className="border border-white hover:border-[#F26837] rounded-full px-6 py-2 text-sm transition-all hover:bg-[#F26837] hover:text-white duration-300 flex items-center">
            Contact
          </button>
        </Link>
      </div>

      <main className="flex justify-end items-end h-[40vh] pr-46">
        <div className="text-right text-[32px] leading-[0.89] tracking-[-0.05em]">
          <p>not about my <span className="font-bold italic">ego.</span></p>
          <p>nor about your <span className="font-bold italic">ego.</span></p>
          <p>design is about our brand & customer <span className="font-bold italic">ego.</span></p>
        </div>
      </main>

      <div className="abosolute flex flex-col justify-center items-center h-[80vh]">
        <Image
          src="/logo_desainego.svg"
          alt="Ego Logo"
          width={500}
          height={500}
          className="flex w-[25%] pointer-events-none h-auto"
        />
        <div className="text-[32px] text-center leading-[1.04] tracking-[-0.05em] mt-8 font-normal not-italic">
          <p>our keyword: user-centered.</p>
          <p>we are your B2B global design studio.</p>
          <p>we help your brand match its customer ego.</p>
          <p>we blend creativity, empathy, and strategic thinking.</p>
        </div>
      </div>

      <div className="bg-black text-white px-4 pb-20">
        <div className="flex flex-col justify-center gap-y-8">
          <h2 className="text-[32px] text-start leading-[1.04] tracking-[-0.05em] mb-12 w-full max-w-7xl mx-auto px-24">we’ve collaborated with:</h2>
          <div className="flex justify-center gap-22 flex-wrap py-6">
            <Image src="/brand/BPC.svg" alt="BPC" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/BBF.svg" alt="BBF" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/FSD.svg" alt="FSD" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/JD.svg" alt="JD" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/AB.svg" alt="AB" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
          </div>
          <div className="flex justify-center gap-20 flex-wrap">
            <Image src="/brand/LB.svg" alt="LB" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/L.svg" alt="L" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/B.svg" alt="B" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/CA.svg" alt="CA" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/UII.svg" alt="UII" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
          </div>
          <div className="flex justify-center gap-12 flex-wrap py-6">
            <Image src="/brand/AP.svg" alt="AP" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/OA.svg" alt="OA" width={100} height={50} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/WPP.svg" alt="WPP" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/S.svg" alt="Sprite" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/CC.svg" alt="CocaCola" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/J.svg" alt="Japfa" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
          </div>
          <div className="flex justify-center gap-16 flex-wrap mr-72">
            <Image src="/brand/BS.svg" alt="BS" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/OA.svg" alt="OA" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/P.svg" alt="Pertamina" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
            <Image src="/brand/Q.svg" alt="Q" width={150} height={100} className="object-contain pointer-events-none max-h-20" />
          </div>
        </div>
      </div>

      <div className="bg-black text-white px-4 py-20">
        <h2 className="text-[32px] text-start leading-[1.04] tracking-[-0.05em] mb-12 w-full max-w-7xl mx-auto px-24">
          let’s satisfy our customer (design) ego with <br /><span className="italic">desainego.</span>
        </h2>
        <p className="text-[32px] text-start leading-[1.04] tracking-[-0.05em] mb-12 w-full max-w-7xl mx-auto px-24">
          we are experienced in:
        </p>

        <div className="grid grid-cols-3 gap-y-6 justify-items-center max-w-4xl mx-auto py-16">
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
            <Image src="/service/PC.svg" alt="Printed" width={150} height={150} className="pointer-events-none" />
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/service/PP.svg" alt="Product" width={150} height={150} className="pointer-events-none" />
          </div>
          <div className="flex flex-col items-center text-center pt-16">
            <Image src="/service/AM.svg" alt="And More" width={150} height={150} className="pointer-events-none" />
          </div>
        </div>
      </div>

      {/* <div className="bg-black text-white pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Testimonials</h2>
          <p className="text-[#7BDB16] text-base sm:text-lg md:text-xl mt-2 mb-10">
            Don’t take our word for it—here’s what our partners say
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-8 sm:gap-12 md:gap-20 animate-scroll-left px-4 sm:px-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="min-h-[580px] sm:min-h-[580px] w-[280px] sm:w-[350px] md:w-[400px] 
                            p-6 sm:p-8 rounded-xl border border-[#7BDB16] relative flex flex-col justify-between"
              >
                <div className="flex flex-col gap-4">
                  <Image
                    src={testimonial.company}
                    width={100}
                    height={100}
                    alt={testimonial.name + " logo"}
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                  />
                  <p className="text-xl sm:text-2xl text-[#8CF719] font-bold">
                    {testimonial.quote}
                  </p>
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 pb-6 pt-4">
                  <p className="font-semibold text-base sm:text-lg">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="bg-black text-white px-4 sm:px-6 md:px-20">
        <div className="max-w-6xl mx-auto border-t border-l border-r border-[#575757] rounded-t-[40px] pt-20 px-4 sm:px-6 md:px-20 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-6">
              <Image
                src="/logo_desainego.svg"
                alt="Marktwoosh Logo"
                width={100}
                height={100}
                className="w-24 h-24"
              />
              <p className="text-sm text-white leading-relaxed text-justify text-left md:text-left max-w-md">
                To make high-quality digital marketing services affordable and accessible for everyone, enabling businesses of all sizes to market smarter and grow faster.
              </p>

              <div className="flex gap-6">
                {["fb", "ig", "x", "linkedin"].map((icon) => (
                  <Link href="#" key={icon}>
                    <Image
                      src={`/icon/ic_${icon}.svg`}
                      alt={icon}
                      width={24}
                      height={24}
                      className="hover:scale-110 transition-transform duration-200"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-bold">Contact Us</h4>
              <p>123-456-7890</p>
              <p>hello@marktwoosh.com</p>
              <p>Lorem ipsum</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-bold">Company</h4>
              <p>Imprint</p>
              <p>Data Privacy and Policy</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
            Copyright © 2025
          </div>
        </div>
      </div>
    </div>
  );
}
