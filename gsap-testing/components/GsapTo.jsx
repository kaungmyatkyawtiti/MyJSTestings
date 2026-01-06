import { useGSAP } from "@gsap/react"
import gsap from "gsap";

export default function GsapTo() {
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "elastic"
    })
  }, []);

  return (
    <main className="m-6 space-y-6">
      <h1 className="text-2xl">GSAP To</h1>

      <div
        id="blue-box"
        className="w-20 h-20 rounded-2xl bg-blue-600 shadow-md"
      />
    </main>
  )
}
