import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()

    return (
    <>
        <h1>Hello, Next.js</h1>
        <div>public page를 만들때 page파일을 추가해줘야한다. index.js같은 용도.</div>

        <Link href="/dashboard">DashBoard</Link>

    </>
    )
  }