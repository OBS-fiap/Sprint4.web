import "../../../../styles/descricao.css"


export default function Descricao() {
    return(
        <>
        <main className="container-descricao">
            <h1>Descreva o ocorrido</h1>
            <p>Escreva com detalhes o que aconteceu</p>

            <form action="">
                <textarea className="descricao-ocorrido-text" name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Enviar"/>
            </form>
        </main>
        </>

    )
}