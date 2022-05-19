import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ minHeight: "90vh", textAlign: "center", margin: "50px 0" }}>
      <Link href="/csr"><a className="link">CSR Page</a></Link>
      <br />
      <br />
      <Link href="/ssr"><a className="link">SSR Page</a></Link>
    </div>
  );
}
