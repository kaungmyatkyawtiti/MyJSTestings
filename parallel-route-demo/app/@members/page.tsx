import Link from "next/link";

export default function MemberPage() {
  // if (true) throw new Error("error");

  return (
    <div className="border p-[10rem] w-[30rem]">
      <h1>Members</h1>
      <Link href={"/salaries"}>
        Go Salaries
      </Link>
    </div>
  )
}

