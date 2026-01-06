import { useGSAP } from "@gsap/react"
import gsap from "gsap";

export default function GsapStagger() {
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 250,
      rotation: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      ease: "circ.inOut",
      // stagger: 0.5
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: "y",
        from: "center"
      }
    })
  }, []);

  return (
    <main className="m-6 space-y-6">
      <h1 className="text-2xl">GSAP Stagger</h1>

      <div className="flex gap-5">
        <div
          className="w-20 h-30 rounded-lg bg-indigo-200 shadow-md stagger-box"
        />
        <div
          className="w-20 h-30 rounded-lg bg-indigo-300 shadow-md stagger-box"
        />
        <div
          className="w-20 h-30 rounded-lg bg-indigo-400 shadow-md stagger-box"
        />
        <div
          className="w-20 h-30 rounded-lg bg-indigo-500 shadow-md stagger-box"
        />
        <div
          className="w-20 h-30 rounded-lg bg-indigo-600 shadow-md stagger-box"
        />
        <div
          className="w-20 h-30 rounded-lg bg-indigo-700 shadow-md stagger-box"
        />
        <div
          className="w-20 h-30 rounded-lg bg-indigo-800 shadow-md stagger-box"
        />
      </div>
    </main>
  )
}
