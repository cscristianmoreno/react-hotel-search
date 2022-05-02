import "./Project.css";
import Html from "./images/Html.js";
import Css from "./images/Css.js";
import Javascript from "./images/Javascript.js";
import Bootstrap from "./images/Bootstrap.js";
import React from "./images/React.js";
import Nodejs from "./images/Nodejs.js";

const Project = () => {
    return(
        <div className="class_project_container">
            <span className="class_project_title">Acerca del proyecto</span>

            <div className="class_project_description_container">
                <span className="class_project_project_description"><i style={{color: "orange"}} className="fas fa-scroll"/>&nbsp;&nbsp;Descripción:</span>
                <br/>
                <span>
                    Este proyecto está basado en la búsqueda de hoteles en todo el mundo utilizando la&nbsp;
                    <a href="https://docs.impala.travel/docs" target="_blank" className="class_project_description_text_visualized">API REST</a> de&nbsp;
                    <a href="https://impala.travel/" target="_blank" className="class_project_description_text_visualized">Impala Travel</a>.&nbsp;
                    Está hecho con la finalidad de sumar un proyecto más al <a href="https://cscristianmoreno.github.io/" target="_blank" className="class_project_description_text_visualized">Portafolios</a>&nbsp;
                    y sobre todo, para aumentar conocimientos en cuanto a las tecnologías respecta.
                </span>
            </div>

            <br/>

            <div className="class_project_description_container">
                <span className="class_project_project_description"><i style={{color: "orange"}} className="fas fa-code"/>&nbsp;&nbsp;Tecnologías utilizadas:</span>
                <br/>
                <div className="class_project_skills_container">
                    <div className="class_skill_container">
                        <Html/>
                        <span>HTML</span>
                    </div>

                    <div className="class_skill_container">
                        <Css/>
                        <span>CSS</span>
                    </div>

                    <div className="class_skill_container">
                        <Javascript/>
                        <span>JAVASCRIPT</span>
                    </div>

                    {/* <div className="class_skill_container">
                        <Bootstrap/>
                        <span>BOOTSTRAP</span>
                    </div>

                    <div className="class_skill_container">
                        <React/>
                        <span>REACT</span>
                    </div>

                    <div className="class_skill_container">
                        <Nodejs/>
                        <span>NODE JS</span>
                    </div> */}
                </div>

                <div className="class_project_skills_container">
                    <div className="class_skill_container">
                        <Bootstrap/>
                        <span>BOOTSTRAP</span>
                    </div>

                    <div className="class_skill_container">
                        <React/>
                        <span>REACT</span>
                    </div>

                    <div className="class_skill_container">
                        <Nodejs/>
                        <span>NODE JS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;