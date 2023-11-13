import Image from "next/image"
import Link from "next/link"

import "../../../../styles/meuPerfil.css"

import FotoPerfil from "../../../assets/foto-perfil.png"
import Veiculo from "../../../assets/veiculo.png"

export default async function MeuPerfil(){
    // Variáveis que serão recebidas quando cliente clicar em acessar, e sua
    // transformação em base64 para encaminhar a autenticação para a api
    let username = 'SilvMaria@gmail.com';
    let password = 'Maria123';
    let auth = btoa(`${username}:${password}`)

    // Com as informações do cliente na session, utiliza as variaveis para 
    // transformar em base 64 pois para devolver somente os caminhões referente ao
    // cliente logado, também serão necessarias as credenciais do mesmo(email, senha)
    const response = await fetch('http://localhost:8080/PortoApi/api/caminhao', {
        headers: {
            'Authorization': `Basic ${auth}`
        }
    })
     // Armazena os dados recebidos na variavel data, para ser armazenado na session
     const data = await response.json()
     // só para carater de informação para ver no console oq está recebendo
     // TODO apagar depois
     console.log(data)

    // Alem das credencias esse endpoint precisa do id de endereço que vc armazenou
    // no objeto do cliente quando vc o recebeu no login, e o endereço que vc der o id
    // tem que ser do dono dessas credencias
    const response2 = await fetch(`http://localhost:8080/PortoApi/api/endereco/${1}`, {
        headers: {
            'Authorization': `Basic ${auth}`
        }
    })
     // Armazena os dados recebidos na variavel data, para ser armazenado na session
     const data2 = await response2.json()
     // só para carater de informação para ver no console oq está recebendo
     // TODO apagar depois
     console.log(data2)


     // TODO CHAMADOS API PYTHON RONALD
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