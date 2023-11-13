import Image from 'next/image'

import "../../../../styles/meusChamados.css"

import Foto1 from "../../../assets/foto1.png"
import Foto2 from "../../../assets/foto2.png"
import Foto3 from "../../../assets/foto3.png"
import Foto4 from "../../../assets/foto4.png"

export default async function MeusChamados() {
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

   
    return(
        <>
        <main className='container-meuschamados'>
            <div className='container-informacoes'>
            <h3>CH00056 - <strong>Em andamento</strong></h3>
            <p><strong>Data da abertura:</strong> 03/12/2023</p>
            <p><strong>Data de Fechamento:</strong> ********</p>
            <p><strong>Local Chamado:</strong>Av. Marandeira 789 - Sonho Lindo, Guarulhos - SP </p>

            <div>
                <p><strong>Automovel:</strong> Civic - 2.0 - SPORT PRATA </p>
                <p><strong>Condutor:</strong> Mariana Peixoto</p>
                <p><strong>Ocorrido:</strong> is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    tandard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a 
                    type specimen </p>

                <p><strong>Fotos</strong></p>
                <div>
                    <Image src={Foto1} className='foto-ocorrido' alt='Foto enviada Pelo usuario do ocorrido'/>
                    <Image src={Foto2} className='foto-ocorrido' alt='Foto enviada pelo usuario do ocorrido'/>
                
                    <Image src={Foto3} className='foto-ocorrido' alt='foto enviada pelo usuario do ocorrido'/>
                    <Image src={Foto4} className='foto-ocorrido' alt='foto enviada pelo usuario do ocorrido '/>
                </div>
            </div>
            </div>
        </main>



        </>
    )
}