import Image from "next/image";
import Link from "next/link";
import "../styles/page.css"




import Guincho from "../../src/app/assets/guincho.png"
import PortoLogo from "../../src/app/assets/portoseguro.png"
import Batida from "../../src/app/assets/batida.png"
import Camera from "../../src/app/assets/camera.png"
import Mapa from "../../src/app/assets/mapa.png"
import Carro from "../../src/app/assets/carro.png"
import Chatbot from "../../src/app/assets/chatbot.png"


export default function Home() {
  return (
    <>
      <div>
        <main className="principal">
          <div className="container-main">
              <div className="container-textp">
                <h1 className="home-titulo">Guinhelp</h1>
                <p className="home-texto"> Problemas com o veiculo?</p>
                <p className="home-texto"> Fique calmo, nós vamos ajudar você!</p>
                <div className="container-chamado">
                <Link href="#" className="chamado">Abrir Chamado</Link>
              </div>
              </div>
              <div>
                  <Image className="principal-img" src={Guincho} alt="Guincho levando um veiculo"/>
                  <figcaption>Guincho levando um veiculo</figcaption>
              </div>
            </div>
        </main>

        <section className="parceria">
          <div className="parceria-box">
            <p className="parceria-titulo">Em parceria</p>
            <Image className="porto-logo" src={PortoLogo} alt="Logotipo da empresa porto seguro"/>
          </div>
        </section>

        <section className="processo">
             <h2 className="processo-titulo">COMO FUNCIONA?</h2>

             <div className="container-processo">
              <div className="processo-item"> 
                  <Image className="processo-img" src={Chatbot} alt="Um robo com celular"/>
                  <p className="processo-texto">Abrir Chamado</p>
              </div>

              <div className="processo-item"> 
                  <Image className="processo-img" src={Carro} alt="Um carro azul"/>
                  <p className="processo-texto">Selecionar Automovel</p>
              </div>

              <div className="processo-item"> 
                  <Image className="processo-img" src={Mapa} alt="Mapa localizando uma pessoa"/>
                  <p className="processo-texto">Enviar Localização</p>
              </div>

              <div className="processo-item"> 
                  <Image className="processo-img" src={Camera} alt="Camera fotografica"/>
                  <p className="processo-texto">Tirar Foto</p>
              </div>

              <div className="processo-item"> 
                  <Image className="processo-img" src={Batida} alt="Batida de dois veiculos"/>
                  <p className="processo-texto">Descrever Ocorrido</p>
              </div>
          </div>

          <div className="processo-box">
            <p className="processo-box-texto"> Recebemos o seu chamado e iniciamos o processo para resolver seu problema</p>
            <p className="processo-box-texto">Você pode conferir o andamento pelo SEU PERFIL </p>
          </div>
        </section>
      </div>

    </>
  )
}