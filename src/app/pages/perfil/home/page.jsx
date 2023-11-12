import Image from "next/image"
import Link from "next/link"
import "../../../../styles/home.css"

import Pessoa from "../../../assets/pessoa.svg"
import Chamado from  "../../../assets/adicionar.svg"
import Acompanhar from "../../../assets/relogio.svg"
import Veiculo from "../../../assets/carro.svg"
import Cancelar from "../../../assets/cancelar.svg"


export default function AbrirChamadoConfirmacao(){
    return(
        <>
        <main>
            <div className="container-home-perfil">
                <h1>Olá Mariana</h1>
                <p>Bem vindo de volta</p>
            </div>

            <div className="container-opcoes">
                <div className="opcoes-perfil">
                    <Link href="../perfil/meuPerfil">
                    <Image className="img-icon-opcoes" src={Pessoa} alt="icone de Meu perfil" />
                    <p className="chamado-opcao">MEU PERFIL</p>
                    </Link>
                </div>
                <div className="opcoes-perfil">
                    <Link href="../perfil/abrirChamadoLocal">
                    <Image className="img-icon-opcoes" src={Chamado} alt="icone formato adicao para abrir chamado" />
                    <div className="texto-opcoes">
                        <p className="chamado-opcao">ABRIR CHAMADO</p>
                    </div>
                    </Link>
                </div>
                <div className="opcoes-perfil">
                    <Link href="#">
                    <Image className="img-icon-opcoes" src={Acompanhar} alt=" icone relogio para acompanhar o chamado" />
                    <p className="chamado-opcao">ACOMPANHAR</p>
                    </Link>
                </div>
                
            </div>
        </main>
        </>
    )

}