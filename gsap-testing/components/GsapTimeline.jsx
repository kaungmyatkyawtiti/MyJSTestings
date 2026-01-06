import { useGSAP } from "@gsap/react"
import gsap from "gsap";

export default function GsapTimeline() {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true
  });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut"
    })

    timeline.to("#yellow-box", {
      y: 250,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut"
    })

    timeline.to("#yellow-box", {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: 8,
      duration: 2,
      ease: "back.inOut"
    })
  }, []);

  const handleToggle = () => {
    console.log("toggle click")

    if (timeline.paused()) {
      timeline.play();
    } else {
      timeline.pause();
    }
  }

  return (
    <main className="m-6 space-y-6">
      <h1 className="text-2xl">GSAP Timeline</h1>

      <button
        onClick={handleToggle}
        className="py-1 px-3 bg-gray-600 hover:bg-gray-600/90 text-white rounded-md"
      >
        Toggle
      </button>
      <div
        id="yellow-box"
        className="w-20 h-20 rounded-2xl bg-yellow-600 shadow-md"
      />
    </main>
  )
}
