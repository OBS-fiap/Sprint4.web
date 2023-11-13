import "../../../../styles/descricao.css"


export default async function Descricao() {
    const response = await fetch("http://127.0.0.1:8081/AdicionaDescricao", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          }
      });

      console.log(response)

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