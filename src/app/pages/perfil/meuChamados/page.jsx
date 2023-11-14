import Image from 'next/image'

import "../../../../styles/meusChamados.css"

import Foto1 from "../../../assets/foto1.png"
import Foto2 from "../../../assets/foto2.png"
import Foto3 from "../../../assets/foto3.png"
import Foto4 from "../../../assets/foto4.png"

export default async function MeusChamados() {
    
    let username = 'SilvMaria@gmail.com';
    let password = 'Maria123';
    let auth = btoa(`${username}:${password}`)

   
    const response = await fetch('http://localhost:8080/PortoApi/api/caminhao', {
        headers: {
            'Authorization': `Basic ${auth}`
        }
    })
     
     const data = await response.json()
    
     console.log(data)
   
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
                <p><strong>Ocorrido:</strong> O carro bateu com outro caminhão durante o trajeto na 
                Av. Raposo Tavares, o outro carro perdeu o controle e atingiu o meu</p>

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