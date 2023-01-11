import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import { faHouse, faMobileScreen, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer (){
    return(
        <footer>
            <div className="container-footer-all">
                <div className="container-body">
                <div className="colum1">
                    <h1>sobre nosotros</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, voluptate dolore laudantium sit fuga eaque quia voluptas explicabo? Ullam mollitia facere sit distinctio exercitationem voluptates eum quaerat possimus tempore corporis!
                    </p>
                </div>
                <div className="colum2">
                    <h1>redes sociales</h1>
                    <div className="row">
                        <a href="https://www.facebook.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png"/></a>
                        
                    </div>
                    <div className="row">
                        <a href="https://www.instagram.com/"><img src="https://eltallerdehector.com/wp-content/uploads/2022/06/033fd-logo-instagram-icon.png"/></a>
                        
                    </div>
                    <div className="row">
                        <a href="https://web.whatsapp.com/"><img src="https://1000marcas.net/wp-content/uploads/2019/11/WhatsApp-logo.png"/></a>
                        
                    </div>
                </div>
                <div className="colum3">
                    <h1>informacion de contacto</h1>
                    <div className="row2">
                        <FontAwesomeIcon style={{fontSize: "30px",marginRight: "20px"}} icon={faHouse}/>
                        <label >direccion</label>
                    </div>
                    <div className="row2">
                        <FontAwesomeIcon style={{fontSize: "35px",marginRight: "20px"}} icon={faMobileScreen}/>
                        <label >+54 1212 451256</label>
                    </div>
                    <div className="row2">
                        <FontAwesomeIcon style={{fontSize: "30px",marginRight: "20px"}} icon={faEnvelope }/>
                        <label >elcotillondenancy@gmail.com</label>
                    </div>
                </div>
                </div>
                
            </div>
            <div className="container-footer">
            <div className="copyright">
                ©2023 Todos los derechos reservados |<a>Roque Molina</a> 
            </div>
            <div className="information">
                <a >informacion de la compañia </a> |<a > Privacion y politica</a> |<a > Terminos y condiciones</a>
            </div>
                </div>
        </footer>
    )
}

export default Footer