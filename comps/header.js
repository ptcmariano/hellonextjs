import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/hellonextjs/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/hellonextjs/about">
          <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default Header