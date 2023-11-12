
import "../../../../styles/local.css"


export default function Local() {
    return(
        <>
        <main className="principal-local">
            <div className="container-automovel-form">
                <form className="automovel-form" action="">
                    <label >Selecione o automovel</label>
                    <select name="" id="">
                        <option value="">Opção 1</option>
                        <option value="">Opção 2</option>
                    </select>

                    <label htmlFor="">Selecione o condutor</label>
                    <select name="" id="">
                        <option value="">Mariana Carvalho</option>
                        <option value="">Pedro Henrique</option>
                    </select>
                </form>
            </div>
            <div className="container-endereco-form">
                <div className="endereco-form">
                <form className="endereco-colun1" action="">
                    <label htmlFor="">Endereço</label>
                    <input type="text" />

                    <label htmlFor="">Nº</label>
                    <input type="number" />

                    <label htmlFor="">CEP</label>
                    <input type="number" />

                    <label htmlFor="">Bairro</label>
                    <input type="text" />

                    <label htmlFor="">Estado</label>
                    <input type="text" />

                    <label htmlFor="">Cidade</label>
                    <input type="text" />
                    
                    <label htmlFor="">Referencia</label>
                    <input type="text" />
                </form>
                <div className="endereco-colun2">
                <iframe className="mapa"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.842492473341!2d-46.62580232375264!3d-23.574099762062016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597abf1a28ff%3A0x1b02a58f85e6395e!2zRklBUCAtIEFjbGltYcOnw6Nv!5e0!3m2!1spt-BR!2sbr!4v1698959223630!5m2!1spt-BR!2sbr"
                    width="600"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps">
                </iframe>
                </div>
                </div>
            </div>
        </main>
        </>
    )
}