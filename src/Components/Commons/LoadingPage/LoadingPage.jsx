import "./LoadingPage.scss";
import Moon from "../Svg/Moon";
import Ellipse from "../../../Resources/Imgs/EllipseLoading.png"
import Star1 from "../../../Resources/Imgs/BigStar.png"
import Star2 from "../../../Resources/Imgs/TinyStar.png"
import Fade from 'react-reveal/Fade';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoadingPage = (props) => {

    let navigate = useNavigate();
    useEffect(() => {
        props.handleTransition(4500, false);
        setTimeout(() => {
            navigate(props.linkTo);
        }, 4000);
    })

    return (
        <div id="NotFoundMainContainer" className={`BgColor-Thertiary`}>
            <Fade>
                <div id="ringContainerLoading">
                    <img id="ellipseRingLoadingPage" src={Ellipse} alt="EllipseRing" />
                </div>
            </Fade>
            <Fade bottom cascade>
                <Fade>
                    <div>
                        <div id="MoonContainer">
                            <Moon width={250}></Moon>
                        </div>
                    </div>
                </Fade>
                <div>
                    <p id="LoadingTittle" className="BarlowRegular Text-Secondary">LOADING</p>
                    <p id="LoadingMessage" className="BarlowRegular Text-Secondary">PLEASE WAIT</p>
                </div>
            </Fade>
                <img src={Star1} alt="Star" id="star1LoadinPage" />
                <img src={Star2} alt="Star" id="star2LoadinPage" />
        </div>
    );
}

export default LoadingPage;