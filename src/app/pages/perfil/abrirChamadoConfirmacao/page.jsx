import Image from "next/image"
import Link from "next/link"

import SOS from "../../../assets/sos.png"

import "../../../../styles/confirmacao.css"

export default function AbrirChamadoConfirmacao(){
    return(
        <>
        <main className="container-confirmacao">
            <Image className="img-sos" src={SOS} alt="Imagem vetor com uma moça pedindo ajuda pelo celular"/>
            <div className="confirmacao-conteudo">
                <h1>RECEBEMOS O SEU CHAMADO</h1>
                <p>Nossa equipe iniciou o processo para realizar o seu chamado</p>
                <p>Logo menos, nosso prestador chegará até o Local</p>
                <p>Você pode acompanhar todo o processo em MEUS CHAMADOS</p>
            </div>
         </main>
        </>
    )

}