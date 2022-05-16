import Link from 'next/link'

const Nav = () => {
    return (
        <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/ssr"><a>SSR</a></Link>
            <Link href="/csr"><a>CSR</a></Link>
        </nav>
    )
}

export default Nav;