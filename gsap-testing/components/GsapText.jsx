import { useGSAP } from "@gsap/react"
import gsap from "gsap";

export default function GsapText() {
  useGSAP(() => {
    gsap.to("#title", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    })

    gsap.fromTo(".para", {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      delay: 1,
      stagger: 0.1
    })
  }, []);

  return (
    <main className="m-6 space-y-6">
      <h1 id="title" className="text-2xl opacity-0">GSAP Text</h1>

      <p className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, consequuntur quos cum vel molestiae nesciunt quod veniam aliquam blanditiis facere praesentium omnis recusandae dolores alias labore autem minus. Magnam, dignissimos!
      </p>

      <p className="para">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste suscipit ipsum doloribus? Minus repellat rem doloremque optio unde magni? Aut sed reprehenderit atque magni excepturi quasi minus dolores eius voluptatibus.
      </p>

      <p className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum temporibus dolores laudantium, deserunt provident tenetur unde asperiores sed maiores minus dicta commodi error esse eos a molestias alias? Incidunt, quis?
      </p>
    </main>
  )
}
