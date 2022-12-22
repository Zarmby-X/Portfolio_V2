import "./NavBar.scss"
import { useNavigate } from "react-router-dom";

const NabVar = (props) => {

    let navigate = useNavigate();

    const ChangePage = (time,fast,navigateTo) =>{
        props.handleTransition(time,fast);
        setTimeout(() => {
            navigate(navigateTo)
        }, 1900);
    }

    return (
        <div id="NavBarMainContainer" className="BgColor-Thertiary">
            {/*Social media section*/}
            <div id="NavBarSocialMediaSection">
                <div className="Barlow Text-Secondary">
                    WA
                    <div className="NavBarSocialMediaSubLine"></div>
                </div>
                <div className="Barlow Text-Secondary">
                    IG
                    <div className="NavBarSocialMediaSubLine"></div>
                </div>
                <div className="Barlow Text-Secondary">
                    FB
                    <div className="NavBarSocialMediaSubLine"></div>
                </div>
                <div className="Barlow Text-Secondary">
                    LI
                    <div className="NavBarSocialMediaSubLine"></div>
                </div>
            </div>
            {/*End of the section*/}
            {/*Tittle section*/}
            <div id="NavBarTittleSection">
                <p className="Text-Primary Bebas" id="NavBarTittleSectionPrincipal">Portfolio</p>
                <p className="Bebas" id="NavBarTittleSectionSecondary">Portfolio</p>
            </div>
            {/*End of the section*/}
            {/*Menu section*/}
            <div id="NavBarMenuSection">
                <div className="Barlow Text-Secondary NavBarMenuOption" onClick={() => {ChangePage(2000,true,"/Home")}}>
                    Home
                    <div className="NavBarSocialMenuSubLine"></div>
                </div>
                <div className="Barlow Text-Secondary NavBarMenuOption" onClick={() => {ChangePage(2000,true,"/About")}}>
                    About
                    <div className="NavBarSocialMenuSubLine"></div>
                </div>
                <div className="Barlow Text-Secondary NavBarMenuOption">
                    Projects
                    <div className="NavBarSocialMenuSubLine"></div>
                </div>
                <div id="NabVarBurguerButton">
                    <div id="Line1" className="BgColor-Secondary NabVarBurguerButtonLine"></div>
                    <div id="Line2" className="BgColor-Secondary NabVarBurguerButtonLine"></div>
                </div>
            </div>
            {/*End of the section*/}
        </div>
    );
}

export default NabVar;