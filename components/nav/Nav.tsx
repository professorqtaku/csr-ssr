import Link from 'next/link'

const Nav = () => {
    return (
      <nav>
        <Link href="/"><a className="link">Home</a></Link>
        <Link href="/ssr"><a className="link">SSR</a></Link>
        <Link href="/csr"><a className="link">CSR</a></Link>
      </nav>
    );
}

export default Nav;