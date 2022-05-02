import "./SubFooter.css";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl  from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const SubFooter = () => {
    return (
        <div className="class_subfooter_container">
            <div className="class_subfooter_main">
                <div className="class_subfooter">
                    <div className="class_subfooter_title_container">
                        <span className="class_subfooter_title">BUSCADOR DE HOTEL</span>

                        <p>
                             Buscá el hotel que tanto querés, para que puedas disfrutar de tus viajes.
                        </p>

                        <p>
                            Búsqueda de hoteles.
                            Mirá los mejores hoteles del mundo.
                        </p>

                        <p>
                            Linkedin: <a href="https://www.linkedin.com/in/cristian-moreno-797b1b218/" target="_blank">Cristian Moreno</a>
                            <br/>
                            Portafolios: <a href="https://cscristianmoreno.github.io/"  target="_blank">Cristian Moreno</a>
                        </p>
                    </div>

                    <div className="class_subfooter_features">
                        <span className="class_subfooter_title">CARACTERÍSTICAS</span>

                        <ul>
                            <li><i className="fas fa-angle-right"/>Simple y sencillo</li>
                            <li><i className="fas fa-angle-right"/>Responsive, utilizalo desde cualquier dispositivo</li>
                            <li><i className="fas fa-angle-right"/>Mira hoteles en todo el mundo</li>
                            <li><i className="fas fa-angle-right"/>Reservas Online</li>
                            <li><i className="fas fa-angle-right"/>Ordena por categoría</li>
                            <li><i className="fas fa-angle-right"/>Ordena por país</li>
                            <li><i className="fas fa-angle-right"/>Mira las imágenes de los hoteles</li>
                            <li><i className="fas fa-angle-right"/>Mira detalles, habitaciones y más</li>
                            <li><i className="fas fa-angle-right"/>Hoteles con gimnasios y más</li>
                            <li><i className="fas fa-angle-right"/>Localidades y mucho más</li>
                        </ul>
                    </div>
                </div>

                <div className="class_subfooter_contact">
                    <span>Suscríbete y accede a nuestras novedades y nuevas funcionalidades</span>

                    <div className="class_subfooter_input">
                        <InputGroup>
                            <InputGroup.Text><i className="fas fa-paper-plane"/></InputGroup.Text>
                            <FormControl
                                placeholder="Ingresá tu correo electrónico"
                            />
                            <Button variant="success">Suscribir</Button>
                        </InputGroup>

                        <div className="class_subfooter_icon_container">
                            <div className="class_subfooter_main_icon">
                                <div style={{backgroundColor: "#2c5c94"}} className="class_subfooter_icon">
                                    <i className="fab fa-linkedin"/>
                                </div>

                                <a href="https://www.linkedin.com/in/cristian-moreno-797b1b218/" target="_blank">Linkedin</a>
                            </div>

                            <div className="class_subfooter_main_icon">
                                <div style={{backgroundColor: "red"}} className="class_subfooter_icon">
                                    <i className="fab fa-git-alt"/>
                                </div>

                                <a href="https://github.com/cscristianmoreno" target="_blank">GIT</a>
                            </div>
                        </div>

                        <div className="class_subfooter_icon_container">
                            <div className="class_subfooter_main_icon">
                                <div style={{backgroundColor: "#25D366"}} className="class_subfooter_icon">
                                    <i className="fab fa-whatsapp"/>
                                </div>

                                <a href="https://wa.me/+5493874450711" target="_blank">Whatsapp</a>
                            </div>

                            <div className="class_subfooter_main_icon">
                                <div style={{backgroundColor: "#3b5998"}} className="class_subfooter_icon">
                                    <i className="fab fa-facebook-f"/>
                                </div>

                                <a href="https://www.facebook.com/cmoreno1234/" target="_blank">Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubFooter;