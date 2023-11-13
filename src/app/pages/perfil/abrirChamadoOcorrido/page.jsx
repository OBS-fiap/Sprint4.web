import Link from "next/link"

import "../../../../styles/descricao.css"

export default function MeuPerfilOcorrido(){
    // ??

    return(
        <>
        <main className="container-descricao">
            <div className="chamado-descricao">
            <h3>Descreva o ocorrido</h3>
            <p>Escreva com detalhes o que aconteceu</p>
            <label htmlFor=""></label>
            <textarea className="descricao-ocorrido-text" name="" id="" cols="50" rows="20"></textarea>
            </div>
        </main>
        </>
    )


}