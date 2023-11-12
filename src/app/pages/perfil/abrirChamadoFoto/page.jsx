import "../../../../styles/foto.css"

export default function MeuPerfilFoto(){
    return(
        <>
            <main className="container-foto">
                <div className="conteudo-foto">
                    <h3>Envie uma foto do automovel </h3>
                    <p>Tire fotos que sejam possiveis de  vizualizar todo o veículo, 
                        o ambiente em sua volta e a condição que ele se encontra </p>
                </div>
                <div className="campo-inserir-img">
                    <form action="" method="" enctype="multipart/form-data">
                        <input className="inserir-img" type="file" name="imagem" accept="image/*"/>
                    </form>
                </div>
            </main>
        </>
    )

}