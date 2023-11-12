import Image from "next/image"
import Link from "next/link"

import "../../../../styles/meuPerfil.css"

import FotoPerfil from "../../../assets/foto-perfil.png"
import Veiculo from "../../../assets/veiculo.png"

export default function MeuPerfil(){
    return(
        <>
            <div className="perfil">
                
                <div className="container-perfil">
                    <Image className="foto-perfil" src={FotoPerfil} />
                    <div>
                        <h1 className="perfil-nome">Mariana Peixoto</h1>
                        <p className="perfil-email">marianapeixoto@gmail.com</p>
                    </div> 
                </div> 

                <section className="container-veiculo">
                    <h1>Veiculo</h1>
                    <Image className="img-veiculo-chamado" src={Veiculo} alt="Foto do Veiculo"/>
                        <div className="container-veiculo-propriedades">
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                              
                                <p>Modelo</p>
                            </div>
                            <p>Civic 2.0 - SPORT - PRATA</p>
                        </div>
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                                
                                <p>Marca</p>
                            </div>
                            <p>Honda</p>
                        </div>
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                             
                                <p>Combustivel</p>
                            </div>
                            <p>Gasolina</p>
                        </div>
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                               
                                <p>Tipo</p>
                            </div>
                            <p>Automóvel</p>
                        </div>
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                                
                                <p>Categoria</p>
                            </div>
                            <p>Particular</p>
                        </div>
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                               
                                <p>Passageiros</p>
                            </div>
                            <p>Quatro</p>
                        </div>
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                              
                                <p>Espécie</p>
                            </div>
                            <p>Passageiro</p>
                        </div>
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                               
                                <p>Carroceria</p>
                            </div>
                            <p>Não</p>
                        </div>
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                                
                                <p>Endereço</p>
                            </div>
                            <p>Rua Alemã, 678, - Vila Prudente , SP</p>
                        </div>
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                                
                                <p>Renavan</p>
                            </div>
                            <p>000000</p>
                        </div>
                    </div>
                </section>

                <section  className="container-chamados">
                <h1>MEUS CHAMADOS</h1>
                    <div className="chamados-historico">
                       
                        <div>
                            <p>CH0056 <strong>Em Andamento</strong></p>
                            <p>AV. Marandeira 789 - Sonho Lindo - Guarulhos, SP</p>
                            <p>Abertura : 03/12/2023</p>
                        </div>
                        <div>
                            <p>CH0056 <strong>FInalizado</strong></p>
                            <p>AV. Marandeira 789 - Sonho Lindo - Guarulhos, SP</p>
                            <p>Abertura : 20/10/2022</p>
                        </div>
                        <div>
                            <p>CH0056 <strong>Finalizado</strong></p>
                            <p>AV. Marandeira 789 - Sonho Lindo - Guarulhos, SP</p>
                            <p>Abertura : 15/02/2023</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}