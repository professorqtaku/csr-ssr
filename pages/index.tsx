import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ minHeight: "90vh" }}>
      <Link href="/csr">CSR Page</Link>
      <Link href="/ssr">SSR Page</Link>
    </div>
  );
}
