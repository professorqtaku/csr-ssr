import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>HEllo</h1>
      <Link href="/csr">CSR Page</Link>
      <Link href="/ssr">SSR Page</Link>
    </div>
  )
}
