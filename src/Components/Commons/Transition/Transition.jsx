import { useEffect } from "react";
import { useState } from "react";
import "./Transition.scss"

const Transition = (props) => {

    const [showTransition, setShowTrnasition] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setShowTrnasition(true)
        }, props.fast?0:3000);
        setTimeout(() => {
            setShowTrnasition(false)
        }, props.fast?900:4000);  
    })

    return (
        <div id="containerTransition">
            <div id="ScreenTransition" className={`BgColor-Thertiary ${showTransition != null ? showTransition ? "showTransition" : "hiddeTransition" : null}`}></div>
        </div>
    );
}

export default Transition;