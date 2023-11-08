import Link from 'next/link'

import "./cabecalho.css"

export default function Cabecalho() {
  return (
    <header className='cabecalho'>
      <nav className='menu'>
        <Link className='menu-link' href="/">HOME</Link>
        <Link className='menu-link' href="/pages/sobre">SOBRE</Link>
        <Link className='menu-link' href="/pages/ajuda">AJUDA</Link>
        
      </nav>
    </header>
    
  )
}