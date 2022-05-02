import "./Suscribe.css";
import InputGroup from "react-bootstrap/InputGroup"
import FormControl  from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


const Suscribe = () => {
    return(
        <div className="class_suscribe_container">
            <span className="class_suscribe_title">
                SUBSCRIBITE Y ACCEDÉ A <span className="class_suscribe_color">NUESTRAS NOVEDADES</span> Y NOTICIAS DE NUEVAS <span className="class_suscribe_color">FUNCIONALIDADES</span>
            </span>

            <div className="class_suscribe_input_container">
                <InputGroup className="mb-3">
                    <InputGroup.Text><i className="fas fa-paper-plane"/></InputGroup.Text>
                    <FormControl
                        placeholder="Ingresa tu correo electrónico"
                    />
                    <Button variant="primary">Suscribirme</Button>
                </InputGroup>
            </div>
        </div>
    )
}

export default Suscribe;