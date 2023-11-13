import Link from 'next/link'
import { Inter } from 'next/font/google'
import Cabecalho from '../components/Cabecalho/Cabecalho.jsx'
import Rodape from '../components/Rodape/Rodape.jsx'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GuinHelp',
  description: 'Site do caminhoneiro da Porto',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {/* <div>
            <Link href="/pages/sobre">SOBRE</Link>
            <Link href="/pages/ajuda">AJUDA</Link>
        </div> */}
        <Cabecalho />


        {children}
        
        <Rodape />
        {/* <p>RODAPÉ</p> */}
      </body>
    </html>
  )
}