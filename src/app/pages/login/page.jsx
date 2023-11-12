import Image from "next/image"
import Link from "next/link"
 
import "../../../styles/login.css"


export default function Login() {
    return (
        <div className="body-login">
            <main className="principal-login">
                <div className="form-login">
                    <div className="login-conteudo">
                        <h1 className="login-titulo">Login</h1>
                        <p className="login-texto">Digite os seus dados de acesso no campo abaixo</p>
                    </div>
                    <form>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="idEmail" placeholder="Digite o seu e-mail"/>
                        </div>
                        <div>
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="idPassword" placeholder="Digite sua senha" />
                        </div>
                        <Link href="#" className="esqueci-senha">Esqueci minha senha</Link>
                        <button className="btn-login" type="submit">Acessar</button>
                    </form>
                </div>
            </main>
        </div>
        
    );
}