import Image from "next/image"
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
                        typesetting industry. Lorem Ipsum has bee
                        the industrys standard dummy text ever since ndustrys standard du ndustrys st
                        the 1500s, when an unknow printer took a galley ndustrys standard du ndustrys s
                        of type and scrambled it to make a type specimen book.</p>
        </details>

        <details>
          <summary><p className="titulo-duvida">Aqui é um exemplo de duvida</p>
          <Image className="faq-seta" src={Seta} alt="Seta"/></summary>
                        <p className="texto-duvida">is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been
                        the industrs standard dummy text ever since ndustrys standard du ndustrys st
                        the 1500s, when an unknow printer took a galley ndustrys standard du ndustrys s
                        of type and scrambled it to make a type specimen book.</p>
        </details>

        <details>
          <summary><p className="titulo-duvida">Aqui é um exemplo de duvida</p>
          <Image className="faq-seta" src={Seta} alt="Seta"/></summary>
                        <p className="texto-duvida">is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has bee
                        the industrys standard dummy text ever since ndustrys standard du ndustrys st
                        the 1500s, when an unknow printer took a galley ndustrys standard du ndustrys s
                        of type and scrambled it to make a type specimen book.</p>
        </details>

        <details>
          <summary><p className="titulo-duvida">Aqui é um exemplo de duvida</p>
          <Image className="faq-seta" src={Seta} alt="Seta"/></summary>
                        <p className="texto-duvida">is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been
                        the industrys standard dummy text ever since ndustrys standard du ndustrys st
                        the 1500s, when an unknow printer took a galley ndustry standard du ndustrys
                        of type and scrambled it to make a type specimen book.</p>
        </details>

        <details>
          <summary><p className="titulo-duvida">Aqui é um exemplo de duvida</p>
          <Image className="faq-seta" src={Seta} alt="Seta"/></summary>
                        <p className="texto-duvida">is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been
                        the industrys standard dummy text ever since ndustrys standard du ndustrys st
                        the 1500s, when an unknow printer took a galley ndustrys standard du ndustry s
                        of type and scrambled it to make a type specimen book.</p>
        </details>

        <details>
          <summary><p className="titulo-duvida">Aqui é um exemplo de duvida</p>
          <Image className="faq-seta" src={Seta} alt="Seta"/></summary>
                        <p className="texto-duvida">is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been
                        the industryss standard dummy text ever since ndustrys standard du ndustrys st
                        the 1500s, when an unknow printer took a galley ndustrys standard du ndustrys s
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