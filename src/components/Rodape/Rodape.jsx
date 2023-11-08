import Image from "next/image";
import Link from "next/link";

import "./Rodape.css"

import Facebook from '../../app/assets/facebook.png'
import Instagram from '../../app/assets/instagram.png'
import Email from '../../app/assets/email.png'

export default function Rodape() {
    return(
        <footer>
            <div className='social-medias'>
                <Link className='social-media-logo' href="#"> <Image className="footer-img" src={Facebook} alt="Logo do facebook"/></Link>
                <Link className='social-media-logo' href="#"> <Image className="footer-img" src={Email} alt="Logo do e-mail"/></Link>
                <Link className='social-media-logo' href="#"> <Image className="footer-img" src={Instagram} alt="Logo do Instagram"/></Link>
            </div>
        </footer>
    )
}