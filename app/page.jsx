import Link from "next/link";

export const metadata = {

}

const HomePage = () => {
  return (
    <div className="">
        <h1>Property Pulse</h1>
        <Link href='/properties'>Show Properties</Link>
    </div>
  )
}

export default HomePage