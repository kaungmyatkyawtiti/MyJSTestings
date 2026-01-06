import { useGSAP } from "@gsap/react"
import gsap from "gsap";

export default function GsapFromTo() {
  useGSAP(() => {
    gsap.fromTo("#red-box", {
      x: 0,
      rotation: 0,
      borderRadius: "0%",

    }, {
      x: 250,
      repeat: -1,
      yoyo: true,
      borderRadius: "100%",
      rotation: 360,
      duration: 2,
      ease: "bounce.out"
    })
  }, []);

  return (
    <main className="m-6 space-y-6">
      <h1 className="text-2xl">GSAP FromTo</h1>

      <div
        id="red-box"
        className="w-20 h-20 rounded-2xl bg-red-600 shadow-md"
      />
    </main>
  )
}
