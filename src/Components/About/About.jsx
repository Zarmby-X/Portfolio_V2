import "./About.scss"
import NabVar from "../Commons/NavVar/NavBar.jsx"
import MyPath from "./MyPath/MyPath";

const About = (props) =>{
    return(
        <div>
            <NabVar handleTransition={props.handleTransition}></NabVar>
            <MyPath></MyPath>
        </div>
    );
}

export default About;