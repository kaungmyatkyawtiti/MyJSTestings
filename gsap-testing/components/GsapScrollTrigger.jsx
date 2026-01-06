import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapScrollTrigger() {
  const scrollRef = useRef(null);

  useGSAP(() => {
    console.log("scrollRef current", scrollRef.current);
    console.log("children", scrollRef.current.children);

    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach(box => {
      gsap.to(box, {
        x: 150 * (boxes.indexOf(box) + 5),
        rotation: 360,
        borderRadius: "100%",
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 10%",
          scrub: true
        },
        ease: "power1.inOut"
      })
    })
  }, { scope: scrollRef })

  return (
    <main className="m-6 space-y-6">
      <div className="w-full h-screen">
        <h1 className="text-2xl">GSAP Scroll Trigger</h1>
      </div>

      <div
        className="mt-20 h-screen w-full"
        ref={scrollRef}
      >
        <div
          id="scroll-pink"
          className="w-20 h-20 rounded-2xl bg-pink-600 shadow-md scroll-box"
        />
        <div
          id="scroll-orange"
          className="w-20 h-20 rounded-2xl bg-orange-600 shadow-md scroll-box"
        />
      </div>
    </main>
  )
}
