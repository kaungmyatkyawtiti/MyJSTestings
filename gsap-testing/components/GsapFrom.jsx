import { useGSAP } from "@gsap/react"
import gsap from "gsap";

export default function GsapFrom() {
  useGSAP(() => {
    gsap.from("#green-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "power1.inOut"
    })
  }, []);

  return (
    <main className="m-6 space-y-6">
      <h1 className="text-2xl">GSAP From</h1>

      <div
        id="green-box"
        className="w-20 h-20 rounded-2xl bg-green-600 shadow-md"
      />
    </main>
  )
}
