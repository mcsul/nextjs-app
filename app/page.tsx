import Image from 'next/image'
import Link from 'next/link'
import ProductCart from './components/ProductCart'

export default function Home() {
  return (
    <main>
      <h1>Next.js application</h1>
      <br></br>
      <Link href="/users">Users</Link>
      {/* <ProductCart /> */}
    </main>
  )
}
