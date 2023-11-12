import Image from "next/image"
import Link from "next/link"
import "../../../styles/ajuda.css"

import Chatbot2 from "../../assets/chatbot-2.png"
import Seta from "../../assets/seta.png"

export default function Ajuda() {
  return (
    <>
    <section className="banner">
      <h1 className="faq-titulo">FAQ</h1>
      <p className="faq-texto">Consulte as duvidas frequentes</p>
    </section>

    <main className="principal-faq">
      <div>
        <details>
          <summary><p className="titulo-duvida">Aqui é um exemplo de duvida</p>
          <Image className="faq-seta" src={Seta} alt="Seta"/></summary>
                        <p className="texto-duvida">is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since ndustry's standard du ndustry's st
                        the 1500s, when an unknow printer took a galley ndustry's standard du ndustry's s
                        of type and scrambled it to make a type specimen book.</p>
        </details>

        <details>
          <summary><p className="titulo-duvida">Aqui é um exemplo de duvida</p>
          <Image className="faq-seta" src={Seta} alt="Seta"/></summary>
                        <p className="texto-duvida">is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since ndustry's standard du ndustry's st
                        the 1500s, when an unknow printer took a galley ndustry's standard du ndustry's s
                        of type and scrambled it to make a type specimen book.</p>
        </details>

        <details>
          <summary><p className="titulo-duvida">Aqui é um exemplo de duvida</p>
          <Image className="faq-seta" src={Seta} alt="Seta"/></summary>
                        <p className="texto-duvida">is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since ndustry's standard du ndustry's st
                        the 1500s, when an unknow printer took a galley ndustry's standard du ndustry's s
                        of type and scrambled it to make a type specimen book.</p>
        </details>

        <details>
          <summary><p className="titulo-duvida">Aqui é um exemplo de duvida</p>
          <Image className="faq-seta" src={Seta} alt="Seta"/></summary>
                        <p className="texto-duvida">is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since ndustry's standard du ndustry's st
                        the 1500s, when an unknow printer took a galley ndustry's standard du ndustry's s
                        of type and scrambled it to make a type specimen book.</p>
        </details>

        <details>
          <summary><p className="titulo-duvida">Aqui é um exemplo de duvida</p>
          <Image className="faq-seta" src={Seta} alt="Seta"/></summary>
                        <p className="texto-duvida">is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since ndustry's standard du ndustry's st
                        the 1500s, when an unknow printer took a galley ndustry's standard du ndustry's s
                        of type and scrambled it to make a type specimen book.</p>
        </details>

        <details>
          <summary><p className="titulo-duvida">Aqui é um exemplo de duvida</p>
          <Image className="faq-seta" src={Seta} alt="Seta"/></summary>
                        <p className="texto-duvida">is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since ndustry's standard du ndustry's st
                        the 1500s, when an unknow printer took a galley ndustry's standard du ndustry's s
                        of type and scrambled it to make a type specimen book.</p>
        </details> 
      </div>

      <div className="container-chatbot">
        <Image className="chatbot2-img" src={Chatbot2} alt="Chatbot, robo para mensagens"/>
        <h1 className="chatbot-titulo">Bem-vindo ao Chatbot</h1>
        <p className="chatbot-texto">Ainda esta com duvidas?</p>
        <p className="chatbot-texto">Eu posso te ajudar!</p>
        <button className="chatbot-btn">Enviar mensagem</button>
      </div>
    </main>
    </>
  )
}