import Link from "next/link";

const links = [
  { href: "blah", name: "Home" },
]

export default function Navbar() {
  return (
    <nav>
      {
        links.map((link, ind) =>
          <Link
            key={ind}
            href={link.href}
          >
            {link.name}
          </Link>
        )
      }
    </nav>
  )
}
