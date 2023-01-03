import Link from "next/link";

export default function Page() {
    return (
    <>
        <h1>Hello, Next.js</h1>
        <div>public page를 만들때 page파일을 추가해줘야한다. index.js같은 용도.</div>

        <Link href="/dashboard">DashBoard</Link>
    </>
    )
  }